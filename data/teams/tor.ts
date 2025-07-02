import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { ifNotConvey, ownPick, prot, tradePick } from '~/data/shorthand';

export const TorPickMeta: YearMeta[] = [
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
        id: '2026.1.IND',
        details: {
          headline: `IND ${prot(4)}`,
          extra: [
            ifNotConvey([
              `2027 1st ${prot(4)}`,
              '2027 UTA 2nd & 2028 DAL 2nd',
            ]),
          ],
        },
        summary: {
          teams: ['IND'],
          isConditional: true,
        },
      },
    ],
    roundTwo: [
      {
        id: '2026.2',
        details: 'Own',
        summary: {
          isOwn: true,
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
        details: 'Own',
        summary: {
          isOwn: true,
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
      ownPick(2032, 1),
    ],
    roundTwo: [
      ownPick(2032, 2),
    ],
  },
]

const info: TeamInfo = {
  abbr: 'TOR',
  fullName: 'Toronto Raptors',
  location: 'Toronto',
  name: 'Raptors',
}

export const torMeta: TeamMeta = {
  info,
  picks: TorPickMeta,
}
