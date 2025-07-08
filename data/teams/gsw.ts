import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { ifNotConvey, prot, tradePick } from '~/data/shorthand';

export const GswPickMeta: YearMeta[] = [
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
    roundTwo: [{
      details: 'To CHA / MIN',
      summary: {
        isOwn: true,
        isTradedAway: true,
        teams: ['CHA', 'MIN'],
      },
    }],
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
    roundTwo: [{
      details: 'To PHI / WAS',
      summary: {
        isOwn: true,
        isTradedAway: true,
        teams: ['PHI', 'WAS'],
      },
    }],
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
    roundTwo: [tradePick(2028, 2, 'PHI')],
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
    roundTwo: [tradePick(2029, 2, 'BKN')],
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
        details: 'To MIN / DET',
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['MIN', 'DET'],
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
