import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { getPick, ownPick, prot, tradePick, unfavorableSwap } from '~/data/shorthand';

export const NopPickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      tradePick(['MIL', 'ATL']),
    ],
    roundTwo: [
      tradePick(['BOS', 'SAS', 'WAS']),
    ],
  },
  {
    year: 2027,
    roundOne: [
      {
        details: {
          headline: `Best of NOP ${prot(4)} / MIL ${prot(4)}`,
          extra: [
            `Worst of MIL / NOP to ATL`,
            'If both are top 4, NOP keeps both',
          ],
        },
        summary: {
          isOwn: true,
          swapType: 'favorable',
          teams: ['MIL'],
        },
      },
    ],
    roundTwo: [
      tradePick(['CHA', 'POR']),
    ],
  },
  {
    year: 2028,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      tradePick('SAS'),
    ],
  },
  {
    year: 2029,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      tradePick('SAS'),
    ],
  },
  {
    year: 2030,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      {
        details: `Own (${unfavorableSwap} ORL)`,
        summary: {
          isOwn: true,
          swapType: 'unfavorable',
          teams: ['ORL'],
        },
      },
    ],
  },
  {
    year: 2031,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      tradePick(['ORL', 'OKC']),
      getPick('TOR'),
    ],
  },
  {
    year: 2032,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      // TODO: One unspecified second round pick to WAS
      ownPick(),
    ],
  },
]

const info: TeamInfo = {
  abbr: 'NOP',
  fullName: 'New Orleans Pelicans',
  location: 'New Orleans',
  name: 'Pelicans',
}

export const nopMeta: TeamMeta = {
  info,
  picks: NopPickMeta,
}
