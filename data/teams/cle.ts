import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { getPick, ownPick, tradePick, unfavorableSwap } from '~/data/shorthand';

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
      ownPick(),
    ],
  },
  {
    year: 2027,
    roundOne: [
      tradePick('UTA'),
    ],
    roundTwo: [
      tradePick('MIN'),
      getPick('DEN'),
    ],
  },
  {
    year: 2028,
    roundOne: [
      {
        details: `Own (${unfavorableSwap} ATL / CLE / UTA)`,
        summary: {
          isOwn: true,
          swapType: 'unfavorable',
          teams: ['ATL', 'CLE', 'UTA'],
        },
      },
    ],
    roundTwo: [
      ownPick(),
    ],
  },
  {
    year: 2029,
    roundOne: [
      tradePick('UTA'),
    ],
    roundTwo: [
      tradePick('ATL'),
    ],
  },
  {
    year: 2030,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      tradePick('SAS'),
    ],
  },
  {
    year: 2031,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      tradePick('BOS'),
    ],
  },
  {
    year: 2032,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      ownPick(),
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
