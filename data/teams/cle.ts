import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { getPick, tradePick, unfavorableSwap } from '~/data/shorthand';

export const ClePickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      {
        details: {
          headline: `Swap with UTA* / MIN / ATL / SAS`,
          extra: [[
            'CLE receives worst of (1) and (2):',
            '(1): Worst of CLE and better of UTA (if 1-8) / MIN (or CLE if UTA does not convey)',
            '(2): Worst of ATL / SAS',
          ]],
        },
        summary: {
          isOwn: true,
          swapType: 'unfavorable',
          teams: ['UTA', 'MIN', 'ATL', 'SAS'],
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
    year: 2027,
    roundOne: [
      tradePick(2027, 1, 'UTA'),
    ],
    roundTwo: [
      tradePick(2027, 2, 'MIN'),
      getPick(2027, 2, 'DEN'),
    ],
  },
  {
    year: 2028,
    roundOne: [
      {
        details: `Own (${unfavorableSwap} ATL / UTA)`,
        summary: {
          isOwn: true,
          swapType: 'unfavorable',
          teams: ['ATL', 'UTA'],
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
    year: 2029,
    roundOne: [
      tradePick(2029, 1, 'UTA'),
    ],
    roundTwo: [
      tradePick(2029, 2, 'ATL'),
    ],
  },
  {
    year: 2030,
    roundOne: [
      {
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
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
    ],
    roundTwo: [
      tradePick(2031, 2, 'BOS'),
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
