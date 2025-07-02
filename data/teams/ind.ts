import { unfavorableSwap } from '../shorthand';
import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import {
  botProt,
  favorableSwap,
  getPick,
  ifNotConvey,
  prot,
} from '~/data/shorthand';

export const IndPickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      {
        id: '2026.1',
        details: {
          headline: `To TOR ${prot(4)}`,
          extra: [
            ifNotConvey([`2027 1st ${prot(4)}`, `2027 UTA 2nd & 2028 DAL 2nd`]),
          ],
        },
        summary: {
          isOwn: true,
          isConditional: true,
          teams: ['TOR'],
        },
      },
    ],
    roundTwo: [
      {
        id: '2026.2',
        details: {
          headline: 'To MIN / BOS / MEM / HOU',
        },
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['MIN', 'BOS', 'MEM', 'HOU'],
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
          ifNotSettled: {
            id: '2026.1',
            result: `To TOR ${prot(4)}`,
          },
        },
      },
    ],
    roundTwo: [
      {
        id: '2027.2',
        details: 'To OKC / SAS / MIA',
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['OKC', 'SAS', 'MIA'],
        },
      },
      {
        id: '2027.2.UTA',
        details: 'UTA',
        summary: {
          teams: ['UTA'],
          ifNotSettled: {
            id: '2026.1',
            result: 'To TOR',
          },
        },
      },
    ],
  },
  {
    year: 2028,
    roundOne: [
      {
        id: '2028.1',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
    ],
    roundTwo: [
      {
        id: '2028.2',
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
        id: '2028.2.DAL',
        details: 'DAL',
        summary: {
          teams: ['DAL'],
          ifNotSettled: {
            id: '2026.1',
            result: 'To TOR',
          },
        },
      },
    ],
  },
  {
    year: 2029,
    roundOne: [
      {
        id: '2029.1',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
    ],
    roundTwo: [
      {
        id: '2029.2',
        details: {
          headline: 'Best of IND / WAS',
          extra: ['Other to NYK'],
        },
        summary: {
          isOwn: true,
          teams: ['WAS'],
          swapType: 'favorable',
        },
      },
      getPick(2029, 2, 'POR'),
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
    roundTwo: [
      {
        id: '2030.2',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
      getPick(2030, 2, 'SAC'),
    ],
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
        details: `Own (${unfavorableSwap} MIA)`,
        summary: {
          isOwn: true,
          swapType: 'unfavorable',
          teams: ['MIA'],
        },
      },
    ],
  },
  {
    year: 2032,
    roundOne: [
      {
        id: '2032.1',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
    ],
    roundTwo: [
      {
        id: '2032.2',
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
