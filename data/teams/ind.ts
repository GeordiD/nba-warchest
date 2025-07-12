import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import {
  getPick,
  ownPick,
  tradePick,
  unfavorableSwap,
} from '~/data/shorthand';

export const IndPickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      tradePick(['MIN', 'BOS', 'MEM', 'BKN']),
    ],
  },
  {
    year: 2027,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      tradePick(['OKC', 'SAS', 'NYK', 'MIA']),
      getPick('UTA'),
    ],
  },
  {
    year: 2028,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      {
        details: {
          headline: `Best of IND / PHX`,
          extra: ['Worst to NYK'],
        },
        summary: {
          isOwn: true,
          swapType: 'favorable',
          teams: ['IND', 'PHX'],
        },
      },
      getPick('DAL'),
    ],
  },
  {
    year: 2029,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      {
        details: {
          headline: 'Best of IND / WAS',
          extra: ['Other to POR'],
        },
        summary: {
          isOwn: true,
          teams: ['WAS'],
          swapType: 'favorable',
        },
      },
    ],
  },
  {
    year: 2030,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      ownPick(),
    ],
  },
  {
    year: 2031,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      {
        details: `Own (${unfavorableSwap} MIA / MEM)`,
        summary: {
          isOwn: true,
          swapType: 'unfavorable',
          teams: ['MIA', 'MEM'],
        },
      },
    ],
  },
  {
    year: 2032,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      ownPick(),
    ],
  },
];

const info: TeamInfo = {
  abbr: 'IND',
  fullName: 'Indiana Pacers',
  location: 'Indiana',
  name: 'Pacers',
};

export const indMeta: TeamMeta = {
  info,
  picks: IndPickMeta,
};
