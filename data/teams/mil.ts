import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { ownPick, prot, tradePick, unfavorableSwap } from '~/data/shorthand';

export const MilPickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      {
        details: `Own (${unfavorableSwap} NOP)`,
        summary: {
          isOwn: true,
          swapType: 'unfavorable',
          teams: ['NOP'],
        },
      },
    ],
    roundTwo: [
      tradePick(['BOS', 'NYK']),
    ],
  },
  {
    year: 2027,
    roundOne: [
      tradePick(['ATL', 'NOP']),
    ],
    roundTwo: [
      tradePick('DET'),
    ],
  },
  {
    year: 2028,
    roundOne: [
      {
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
      tradePick('OKC'),
    ],
  },
  {
    year: 2029,
    roundOne: [
      tradePick(['POR', 'WAS']),
    ],
    roundTwo: [
      tradePick(['DET', 'SAC']),
    ],
  },
  {
    year: 2030,
    roundOne: [
      {
        details: `Own (${unfavorableSwap} POR)`,
        summary: {
          isOwn: true,
          teams: ['POR'],
          swapType: 'unfavorable',
        },
      },
    ],
    roundTwo: [
      tradePick('ORL'),
    ],
  },
  {
    year: 2031,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      tradePick('CHA'),
    ],
  },
  {
    year: 2032,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      tradePick('CHA'),
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
