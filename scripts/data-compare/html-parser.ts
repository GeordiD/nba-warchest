import { readFileSync } from 'fs';
import type { ParsedData, TeamData, PickData } from './types.js';

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

function extractPicksData(teamSectionHtml: string): Record<string, { firstRound: PickData; secondRound: PickData }> {
  const picks: Record<string, { firstRound: PickData; secondRound: PickData }> = {};

  const tbodyMatch = teamSectionHtml.match(/<tbody[^>]*>([\s\S]*?)<\/tbody>/);
  if (!tbodyMatch) return picks;

  const rowRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/g;
  let rowMatch;

  while ((rowMatch = rowRegex.exec(tbodyMatch[1])) !== null) {
    const cells = extractCellData(rowMatch[1]);

    if (isValidPickRow(cells)) {
      const [year, firstRoundHtml, secondRoundHtml] = cells;
      picks[year] = {
        firstRound: parsePickData(firstRoundHtml),
        secondRound: parsePickData(secondRoundHtml),
      };
    }
  }

  return picks;
}

function extractCellData(rowHtml: string): string[] {
  const cellRegex = /<td[^>]*>([\s\S]*?)<\/td>/g;
  const cells: string[] = [];
  let cellMatch;

  while ((cellMatch = cellRegex.exec(rowHtml)) !== null) {
    // For year column, clean normally
    if (cells.length === 0) {
      const cleanContent = cellMatch[1]
        .replace(/<[^>]*>/g, '')
        .replace(/&nbsp;/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
      cells.push(cleanContent);
    } else {
      // For pick columns, preserve HTML for further parsing
      cells.push(cellMatch[1]);
    }
  }

  return cells;
}

function isValidPickRow(cells: string[]): boolean {
  return cells.length === 3 && cells[0].length > 0;
}

function parsePickData(cellHtml: string): PickData {
  // Extract pick count from colored spans
  const pickCount = extractPickCount(cellHtml);

  // Extract individual picks from paragraphs
  const picks = extractIndividualPicks(cellHtml);

  return {
    picks,
    pickCount,
  };
}

function extractPickCount(cellHtml: string): { definite: number; conditional: number; total: number } {
  let definite = 0;
  let conditional = 0;

  // Extract green numbers (definite picks)
  const greenMatches = cellHtml.match(/<span style="color: green;">([^<]+)<\/span>/g) || [];
  for (const match of greenMatches) {
    const numberMatch = match.match(/>([0-9]+)</);
    if (numberMatch) {
      definite += parseInt(numberMatch[1], 10);
    }
  }

  // Extract gold numbers (conditional picks)
  const goldMatches = cellHtml.match(/<span style="color: gold;">([^<]+)<\/span>/g) || [];
  for (const match of goldMatches) {
    const numberMatch = match.match(/>([0-9]+)</);
    if (numberMatch) {
      conditional += parseInt(numberMatch[1], 10);
    }
  }

  // Handle "+ X" format for conditional picks
  const plusMatches = cellHtml.match(/\+ <span style="color: gold;">([0-9]+)<\/span>/g) || [];
  for (const match of plusMatches) {
    const numberMatch = match.match(/>([0-9]+)</);
    if (numberMatch) {
      conditional += parseInt(numberMatch[1], 10);
    }
  }

  return {
    definite,
    conditional,
    total: definite + conditional,
  };
}

function extractIndividualPicks(cellHtml: string): string[] {
  if (!cellHtml || cellHtml.trim() === '') {
    return [];
  }

  // Remove pick count spans first to avoid including them in pick descriptions
  let cleanHtml = cellHtml.replace(/<strong><p><span style="color: [^"]+;">[^<]*<\/span><\/p><\/strong>/g, '');
  cleanHtml = cleanHtml.replace(/<strong><p><span style="color: [^"]+;">[^<]*<\/span> \+ <span style="color: [^"]+;">[^<]*<\/span><\/p><\/strong>/g, '');

  // Extract paragraphs
  const paragraphMatches = cleanHtml.match(/<p[^>]*>([\s\S]*?)<\/p>/g) || [];

  const picks: string[] = [];

  for (const paragraph of paragraphMatches) {
    const cleanPick = cleanHtmlTags(paragraph);
    if (cleanPick && cleanPick !== '') {
      picks.push(cleanPick);
    }
  }

  // If no paragraphs found, fall back to cleaning the entire content
  if (picks.length === 0) {
    const fallbackClean = cleanHtmlTags(cleanHtml);
    if (fallbackClean && fallbackClean !== '') {
      picks.push(fallbackClean);
    }
  }

  return picks;
}

function cleanHtmlTags(html: string): string {
  return html
    // Remove all HTML tags completely
    .replace(/<[^>]*>/g, '')
    // Convert HTML entities
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, '\'')
    // Normalize whitespace
    .replace(/\s+/g, ' ')
    .trim();
}
