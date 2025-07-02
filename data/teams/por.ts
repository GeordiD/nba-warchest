import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { botProt, favorableSwap, getPick, ifNotConvey, prot, tradePick } from '~/data/shorthand';

export const PorPickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      {
        id: '2026.1',
        details: 'Own',
        summary: {
          isOwn: true,
          ifNotSettled: {
            id: '2025.1',
            result: `To CHI ${prot(14)}`,
          },
        },
      },
    ],
    roundTwo: [
      {
        id: '2026.2',
        details: 'To BOS / SAS / MIN / WAS',
        summary: {
          isOwn: true,
          teams: ['BOS', 'SAS', 'MIN', 'WAS'],
          isTradedAway: true,
        },
      },
      {
        id: '2026.2.MEM',
        details: `MEM ${prot(42)}`,
        summary: {
          teams: ['MEM'],
          isConditional: true,
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
          ifNotSettled: {
            id: '2025.1',
            result: `To CHI ${prot(14)}`,
          },
        },
      },
    ],
    roundTwo: [
      {
        id: '2027.2',
        details: {
          headline: `Worst of POR / NOP`,
          extra: [
            'Best to CHA',
            'If 56-60, pick goes to BOS',
          ],
        },
        summary: {
          isOwn: true,
          swapType: 'unfavorable',
          teams: ['NOP'],
        },
      },
    ],
  },
  {
    year: 2028,
    roundOne: [
      {
        id: '2028.1',
        details: {
          headline: `Own (${favorableSwap} MIL)`,
          extra: [
            'If conveyed 1st to CHI by 2027',
            'If not conveyed 1st to CHI by 2027 but pick is 1-14, may swap with MIL',
          ],
        },
        summary: {
          isOwn: true,
          teams: ['MIL'],
          swapType: 'favorable',
          ifNotSettled: {
            id: '2025.1',
            result: `To CHI ${prot(14)}`,
          },
        },
      },
    ],
    roundTwo: [
      {
        id: '2028.2',
        details: 'Own',
        summary: {
          isOwn: true,
          ifNotSettled: {
            id: '2025.1',
            result: `To CHI`,
          },
        },
      },
      getPick(2028, 2, 'GSW'),
    ],
  },
  {
    year: 2029,
    roundOne: [
      {
        id: '2029.1',
        details: {
          headline: 'Best and worst of BOS / MIL / POR',
          extra: [
            'Second best to WAS',
          ],
        },
        summary: [
          {
            isOwn: true,
            teams: ['BOS', 'MIL'],
            swapType: 'favorable',
          },
          {
            teams: ['BOS', 'MIL'],
            swapType: 'unfavorable',
          },
        ],
      },
    ],
    roundTwo: [
      tradePick(2029, 2, 'IND'),
    ],
  },
  {
    year: 2030,
    roundOne: [
      {
        id: '2030.1',
        details: `Own (${favorableSwap} MIL)`,
        summary: {
          isOwn: true,
          swapType: 'favorable',
          teams: ['MIL'],
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
  abbr: 'POR',
  fullName: 'Portland Trailblazers',
  location: 'Portland',
  name: 'Trailblazers',
}

export const porMeta: TeamMeta = {
  info,
  picks: PorPickMeta,
}
