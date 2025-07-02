import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { getPick, tradePick, unfavorableSwap } from '~/data/shorthand';

export const ClePickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      {
        id: '2026.1',
        details: {
          headline: `Unfavorable swap with UTA / MIN`,
          extra: [
            'Less favorable of CLE and better of UTA / MIN',
            'If UTA does not convey 1st to OKC in 2025, pick is top 8 prot.',
          ],
        },
        summary: {
          isOwn: true,
          swapType: 'mixed',
          teams: ['UTA', 'MIN'],
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
      tradePick(2027, 1, 'UTA'),
    ],
    roundTwo: [
      {
        id: '2027.2',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
      getPick(2027, 2, 'DEN'),
    ],
  },
  {
    year: 2028,
    roundOne: [
      {
        id: '2028.1',
        details: `Own (${unfavorableSwap} UTA)`,
        summary: {
          isOwn: true,
          swapType: 'unfavorable',
          teams: ['UTA'],
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
      tradePick(2029, 1, 'UTA'),
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
      tradePick(2030, 2, 'SAS'),
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
]

const info: TeamInfo = {
  abbr: 'CLE',
  fullName: 'Cleveland Cavaliers',
  location: 'Cleveland',
  name: 'Cavaliers',
}

export const cleMeta: TeamMeta = {
  info,
  picks: ClePickMeta,
}
