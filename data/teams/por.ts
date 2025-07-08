import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { favorableSwap, getPick, ifNotConvey, ownPick, prot, tradePick } from '~/data/shorthand';

export const PorPickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      {
        id: '2026.1',
        details: {
          headline: `To CHI ${prot(14)}`,
          extra: [
            ifNotConvey([
              `2027 1st ${prot(14)}`,
              `2028 1st ${prot(14)}`,
              '2028 2nd',
            ]),
          ],
        },
        summary: {
          isOwn: true,
          isConditional: true,
          teams: ['CHI'],
        },
      },
    ],
    roundTwo: [
      {
        id: '2026.2',
        details: 'To BOS / SAS / WAS',
        summary: {
          isOwn: true,
          teams: ['BOS', 'SAS', 'WAS'],
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
            'If 56-60, pick goes to HOU',
          ],
        },
        summary: {
          isOwn: true,
          swapType: 'unfavorable',
          isConditional: true,
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
        },
      },
      getPick(2028, 1, 'ORL'),
    ],
    roundTwo: [
      {
        id: '2028.2',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
      getPick(2028, 2, 'SAC'),
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
      tradePick(2029, 2, 'MEM'),
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
        details: `Own (${favorableSwap} MIL)`,
        summary: {
          isOwn: true,
          swapType: 'favorable',
          teams: ['MIL'],
        },
      },
    ],
    roundTwo: [
      tradePick(2030, 2, ['PHI', 'WAS']),
      getPick(2030, 2, 'NYK'),
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
      ownPick(2031, 2),
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
  abbr: 'POR',
  fullName: 'Portland Trailblazers',
  location: 'Portland',
  name: 'Trailblazers',
}

export const porMeta: TeamMeta = {
  info,
  picks: PorPickMeta,
}
