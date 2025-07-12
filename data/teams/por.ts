import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { favorableSwap, getPick, ifNotConvey, ownPick, prot, tradePick } from '~/data/shorthand';

export const PorPickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      {
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
      tradePick(['BOS', 'SAS', 'WAS']),
      {
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
      ownPick(),
    ],
    roundTwo: [
      {
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
      getPick('ORL'),
    ],
    roundTwo: [
      ownPick(),
      getPick('SAC'),
    ],
  },
  {
    year: 2029,
    roundOne: [
      {
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
            isOwn: true,
            teams: ['BOS', 'MIL'],
            swapType: 'unfavorable',
          },
        ],
      },
    ],
    roundTwo: [
      tradePick('MEM'),
      {
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
        details: `Own (${favorableSwap} MIL)`,
        summary: {
          isOwn: true,
          swapType: 'favorable',
          teams: ['MIL'],
        },
      },
    ],
    roundTwo: [
      tradePick(['PHI', 'WAS']),
      getPick('NYK'),
    ],
  },
  {
    year: 2031,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      ownPick(),
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
  abbr: 'POR',
  fullName: 'Portland Trailblazers',
  location: 'Portland',
  name: 'Trailblazers',
}

export const porMeta: TeamMeta = {
  info,
  picks: PorPickMeta,
}
