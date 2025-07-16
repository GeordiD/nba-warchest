import { createWordDiff } from './diff-utils.js';
import type { TeamData, PickData } from './types.js';

export function compareTeams(oldTeamMap: Map<string, TeamData>, newTeamMap: Map<string, TeamData>): number {
  const allTeamNames = new Set([...oldTeamMap.keys(), ...newTeamMap.keys()]);
  let totalTeamsWithChanges = 0;

  for (const teamName of Array.from(allTeamNames).sort()) {
    const oldTeam = oldTeamMap.get(teamName);
    const newTeam = newTeamMap.get(teamName);

    if (hasTeamChanges(oldTeam, newTeam, teamName)) {
      totalTeamsWithChanges++;
    }
  }

  return totalTeamsWithChanges;
}

function hasTeamChanges(oldTeam: TeamData | undefined, newTeam: TeamData | undefined, teamName: string): boolean {
  if (!oldTeam && newTeam) {
    console.log(`\n🆕 NEW TEAM: ${teamName}`);
    return true;
  }

  if (oldTeam && !newTeam) {
    console.log(`\n❌ REMOVED TEAM: ${teamName}`);
    return true;
  }

  if (oldTeam && newTeam) {
    return compareTeamData(oldTeam, newTeam);
  }

  return false;
}

function compareTeamData(oldTeam: TeamData, newTeam: TeamData): boolean {
  const allYears = new Set([...Object.keys(oldTeam.picks), ...Object.keys(newTeam.picks)]);
  let hasChanges = false;

  for (const year of Array.from(allYears).sort()) {
    const oldPicks = oldTeam.picks[year];
    const newPicks = newTeam.picks[year];

    if (hasYearChanges(oldPicks, newPicks)) {
      if (!hasChanges) {
        console.log(`\n=== ${oldTeam.teamName} ===`);
        hasChanges = true;
      }
      logYearChanges(oldPicks, newPicks, year);
    }
  }

  return hasChanges;
}

function hasPickDataChanges(oldPickData: PickData, newPickData: PickData): boolean {
  // Check pick count changes (total or certainty)
  if (oldPickData.pickCount.total !== newPickData.pickCount.total
    || oldPickData.pickCount.definite !== newPickData.pickCount.definite
    || oldPickData.pickCount.conditional !== newPickData.pickCount.conditional) {
    return true;
  }

  // Check individual picks changes
  if (oldPickData.picks.length !== newPickData.picks.length) {
    return true;
  }

  for (let i = 0; i < oldPickData.picks.length; i++) {
    if (oldPickData.picks[i] !== newPickData.picks[i]) {
      return true;
    }
  }

  return false;
}

function hasYearChanges(
  oldPicks: { firstRound: PickData; secondRound: PickData } | undefined,
  newPicks: { firstRound: PickData; secondRound: PickData } | undefined,
): boolean {
  if (!oldPicks && newPicks) return true;
  if (oldPicks && !newPicks) return true;
  if (oldPicks && newPicks) {
    return hasPickDataChanges(oldPicks.firstRound, newPicks.firstRound)
      || hasPickDataChanges(oldPicks.secondRound, newPicks.secondRound);
  }
  return false;
}

function logYearChanges(
  oldPicks: { firstRound: PickData; secondRound: PickData } | undefined,
  newPicks: { firstRound: PickData; secondRound: PickData } | undefined,
  year: string,
): void {
  if (!oldPicks && newPicks) {
    console.log(`  ${year}: NEW YEAR ADDED`);
    logPickDataDetails(newPicks.firstRound, 'First Round', true);
    logPickDataDetails(newPicks.secondRound, 'Second Round', true);
    return;
  }

  if (oldPicks && !newPicks) {
    console.log(`  ${year}: YEAR REMOVED`);
    return;
  }

  if (oldPicks && newPicks) {
    if (hasPickDataChanges(oldPicks.firstRound, newPicks.firstRound)) {
      console.log(`  ${year} First Round:`);
      logPickDataChanges(oldPicks.firstRound, newPicks.firstRound);
    }

    if (hasPickDataChanges(oldPicks.secondRound, newPicks.secondRound)) {
      console.log(`  ${year} Second Round:`);
      logPickDataChanges(oldPicks.secondRound, newPicks.secondRound);
    }
  }
}

function logPickDataChanges(oldPickData: PickData, newPickData: PickData): void {
  // Log pick count changes prominently (total OR certainty changes)
  const totalChanged = oldPickData.pickCount.total !== newPickData.pickCount.total;
  const certaintyChanged = oldPickData.pickCount.definite !== newPickData.pickCount.definite
    || oldPickData.pickCount.conditional !== newPickData.pickCount.conditional;

  if (totalChanged || certaintyChanged) {
    const oldCount = formatPickCount(oldPickData.pickCount);
    const newCount = formatPickCount(newPickData.pickCount);

    if (totalChanged) {
      console.log(`    📊 Pick Counts: ${oldCount} → ${newCount}`);
    } else {
      // Same total but different certainty (green vs gold)
      console.log(`    📊 Pick Counts: ${oldCount} → ${newCount}`);
    }
  }

  // Show modified diff for any content changes
  const oldFullText = oldPickData.picks.join('; ');
  const newFullText = newPickData.picks.join('; ');
  if (oldFullText !== newFullText) {
    console.log(`    🔄 Modified:`);
    console.log(createWordDiff(oldFullText, newFullText));
  }
}

function logPickDataDetails(pickData: PickData, label: string, isNew: boolean = false): void {
  const color = isNew ? '\x1b[32m' : '\x1b[0m';
  const reset = '\x1b[0m';

  if (pickData.pickCount.total > 0) {
    const countStr = formatPickCount(pickData.pickCount);
    console.log(`    ${label}: ${color}${countStr}${reset}`);

    for (const pick of pickData.picks) {
      console.log(`      ${color}${pick}${reset}`);
    }
  } else {
    console.log(`    ${label}: ${color}${formatPickCount(pickData.pickCount)}${reset}`);
  }
}

function formatPickCount(pickCount: { definite: number; conditional: number; total: number }): string {
  if (pickCount.total === 0) {
    return '\x1b[41m\x1b[37m 0 \x1b[0m'; // Red background, white text
  }

  let result = '';
  if (pickCount.definite > 0) {
    result += `\x1b[42m\x1b[30m ${pickCount.definite} \x1b[0m`; // Green background, black text
  }

  if (pickCount.conditional > 0) {
    if (result) result += ' + ';
    result += `\x1b[43m\x1b[30m ${pickCount.conditional} \x1b[0m`; // Yellow background, black text
  }

  return result || '\x1b[41m\x1b[37m 0 \x1b[0m'; // Red background, white text
}
