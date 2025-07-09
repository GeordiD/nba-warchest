import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { favorableSwap, getPick, ownPick, prot, tradePick, unfavorableSwap } from '~/data/shorthand';

export const OrlPickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      {
        details: {
          headline: `To MEM / CHA`,
        },
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['MEM', 'CHA'],
        },
      },
    ],
    roundTwo: [
      {
        details: {
          headline: 'Second best of ORL / DET / MIL',
        },
        summary: {
          isOwn: true,
          teams: ['DET', 'MIL'],
          swapType: 'mixed',
        },
      },
    ],
  },
  {
    year: 2027,
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
        details: `Own (${unfavorableSwap} BOS)`,
        summary: {
          isOwn: true,
          swapType: 'unfavorable',
          teams: ['BOS'],
        },
      },
    ],
  },
  {
    year: 2028,
    roundOne: [
      tradePick('POR'),
    ],
    roundTwo: [
      {
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
      {
        details: 'Best of LAL / WAS',
        summary: {
          teams: ['LAL', 'WAS'],
          swapType: 'favorable',
        },
      },
    ],
  },
  {
    year: 2029,
    roundOne: [
      {
        details: `Own (${unfavorableSwap} MEM ${prot(2)})`,
        summary: {
          isOwn: true,
          swapType: 'unfavorable',
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
  {
    year: 2030,
    roundOne: [
      tradePick('MEM'),
    ],
    roundTwo: [
      {
        details: `Own (${favorableSwap} NOP)`,
        summary: {
          isOwn: true,
          teams: ['NOP'],
          swapType: 'favorable',
        },
      },
      getPick('MIL'),
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
        details: 'Best of ORL / NOP',
        summary: {
          isOwn: true,
          swapType: 'favorable',
          teams: ['NOP'],
        },
      },
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
  abbr: 'ORL',
  fullName: 'Orlando Magic',
  location: 'Orlando',
  name: 'Magic',
}

export const orlMeta: TeamMeta = {
  info,
  picks: OrlPickMeta,
}
