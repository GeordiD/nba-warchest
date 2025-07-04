import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { ifNotConvey, prot } from '~/data/shorthand';

export const ChiPickMeta: YearMeta[] = [
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
      {
        id: '2026.1.POR',
        details: {
          headline: `POR ${prot(14)}`,
          extra: [
            ifNotConvey([
              `2027 1st ${prot(14)}`,
              `2028 1st ${prot(14)}`,
              `2028 2nd`,
            ]),
          ],
        },
        summary: {
          isConditional: true,
          teams: ['POR'],
        },
      },
    ],
    roundTwo: [
      {
        id: '2026.2',
        details: 'To WAS',
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['WAS'],
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
            result: `To SAS ${prot(8)}`,
          },
        },
      },
    ],
    roundTwo: [
      {
        id: '2027.2',
        details: 'To WAS',
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['WAS'],
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
        details: 'Own',
        summary: {
          isOwn: true,
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
        details: 'Own',
        summary: {
          isOwn: true,
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
  abbr: 'CHI',
  fullName: 'Chicago Bulls',
  name: 'Bulls',
  location: 'Chicago',
};

export const chiMeta: TeamMeta = {
  info,
  picks: ChiPickMeta,
};
