import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import {
  unfavorableSwap,
} from '~/data/shorthand';

export const IndPickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      {
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
    ],
    roundTwo: [
      {
        details: {
          headline: 'To MIN / BOS / MEM / BKN',
        },
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['MIN', 'BOS', 'MEM', 'BKN'],
        },
      },
    ],
  },
  {
    year: 2027,
    roundOne: [
      {
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
    ],
    roundTwo: [
      {
        details: 'To OKC / NYK / SAS / MIA',
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['OKC', 'SAS', 'NYK', 'MIA'],
        },
      },
      {
        details: 'UTA',
        summary: {
          teams: ['UTA'],
        },
      },
    ],
  },
  {
    year: 2028,
    roundOne: [
      {
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
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
      {
        details: 'DAL',
        summary: {
          teams: ['DAL'],
        },
      },
    ],
  },
  {
    year: 2029,
    roundOne: [
      {
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
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
      {
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
    ],
    roundTwo: [
      {
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
    ],
  },
  {
    year: 2031,
    roundOne: [
      {
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
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
      {
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
    ],
    roundTwo: [
      {
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
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
