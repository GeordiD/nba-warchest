#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'fs';
import { parseArgs } from 'util';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createWordDiff } from './diff-utils.js';

interface TeamData {
  teamName: string;
  picks: {
    [year: string]: {
      firstRound: string;
      secondRound: string;
    };
  };
}

interface ParsedData {
  timestamp: string;
  teams: TeamData[];
}

async function downloadLatestData(): Promise<string> {
  const url = 'https://basketball.realgm.com/nba/draft/future_drafts/team';

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; NBA Draft Tracker/1.0)',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.text();
  } catch (error) {
    throw new Error(`Failed to download data from ${url}: ${error instanceof Error ? error.message : error}`);
  }
}

function parseHtmlContent(html: string): ParsedData {
  // Extract timestamp from the meta tag
  const timestampMatch = html.match(/<meta property="rgm:datetime" content="([^"]+)"/);
  const timestamp = timestampMatch ? timestampMatch[1] : 'Unknown';

  // Extract team data by finding h2 headers and their following tables
  const teams: TeamData[] = [];

  // Find all team headers and their associated tables
  const teamSectionRegex = /<h2>([^<]+) Future NBA Draft Picks<\/h2>[\s\S]*?<table[^>]*>[\s\S]*?<\/table>/g;
  const teamMatches = html.match(teamSectionRegex) || [];

  for (const teamSectionHtml of teamMatches) {
    const team = parseTeamSection(teamSectionHtml);
    if (team) {
      teams.push(team);
    }
  }

  return { timestamp, teams };
}

function parseHtmlFile(filePath: string): ParsedData {
  const html = readFileSync(filePath, 'utf-8');
  return parseHtmlContent(html);
}

function parseTeamSection(teamSectionHtml: string): TeamData | null {
  // Extract team name from the h2 header
  const teamNameMatch = teamSectionHtml.match(/<h2>([^<]+) Future NBA Draft Picks<\/h2>/);
  if (!teamNameMatch) return null;

  const teamName = teamNameMatch[1].trim();
  const picks: { [year: string]: { firstRound: string; secondRound: string } } = {};

  // Extract table rows from tbody
  const tbodyMatch = teamSectionHtml.match(/<tbody[^>]*>([\s\S]*?)<\/tbody>/);
  if (!tbodyMatch) return { teamName, picks };

  const tbody = tbodyMatch[1];
  const rowRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/g;
  let rowMatch;

  while ((rowMatch = rowRegex.exec(tbody)) !== null) {
    const rowHtml = rowMatch[1];
    const cellRegex = /<td[^>]*>([\s\S]*?)<\/td>/g;
    const cells: string[] = [];
    let cellMatch;

    while ((cellMatch = cellRegex.exec(rowHtml)) !== null) {
      // Clean up HTML and extract text content
      const cellContent = cellMatch[1]
        .replace(/<[^>]*>/g, '') // Remove HTML tags
        .replace(/&nbsp;/g, ' ') // Replace &nbsp; with spaces
        .replace(/\s+/g, ' ') // Normalize whitespace
        .trim();
      cells.push(cellContent);
    }

    // If we have 3 cells: year, first round, second round
    if (cells.length === 3) {
      const year = cells[0];
      const firstRound = cells[1];
      const secondRound = cells[2];

      // Skip empty cells and add valid data
      if (year && firstRound && secondRound) {
        picks[year] = { firstRound, secondRound };
      }
    }
  }

  return { teamName, picks };
}

function compareTeamData(oldTeam: TeamData, newTeam: TeamData): boolean {
  const allYears = new Set([...Object.keys(oldTeam.picks), ...Object.keys(newTeam.picks)]);
  let hasChanges = false;

  for (const year of Array.from(allYears).sort()) {
    const oldPicks = oldTeam.picks[year];
    const newPicks = newTeam.picks[year];

    if (!oldPicks && newPicks) {
      if (!hasChanges) {
        console.log(`\n=== ${oldTeam.teamName} ===`);
        hasChanges = true;
      }
      console.log(`  ${year}: NEW YEAR ADDED`);
      console.log(`    First Round: \x1b[32m${newPicks.firstRound}\x1b[0m`);
      console.log(`    Second Round: \x1b[32m${newPicks.secondRound}\x1b[0m`);
    } else if (oldPicks && !newPicks) {
      if (!hasChanges) {
        console.log(`\n=== ${oldTeam.teamName} ===`);
        hasChanges = true;
      }
      console.log(`  ${year}: YEAR REMOVED`);
    } else if (oldPicks && newPicks) {
      // Compare first round
      if (oldPicks.firstRound !== newPicks.firstRound) {
        if (!hasChanges) {
          console.log(`\n=== ${oldTeam.teamName} ===`);
          hasChanges = true;
        }
        console.log(`  ${year} First Round:`);
        console.log(createWordDiff(oldPicks.firstRound, newPicks.firstRound));
      }

      // Compare second round
      if (oldPicks.secondRound !== newPicks.secondRound) {
        if (!hasChanges) {
          console.log(`\n=== ${oldTeam.teamName} ===`);
          hasChanges = true;
        }
        console.log(`  ${year} Second Round:`);
        console.log(createWordDiff(oldPicks.secondRound, newPicks.secondRound));
      }
    }
  }

  return hasChanges;
}

