import { readFileSync } from 'fs';
import type { ParsedData, TeamData } from './types.js';

export function parseHtmlFile(filePath: string): ParsedData {
  const html = readFileSync(filePath, 'utf-8');
  return parseHtmlContent(html);
}

export function parseHtmlContent(html: string): ParsedData {
  const timestamp = extractTimestamp(html);
  const teams = extractTeamsData(html);
  return { timestamp, teams };
}

function extractTimestamp(html: string): string {
  const timestampMatch = html.match(/<meta property="rgm:datetime" content="([^"]+)"/);
  return timestampMatch ? timestampMatch[1] : 'Unknown';
}

function extractTeamsData(html: string): TeamData[] {
  const teamSectionRegex = /<h2>([^<]+) Future NBA Draft Picks<\/h2>[\s\S]*?<table[^>]*>[\s\S]*?<\/table>/g;
  const teamMatches = html.match(teamSectionRegex) || [];

  return teamMatches
    .map(parseTeamSection)
    .filter((team): team is TeamData => team !== null);
}

function parseTeamSection(teamSectionHtml: string): TeamData | null {
  const teamName = extractTeamName(teamSectionHtml);
  if (!teamName) return null;

  const picks = extractPicksData(teamSectionHtml);
  return { teamName, picks };
}

function extractTeamName(teamSectionHtml: string): string | null {
  const teamNameMatch = teamSectionHtml.match(/<h2>([^<]+) Future NBA Draft Picks<\/h2>/);
  return teamNameMatch ? teamNameMatch[1].trim() : null;
}

function extractPicksData(teamSectionHtml: string): Record<string, { firstRound: string; secondRound: string }> {
  const picks: Record<string, { firstRound: string; secondRound: string }> = {};

  const tbodyMatch = teamSectionHtml.match(/<tbody[^>]*>([\s\S]*?)<\/tbody>/);
  if (!tbodyMatch) return picks;

  const rowRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/g;
  let rowMatch;

  while ((rowMatch = rowRegex.exec(tbodyMatch[1])) !== null) {
    const cells = extractCellData(rowMatch[1]);

    if (isValidPickRow(cells)) {
      const [year, firstRound, secondRound] = cells;
      picks[year] = { firstRound, secondRound };
    }
  }

  return picks;
}

function extractCellData(rowHtml: string): string[] {
  const cellRegex = /<td[^>]*>([\s\S]*?)<\/td>/g;
  const cells: string[] = [];
  let cellMatch;

  while ((cellMatch = cellRegex.exec(rowHtml)) !== null) {
    const cleanContent = cellMatch[1]
      .replace(/<[^>]*>/g, '')
      .replace(/&nbsp;/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    cells.push(cleanContent);
  }

  return cells;
}

function isValidPickRow(cells: string[]): boolean {
  return cells.length === 3 && cells.every(cell => cell.length > 0);
}
