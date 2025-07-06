#!/usr/bin/env node

import { exitForGitHubActions, parseCommandLineArgs, showHelp } from './cli.js';
import { compareTeams } from './comparator.js';
import { downloadLatestData } from './data-fetcher.js';
import { logSaveResult, saveDownloadedFile, shouldSaveFile } from './file-manager.js';
import { parseHtmlContent, parseHtmlFile } from './html-parser.js';

async function main(): Promise<void> {
  const { options, files } = parseCommandLineArgs();
  const [oldFile, newFile] = files;

  if (options.help || !oldFile) {
    showHelp();
    process.exit(0);
  }

  try {
    console.log('Loading data...');
    const oldData = parseHtmlFile(oldFile);

    let newData;
    let downloadedHtml: string | null = null;

    if (newFile) {
      console.log('Comparing with local file...');
      newData = parseHtmlFile(newFile);
    } else {
      console.log('Downloading latest data from RealGM...');
      downloadedHtml = await downloadLatestData();
      newData = parseHtmlContent(downloadedHtml);
    }

    console.log(`\n📊 COMPARISON RESULTS`);
    console.log(`Old data: ${oldData.timestamp} (${oldData.teams.length} teams)`);
    console.log(`New data: ${newData.timestamp} (${newData.teams.length} teams)`);

    const oldTeamMap = new Map(oldData.teams.map(team => [team.teamName, team]));
    const newTeamMap = new Map(newData.teams.map(team => [team.teamName, team]));

    const totalTeamsWithChanges = compareTeams(oldTeamMap, newTeamMap);

    let savedFilename: string | undefined;
    if (downloadedHtml && shouldSaveFile(totalTeamsWithChanges > 0, options.save)) {
      savedFilename = saveDownloadedFile(downloadedHtml);
    }

    logSaveResult(totalTeamsWithChanges > 0, options.save, savedFilename);
    console.log(`\n✅ Comparison complete! ${totalTeamsWithChanges} teams with changes.`);

    exitForGitHubActions(totalTeamsWithChanges > 0);
  } catch (error) {
    console.error('Error:', error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
