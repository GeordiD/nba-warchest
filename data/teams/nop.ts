import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { getPick, prot, tradePick, unfavorableSwap } from '~/data/shorthand';

export const NopPickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      {
        details: `To ATL / MIL`,
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['MIL', 'ATL'],
        },
      },
    ],
    roundTwo: [
      {
        details: 'To BOS / SAS / WAS',
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['BOS', 'SAS', 'WAS'],
        },
      },
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
      {
        details: {
          headline: 'To CHA / POR',
        },
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['CHA', 'POR'],
        },
      },
    ],
  },
  {
    year: 2028,
    roundOne: [
      {
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
    ],
    roundTwo: [
      tradePick(2028, 2, 'SAS'),
    ],
  },
  {
    year: 2029,
    roundOne: [
      {
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
    ],
    roundTwo: [
      tradePick(2028, 2, 'SAS'),
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
      {
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
    ],
    roundTwo: [
      {
        details: 'To ORL / OKC',
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['ORL', 'OKC'],
        },
      },
      getPick(2031, 2, 'TOR'),
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
      // TODO: One unspecified second round pick to WAS
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
  abbr: 'NOP',
  fullName: 'New Orleans Pelicans',
  location: 'New Orleans',
  name: 'Pelicans',
}

export const nopMeta: TeamMeta = {
  info,
  picks: NopPickMeta,
}
