import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { getPick, ifNotConvey, prot, tradePick } from '~/data/shorthand';

export const GswPickMeta: YearMeta[] = [
  {
    year: 2025,
    roundOne: [
      {
        id: '2025.1',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
    ],
    roundTwo: [
      {
        id: '2025.2',
        details: 'To BOS / WAS / DAL',
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['BOS', 'DAL', 'WAS'],
        },
      },
    ],
  },
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
    roundTwo: [
      tradePick(2026, 2, 'OKC'),
      getPick(2026, 2, 'ATL'),
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
      tradePick(2027, 2, 'WAS'),
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
      tradePick(2028, 2, 'POR'),
      getPick(2028, 2, 'ATL'),
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
        details: {
          headline: `To WAS ${prot(20)}`,
          extra: [
            ifNotConvey([
              '2030 2nd',
            ]),
          ],
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
          ifNotSettled: {
            id: '2030.1',
            result: 'To WAS',
          },
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
]

const info: TeamInfo = {
  abbr: 'GSW',
  fullName: 'Golden State Warriors',
  location: 'Golden State',
  name: 'Warriors',
}

export const gswMeta: TeamMeta = {
  info,
  picks: GswPickMeta,
}
