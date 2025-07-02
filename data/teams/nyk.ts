import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { getPick, ifNotConvey, prot, tradePick, unfavorableSwap } from '~/data/shorthand';

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
      tradePick(2031, 1, 'BKN'),
    ],
    roundTwo: [
      tradePick(2031, 2, 'CHA'),
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
