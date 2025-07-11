import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { botProt, favorableSwap, getPick, ownPick, prot, tradePick } from '~/data/shorthand';

export const MemPickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      {
        details: {
          headline: `Two best of MEM / PHX / WAS* / ORL`,
          extra: [
            [
              'MEM receives two best from (1), (2) and (3):',
              '(1): MEM',
              `(2): Worst of PHX / WAS ${botProt(9)} (or PHX if WAS not conveyed)`,
              '(3): ORL',
            ],
          ],
        },
        summary: [
          {
            isOwn: true,
            swapType: 'favorable',
            teams: ['ORL', 'PHX', 'WAS'],
            desc: 'Best of MEM / PHX / WAS* / ORL',
          },
          {
            isOwn: true,
            desc: 'Second best of MEM / PHX / WAS* / ORL',
            teams: ['ORL', 'PHX', 'WAS'],
            swapType: 'favorable',
          },
        ],
      },
    ],
    roundTwo: [
      {
        details: {
          headline: 'To LAC / POR',
          extra: [
            '31-42 to LAC',
            '43-60 to POR',
          ],
        },
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['ATL', 'POR'],
        },
      },
      {
        details: 'Best of BOS / IND / LAC / MIA',
        summary: {
          teams: ['BOS', 'IND', 'LAC', 'MIA'],
          swapType: 'favorable',
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
      tradePick('HOU'),
    ],
  },
  {
    year: 2028,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      tradePick('BKN'),
    ],
  },
  {
    year: 2029,
    roundOne: [
      {
        details: `Own(${favorableSwap} ORL ${prot(2)}`,
        summary: {
          isOwn: true,
          swapType: 'favorable',
        },
      },
    ],
    roundTwo: [
      tradePick('BKN'),
      getPick('POR'),
    ],
  },
  {
    year: 2030,
    roundOne: [
      {
        details: {
          headline: `Own (${favorableSwap} worst of PHX / WAS)`,
          extra: [
            'Better of MEM and worst of PHX / WAS to MEM',
            'Worst to PHX',
          ],
        },
        summary: {
          isOwn: true,
          swapType: 'mixed',
          teams: ['PHX', 'WAS'],
        },
      },
      getPick('ORL'),
    ],
    roundTwo: [
      {
        details: `To MIN ${prot(50)}`,
        summary: {
          isOwn: true,
          isConditional: true,
          teams: ['MIN'],
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
      {
        details: {
          headline: `Swap with IND / MIA`,
          extra: [
            [
              'MEM receives best of (1) and (2):',
              '(1): Worst of IND / MIA',
              '(2): MEM',
            ],
          ],
        },
        summary: {
          isOwn: true,
          swapType: 'mixed',
          teams: ['IND', 'MIA'],
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
      {
        details: `GSW ${prot(50)}`,
        summary: {
          isConditional: true,
          teams: ['GSW'],
        },
      },
    ],
  },
]

const info: TeamInfo = {
  abbr: 'MEM',
  fullName: 'Memphis Grizzlies',
  location: 'Memphis',
  name: 'Grizzlies',
}

export const memMeta: TeamMeta = {
  info,
  picks: MemPickMeta,
}
