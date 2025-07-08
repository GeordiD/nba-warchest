import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { ifNotConvey, prot, tradePick, unfavorableSwap } from '~/data/shorthand';

export const NykPickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      {
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
      {
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
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
      {
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
        details: `BOS ${prot(45)}`,
        summary: {
          isConditional: true,
          teams: ['BOS'],
        },
      },
      {
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
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
    ],
    roundTwo: [
      tradePick(2030, 2, 'POR'),
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
  abbr: 'NYK',
  fullName: 'New York Knicks',
  location: 'New York',
  name: 'Knicks',
}

export const nykMeta: TeamMeta = {
  info,
  picks: NykPickMeta,
}
