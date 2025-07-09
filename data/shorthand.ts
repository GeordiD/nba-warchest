import type { PickMeta } from '~/data/PickMetaTypes';

export const favorableSwap = 'favorable swap with';
export const unfavorableSwap = 'unfavorable swap with';

const doProtections = (num: number, isTop = true, subs = true) =>
  `${subs ? '[' : ''}${isTop ? 'top' : 'bot'} ${num} prot.${subs ? ']' : ''}`;

export const prot = (num: number, subs = true) =>
  doProtections(num, true, subs);
export const botProt = (num: number, subs = true) =>
  doProtections(num, false, subs);

export const ifNotConvey = (becomes: string[], pickName?: string) => {
  const conveyanceLine = `If ${
    pickName ? pickName + ' pick' : ''
  } does not convey, becomes`;

  if (becomes.length > 1) {
    return [`${conveyanceLine}:`, ...becomes];
  } else {
    return `${conveyanceLine} ${becomes[0]}`;
  }
};

export const tradePick = (
  team: TeamAbbr | TeamAbbr[],
): PickMeta => ({
  details: `To ${Array.isArray(team) ? team.join(' / ') : team}`,
  summary: {
    isOwn: true,
    teams: Array.isArray(team) ? team : [team],
    isTradedAway: true,
  },
});

export const getPick = (
  team: TeamAbbr,
): PickMeta => ({
  details: team,
  summary: {
    teams: [team],
  },
});

export const ownPick = (): PickMeta => ({
  details: 'Own',
  summary: {
    isOwn: true,
  },
});
