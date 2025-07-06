import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import {
  ifNotConvey,
  prot,
  tradePick,
  unfavorableSwap,
} from '~/data/shorthand';

export const MinPickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      {
        id: '2026.1',
        details: {
          headline: `To CLE / UTA (conditionally)`,
          extra: [
            'If UTA 1-8, MIN will receives the worst of CLE / UTA / MIN',
          ],
        },
        summary: {
          isOwn: true,
          isConditional: true,
          teams: ['UTA', 'CLE'],
          swapType: 'unfavorable',
        },
      },
    ],
    roundTwo: [
      {
        id: '2026.2',
        details: 'To NYK / BOS / WAS',
        summary: {
          isOwn: true,
          teams: ['NYK', 'BOS', 'WAS'],
          isTradedAway: true,
        },
      },
      {
        id: '2026.2.IND-MIA-SAS',
        details: 'Worst of IND / MIA / SAS',
        summary: {
          teams: ['IND', 'MIA', 'SAS'],
          swapType: 'unfavorable',
        },
      },
      {
        id: '2026.2.DEN-GSW',
        details: 'Worst of DEN / GSW',
        summary: {
          swapType: 'unfavorable',
          teams: ['DEN', 'GSW'],
        },
      },
    ],
  },
  {
    year: 2027,
    roundOne: [tradePick(2027, 1, 'UTA')],
    roundTwo: [tradePick(2027, 2, 'POR')],
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
    roundTwo: [tradePick(2028, 2, 'SAS')],
  },
  {
    year: 2029,
    roundOne: [
      {
        id: '2029.1',
        details: {
          headline: `To UTA ${prot(5)}`,
          extra: [ifNotConvey(['2029 2nd'])],
        },
        summary: {
          isOwn: true,
          isConditional: true,
          teams: ['UTA'],
        },
      },
    ],
    roundTwo: [
      {
        id: '2029.2',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
    ],
  },
  {
    year: 2030,
    roundOne: [
      {
        id: '2030.1',
        details: `Own (${unfavorableSwap} best of DAL / SAS) ${prot(1)}`,
        summary: {
          isOwn: true,
          swapType: 'mixed',
          teams: ['DAL', 'SAS'],
        },
      },
    ],
    roundTwo: [
      tradePick(2030, 2, 'DET'),
      {
        id: '2030.2.MEM',
        details: `MEM ${prot(50)}`,
        summary: {
          isConditional: true,
          teams: ['MEM'],
        },
      },
    ],
  },
  {
    year: 2031,
    roundOne: [tradePick(2031, 1, 'SAC')],
    roundTwo: [
      {
        id: '2031.2',
        details: 'Best of MIN / GSW',
        summary: {
          isOwn: true,
          swapType: 'favorable',
          teams: ['GSW'],
        },
      },
    ],
  },
  {
    year: 2032,
    roundOne: [
      {
        id: '2032.1',
        details: 'Own (frozen through 2027-28)',
        summary: {
          isOwn: true,
          frozen: 2028,
        },
      },
    ],
    roundTwo: [
      // TODO: 2 unspecified 2nd round picks from PHX
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
  abbr: 'MIN',
  fullName: 'Minnesota Timberwolves',
  location: 'Minnesota',
  name: 'Timberwolves',
};

export const minMeta: TeamMeta = {
  info,
  picks: MinPickMeta,
};
