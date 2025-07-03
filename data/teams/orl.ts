import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { favorableSwap, getPick, ownPick, prot, tradePick, unfavorableSwap } from '~/data/shorthand';

export const OrlPickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      {
        id: '2026.1',
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
        id: '2026.2',
        details: {
          headline: 'Second best of ORL / DET / MIL',
        },
        summary: [
          {
            isOwn: true,
            teams: ['DET', 'MIL'],
            swapType: 'mixed',
          },
        ],
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
      tradePick(2028, 1, 'POR'),
    ],
    roundTwo: [
      {
        id: '2028.2',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
      {
        id: '2028.2.LAL-WAS',
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
        id: '2029.1',
        details: `Own (${unfavorableSwap} MEM ${prot(2)})`,
        summary: {
          isOwn: true,
          swapType: 'unfavorable',
        },
      },
    ],
    roundTwo: [
      {
        id: '2029.2',
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
      tradePick(2030, 1, 'MEM'),
    ],
    roundTwo: [
      {
        id: '2030.2',
        details: `Own (${favorableSwap} NOP)`,
        summary: {
          isOwn: true,
          teams: ['NOP'],
          swapType: 'favorable',
        },
      },
      getPick(2030, 2, 'MIL'),
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
      ownPick(2032, 1),
    ],
    roundTwo: [
      ownPick(2032, 2),
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
