import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { ifNotConvey, prot, tradePick, unfavorableSwap } from '~/data/shorthand';

export const NykPickMeta: YearMeta[] = [
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
        id: '2026.1.WAS',
        details: {
          headline: `WAS ${prot(8)}`,
          extra: [
            ifNotConvey([
              '2027 2nd',
            ]),
          ],
        },
        summary: {
          isConditional: true,
          teams: ['WAS'],
        },
      },
    ],
    roundTwo: [
      {
        id: '2026.2',
        details: `Worst of NYK / MIN`,
        summary: {
          isOwn: true,
          swapType: 'unfavorable',
          teams: ['MIN'],
        },
      },
    ],
  },
  {
    year: 2027,
    roundOne: [
      tradePick(2027, 1, 'BKN'),
    ],
    roundTwo: [
      {
        id: '2027.2',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
      {
        id: '2027.2.OKC-HOU-IND-MIA',
        details: 'Second and third most favorable of OKC / HOU / IND / MIA',
        summary: [
          {
            swapType: 'mixed',
            teams: ['OKC', 'HOU', 'IND', 'MIA'],
            desc: 'Second best of OKC / HOU / IND / MIA',
          },
          {
            swapType: 'mixed',
            teams: ['OKC', 'HOU', 'IND', 'MIA'],
            desc: 'Third best of OKC / HOU / IND / MIA',
          },
        ],
      },
    ],
  },
  {
    year: 2028,
    roundOne: [
      {
        id: '2028.1',
        details: `Own (${unfavorableSwap} BKN / PHX)`,
        summary: {
          isOwn: true,
          swapType: 'unfavorable',
          teams: ['BKN', 'PHX'],
        },
      },
    ],
    roundTwo: [
      tradePick(2028, 2, 'DET'),
      {
        id: '2028.2.BOS',
        details: `BOS ${prot(45)}`,
        summary: {
          isConditional: true,
          teams: ['BOS'],
        },
      },
      {
        id: '2028.2.IND-PHX',
        details: 'Worst of IND / PHX',
        summary: {
          swapType: 'unfavorable',
          teams: ['IND', 'PHX'],
        },
      },
    ],
  },
  {
    year: 2029,
    roundOne: [
      tradePick(2029, 1, 'BKN'),
    ],
    roundTwo: [
      tradePick(2029, 2, 'DET'),
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
      tradePick(2030, 2, 'BOS'),
    ],
  },
  {
    year: 2031,
    roundOne: [
      tradePick(2031, 1, 'BKN'),
    ],
    roundTwo: [
      tradePick(2031, 2, 'CHA'),
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
  abbr: 'NYK',
  fullName: 'New York Knicks',
  location: 'New York',
  name: 'Knicks',
}

export const nykMeta: TeamMeta = {
  info,
  picks: NykPickMeta,
}
