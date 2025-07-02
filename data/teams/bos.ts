import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { prot, tradePick, unfavorableSwap } from '~/data/shorthand';

export const bosPickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      {
        id: '2026.1',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
    ],
    roundTwo: [
      {
        id: '2026.2',
        details: {
          headline: `Own (${unfavorableSwap} with better of IND / MIA)`,
        },
        summary: {
          isOwn: true,
          swapType: 'mixed',
        },
      },
      {
        id: '2026.2.MIN-NYK-NOP-POR',
        details: `Most favorable of MIN / NYK / NOP / POR`,
        summary: {
          teams: ['MIN', 'NYK', 'NOP', 'POR'],
          swapType: 'favorable',
        },
      },
    ],
  },
  {
    year: 2027,
    roundOne: [
      {
        id: '2027.1',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
    ],
    roundTwo: [
      {
        id: '2027.2',
        details: 'To ORL',
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['ORL'],
        },
      },
      {
        id: '2027.2.POR-NOP',
        details: `Least favorable of POR and NOP ${prot(55)}`,
        summary: {
          teams: ['POR', 'NOP'],
          isConditional: true,
          swapType: 'unfavorable',
        },
      },
    ],
  },
  {
    year: 2028,
    roundOne: [
      {
        id: '2028.1',
        details: `Own (${unfavorableSwap} SAN ${prot(1)})`,
        summary: {
          isOwn: true,
          swapType: 'unfavorable',
          teams: ['SAS'],
        },
      },
    ],
    roundTwo: [
      {
        id: '2028.2',
        details: `To PHX ${prot(45)}`,
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['PHX'],
        },
      },
    ],
  },
  {
    year: 2029,
    roundOne: [
      {
        id: '2029.1',
        details: {
          headline: 'To POR / WAS',
          extra: [
            'Best and least favorable of BOS / POR / WAS to POR',
            'Second most favorable to WAS',
          ],
        },
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['POR', 'WAS'],
        },
      },
    ],
    roundTwo: [
      {
        id: '2029.2',
        details: 'To OKC',
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['OKC'],
        },
      },
    ],
  },
  {
    year: 2030,
    roundOne: [
      {
        id: '2030.1',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
    ],
    roundTwo: [tradePick(2030, 2, 'HOU')],
  },
  {
    year: 2031,
    roundOne: [
      {
        id: '2031.1',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
    ],
    roundTwo: [
      {
        id: '2031.2',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
    ],
  },
];

const info: TeamInfo = {
  abbr: 'BOS',
  fullName: 'Boston Celtics',
  name: 'Celtics',
  location: 'Boston',
};

export const bosMeta: TeamMeta = {
  info,
  picks: bosPickMeta,
};