async function main(): Promise<void> {
  const { values, positionals } = parseArgs({
    args: process.argv.slice(2),
    options: {
      help: {
        type: 'boolean',
        short: 'h',
      },
      save: {
        type: 'boolean',
        short: 's',
      },
    },
    allowPositionals: true,
  });

  if (values.help || positionals.length < 1) {
    console.log(`
Usage: node index.ts <old-file> [new-file] [options]

Compare NBA draft pick HTML files and show differences.

Arguments:
  old-file    Path to the older HTML file
  new-file    Path to the newer HTML file (optional)
              If not provided, downloads latest data from RealGM

Options:
  -h, --help  Show this help message
  -s, --save  Save downloaded file when changes are detected

Examples:
  node index.ts old.html new.html     # Compare two local files
  node index.ts old.html              # Compare local file with latest from web
  node index.ts old.html --save       # Compare and save if changes found
`);
    process.exit(0);
  }
  
  const [oldFile, newFile] = positionals;

  if (!oldFile) {
    console.error('Error: Please provide at least the old file path');
    process.exit(1);
  }

  try {
    console.log('Loading data...');
    const oldData = parseHtmlFile(oldFile);

    let newData: ParsedData;
    let downloadedHtml: string | null = null;

    if (newFile) {
      // Compare two local files
      console.log('Comparing with local file...');
      newData = parseHtmlFile(newFile);
    } else {
      // Download latest data and compare
      console.log('Downloading latest data from RealGM...');
      downloadedHtml = await downloadLatestData();
      newData = parseHtmlContent(downloadedHtml);
    }

    console.log(`\n📊 COMPARISON RESULTS`);
    console.log(`Old data: ${oldData.timestamp} (${oldData.teams.length} teams)`);
    console.log(`New data: ${newData.timestamp} (${newData.teams.length} teams)`);

    // Create a map for easier lookup
    const oldTeamMap = new Map(oldData.teams.map(team => [team.teamName, team]));
    const newTeamMap = new Map(newData.teams.map(team => [team.teamName, team]));

    // Compare teams
    const allTeamNames = new Set([...oldTeamMap.keys(), ...newTeamMap.keys()]);
    let totalTeamsWithChanges = 0;

    for (const teamName of Array.from(allTeamNames).sort()) {
      const oldTeam = oldTeamMap.get(teamName);
      const newTeam = newTeamMap.get(teamName);

      if (!oldTeam && newTeam) {
        console.log(`\n🆕 NEW TEAM: ${teamName}`);
        totalTeamsWithChanges++;
      } else if (oldTeam && !newTeam) {
        console.log(`\n❌ REMOVED TEAM: ${teamName}`);
        totalTeamsWithChanges++;
      } else if (oldTeam && newTeam) {
        const hasChanges = compareTeamData(oldTeam, newTeam);
        if (hasChanges) {
          totalTeamsWithChanges++;
        }
      }
    }

    // Save the downloaded file if there were changes and we downloaded from web
    if (downloadedHtml && totalTeamsWithChanges > 0 && (values.save || process.env.GITHUB_ACTIONS)) {
      const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = dirname(__filename);
      const filename = join(__dirname, 'html', `new-${timestamp}.html`);
      writeFileSync(filename, downloadedHtml, 'utf-8');
      console.log(`\n💾 Changes detected! Saved new data to: ${filename}`);
    } else if (downloadedHtml && totalTeamsWithChanges > 0 && !values.save) {
      console.log(`\n📝 Changes detected! Use --save flag to save the downloaded file.`);
    }

    console.log(`\n✅ Comparison complete! ${totalTeamsWithChanges} teams with changes.`);

    // For GitHub Actions: exit with code 1 if changes were found (useful for alerting)
    if (process.env.GITHUB_ACTIONS && totalTeamsWithChanges > 0) {
      process.exit(1);
    }
  } catch (error) {
    console.error('Error:', error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
