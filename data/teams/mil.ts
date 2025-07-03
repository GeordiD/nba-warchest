import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { prot, tradePick, unfavorableSwap } from '~/data/shorthand';

export const MilPickMeta: YearMeta[] = [
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
          headline: 'To BOS / NYK',
        },
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['BOS', 'NYK'],
        },
      },
    ],
  },
  {
    year: 2027,
    roundOne: [
      {
        id: '2027.1',
        details: {
          headline: 'To ATL / NOP',
          extra: [
            'Best of MIL / NOP to NOP',
            'Worst to ATL',
            'If both in top 4, NOP keeps both',
          ],
        },
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['ATL', 'NOP'],
        },
      },
    ],
    roundTwo: [
      tradePick(2027, 2, 'DET'),
    ],
  },
  {
    year: 2028,
    roundOne: [
      {
        id: '2028.1',
        details: {
          headline: `Own (${unfavorableSwap} POR / WAS / BKN / PHI)`,
          extra: [
            [
              'MIL receives the worst of (1) and (2):',
              '(1): Worst of MIL / POR 1-14; (or MIL if POR is not conveyable)',
              `(2): Best of WAS and worst of BKN / PHI ${prot(8)} (if PHI is conveyable)`,
            ],
          ],
        },
        summary: {
          isOwn: true,
          teams: ['POR', 'WAS', 'BKN', 'PHI'],
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
      {
        id: '2029.1',
        details: {
          headline: 'To POR / WAS',
        },
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['POR', 'WAS'],
        },
      },
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
      tradePick(2031, 2, 'CHA'),
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
