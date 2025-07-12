import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import {
  getPick,
  ifNotConvey,
  ownPick,
  prot,
  tradePick,
  unfavorableSwap,
} from '~/data/shorthand';

export const MinPickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      {
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
      tradePick(['NYK', 'BOS', 'WAS']),
      {
        details: 'Worst of IND / MIA / SAS',
        summary: {
          teams: ['IND', 'MIA', 'SAS'],
          swapType: 'unfavorable',
        },
      },
      {
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
    roundOne: [tradePick('UTA')],
    roundTwo: [
      tradePick('POR'),
      getPick('CLE'),
    ],
  },
  {
    year: 2028,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [tradePick('SAS')],
  },
  {
    year: 2029,
    roundOne: [
      {
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
      ownPick(),
    ],
  },
  {
    year: 2030,
    roundOne: [
      {
        details: `Own (${unfavorableSwap} best of DAL / SAS) ${prot(1)}`,
        summary: {
          isOwn: true,
          swapType: 'mixed',
          teams: ['DAL', 'SAS'],
        },
      },
    ],
    roundTwo: [
      tradePick('DET'),
      {
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
    roundOne: [tradePick('SAC')],
    roundTwo: [
      {
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
        details: 'Own (frozen through 2027-28)',
        summary: {
          isOwn: true,
          frozen: 2028,
        },
      },
    ],
    roundTwo: [
      // TODO: 2 unspecified 2nd round picks from PHX
      ownPick(),
      {
        details: 'Best of HOU / PHX',
        summary: {
          teams: ['HOU', 'PHX'],
          swapType: 'favorable',
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
