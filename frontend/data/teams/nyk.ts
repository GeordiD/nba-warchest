import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { getPick, ifNotConvey, prot, tradePick } from '~/data/shorthand';

export const NykPickMeta: YearMeta[] = [
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
      {
        id: '2025.1.DET',
        details: {
          headline: `DET ${prot(13)}`,
          extra: [
            ifNotConvey([
              `2026 1st ${prot(11)}`,
              `2027 1st ${prot(9)}`,
              '2026 2nd & 2027 2nd',
            ]),
          ],
        },
        summary: {
          isConditional: true,
          teams: ['DET'],
        },
      },
      {
        id: '2025.1.MIL',
        details: `MIL ${prot(4)}`,
        summary: {
          teams: ['MIL'],
          isConditional: true,
        },
      },
      {
        id: '2025.1.WAS',
        details: {
          headline: `WAS ${prot(10)}`,
          extra: [
            ifNotConvey([
              `2026 1st ${prot(8)}`,
              '2026 2nd',
            ]),
          ],
        },
        summary: {
          teams: ['WAS'],
          isConditional: true,
        },
      },
    ],
    roundTwo: [
      {
        id: '2025.2',
        details: 'Forfeited Own Pick',
        summary: {
          isOwn: true,
          isTradedAway: true,
        },
      },
      getPick(2025, 2, 'BKN'),
      {
        id: '2025.2.DET',
        details: `DET ${prot(55)}`,
        summary: {
          teams: ['DET'],
          isConditional: true,
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
      tradePick(2028, 2, 'DET'),
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
      {
        id: '2029.1',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
    ],
    roundTwo: [
      tradePick(2029, 2, 'DET'),
      {
        id: '2029.2.IND-WAS',
        details: 'Worst of IND / WAS',
        summary: {
          swapType: 'unfavorable',
          teams: ['IND', 'WAS'],
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
