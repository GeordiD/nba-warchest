import { createWordDiff } from './diff-utils.js';
import type { TeamData } from './types.js';

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

function hasYearChanges(
  oldPicks: { firstRound: string; secondRound: string } | undefined,
  newPicks: { firstRound: string; secondRound: string } | undefined,
): boolean {
  if (!oldPicks && newPicks) return true;
  if (oldPicks && !newPicks) return true;
  if (oldPicks && newPicks) {
    return oldPicks.firstRound !== newPicks.firstRound || oldPicks.secondRound !== newPicks.secondRound;
  }
  return false;
}

function logYearChanges(
  oldPicks: { firstRound: string; secondRound: string } | undefined,
  newPicks: { firstRound: string; secondRound: string } | undefined,
  year: string,
): void {
  if (!oldPicks && newPicks) {
    console.log(`  ${year}: NEW YEAR ADDED`);
    console.log(`    First Round: \x1b[32m${newPicks.firstRound}\x1b[0m`);
    console.log(`    Second Round: \x1b[32m${newPicks.secondRound}\x1b[0m`);
    return;
  }

  if (oldPicks && !newPicks) {
    console.log(`  ${year}: YEAR REMOVED`);
    return;
  }

  if (oldPicks && newPicks) {
    if (oldPicks.firstRound !== newPicks.firstRound) {
      console.log(`  ${year} First Round:`);
      console.log(createWordDiff(oldPicks.firstRound, newPicks.firstRound));
    }

    if (oldPicks.secondRound !== newPicks.secondRound) {
      console.log(`  ${year} Second Round:`);
      console.log(createWordDiff(oldPicks.secondRound, newPicks.secondRound));
    }
  }
}
