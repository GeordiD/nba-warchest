import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { botProt, favorableSwap, getPick, prot, tradePick } from '~/data/shorthand';

export const MemPickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      {
        id: '2026.1',
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
            includeOwn: true,
            desc: 'Second best of MEM / PHX / WAS* / ORL',
            teams: ['ORL', 'PHX', 'WAS'],
            swapType: 'favorable',
          },
        ],
      },
    ],
    roundTwo: [
      {
        id: '2026.2',
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
        id: '2026.2.BOS-IND-LAC-MIA',
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
      {
        id: '2027.1',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
    ],
    roundTwo: [
      tradePick(2027, 2, 'HOU'),
    ],
  },
  {
    year: 2028,
    roundOne: [
      {
        id: '2028.1',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
    ],
    roundTwo: [
      tradePick(2028, 2, 'BKN'),
    ],
  },
  {
    year: 2029,
    roundOne: [
      {
        id: '2029.1',
        details: `Own(${favorableSwap} ORL ${prot(2)}`,
        summary: {
          isOwn: true,
          swapType: 'favorable',
        },
      },
    ],
    roundTwo: [
      tradePick(2029, 2, 'BKN'),
    ],
  },
  {
    year: 2030,
    roundOne: [
      {
        id: '2030.1',
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
      getPick(2030, 1, 'ORL'),
    ],
    roundTwo: [
      {
        id: '2030.2',
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
      // TODO: One unspecified 2nd round pick and one unspecified 2nd round pick swap in IND's possession to MEM
      {
        id: '2032.2',
        details: 'Own',
        summary: {
          isOwn: true,
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
