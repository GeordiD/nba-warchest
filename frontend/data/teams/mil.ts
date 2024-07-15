import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { tradePick, unfavorableSwap } from '~/data/shorthand';

export const MilPickMeta: YearMeta[] = [
  {
    year: 2025,
    roundOne: [
      {
        id: '2025.1',
        details: {
          headline: 'To NOP / NYK',
          extra: [
            '1-4 to NOP',
            '5-30 to NYK',
          ],
        },
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['NOP', 'NYK'],
        },
      },
    ],
    roundTwo: [
      tradePick(2025, 2, 'CLE'),
    ],
  },
  {
    year: 2026,
    roundOne: [
      {
        id: '2026.1',
        details: `Own (${unfavorableSwap} NOP)`,
        summary: {
          isOwn: true,
          swapType: 'unfavorable',
          teams: ['NOP'],
        },
      },
    ],
    roundTwo: [
      {
        id: '2026.2',
        details: {
          headline: 'To ORL / BKN',
          extra: [
            'Best two of MIL / DET / ORL to ORL',
            'Worst to BKN',
          ],
        },
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['ORL', 'BKN'],
        },
      },
    ],
  },
  {
    year: 2027,
    roundOne: [
      tradePick(2027, 1, 'NOP'),
    ],
    roundTwo: [
      tradePick(2027, 2, 'PHI'),
    ],
  },
  {
    year: 2028,
    roundOne: [
      {
        id: '2028.1',
        details: {
          headline: `Own (${unfavorableSwap} POR)`,
          extra: [
            'If POR has not conveyed 1st to CHI by 2027, POR can only swap if it\'s pick is 1-14',
          ],
        },
        summary: {
          isOwn: true,
          teams: ['POR'],
          swapType: 'unfavorable',
        },
      },
    ],
    roundTwo: [
      tradePick(2028, 2, 'OKC'),
    ],
  },
  {
    year: 2029,
    roundOne: [
      tradePick(2029, 1, 'POR'),
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
        details: `Own (${unfavorableSwap} POR)`,
        summary: {
          isOwn: true,
          teams: ['POR'],
          swapType: 'unfavorable',
        },
      },
    ],
    roundTwo: [
      tradePick(2030, 2, 'ORL'),
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
  abbr: 'MIL',
  fullName: 'Milwaukee Bucks',
  location: 'Milwaukee',
  name: 'Bucks',
}

export const milMeta: TeamMeta = {
  info,
  picks: MilPickMeta,
}
