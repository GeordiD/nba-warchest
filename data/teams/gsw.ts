import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { ifNotConvey, ownPick, prot, tradePick } from '~/data/shorthand';

export const GswPickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      tradePick(['CHA', 'MIN']),
    ],
  },
  {
    year: 2027,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      tradePick(['PHI', 'WAS']),
    ],
  },
  {
    year: 2028,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [tradePick('PHI')],
  },
  {
    year: 2029,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [tradePick('BKN')],
  },
  {
    year: 2030,
    roundOne: [
      {
        details: {
          headline: `To WAS ${prot(20)}`,
          extra: [ifNotConvey(['2030 2nd'])],
        },
        summary: {
          isOwn: true,
          isConditional: true,
          teams: ['WAS'],
        },
      },
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
      tradePick(['MIN', 'DET']),
    ],
  },
  {
    year: 2032,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      {
        details: `To MEM ${prot(50)}`,
        summary: {
          isOwn: true,
          teams: ['MEM'],
          isConditional: true,
        },
      },
    ],
  },
];

const info: TeamInfo = {
  abbr: 'GSW',
  fullName: 'Golden State Warriors',
  location: 'Golden State',
  name: 'Warriors',
};

export const gswMeta: TeamMeta = {
  info,
  picks: GswPickMeta,
};
