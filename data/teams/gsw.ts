import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { ifNotConvey, prot, tradePick } from '~/data/shorthand';

export const GswPickMeta: YearMeta[] = [
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
    roundTwo: [{
      id: '2026.2',
      details: 'To CHA / PHX',
      summary: {
        isOwn: true,
        isTradedAway: true,
        teams: ['CHA', 'PHX'],
      },
    }],
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
    roundTwo: [{
      id: '2027.2',
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
        id: '2028.1',
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
        id: '2029.1',
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
        id: '2030.1',
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
        id: '2030.2',
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
  abbr: 'GSW',
  fullName: 'Golden State Warriors',
  location: 'Golden State',
  name: 'Warriors',
};

export const gswMeta: TeamMeta = {
  info,
  picks: GswPickMeta,
};
