import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { favorableSwap, getPick, prot, tradePick } from '~/data/shorthand';

export const MemPickMeta: YearMeta[] = [
  {
    year: 2025,
    roundOne: [
      {
        id: '2025.1',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
    ],
    roundTwo: [
      {
        id: '2025.2',
        details: {
          headline: 'TO OKC / ORL',
          extra: [
            'Best of BOS / MEM to OKC',
            'Worst to ORL',
          ],
        },
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['OKC', 'ORL'],
        },
      },
      {
        id: '2025.2.HOU-OKC',
        details: 'Best of HOU / OKC',
        summary: {
          teams: ['HOU', 'OKC'],
          swapType: 'favorable',
        },
      },
    ],
  },
  {
    year: 2026,
    roundOne: [
      {
        id: '2026.1',
        details: {
          headline: `Own (${favorableSwap} worst of ORL / PHX / WAS)`,
          extra: [
            `Better of MEM and worst of ORL / PHX / WAS to MEM`,
            `Worst to PHX`,
            `If WAS does not convey 1st to NYK in 2025, WAS is top 8 prot.`,
          ],
        },
        summary: {
          isOwn: true,
          swapType: 'mixed',
          teams: ['ORL', 'PHX', 'WAS'],
        },
      },
    ],
    roundTwo: [
      {
        id: '2026.2',
        details: {
          headline: 'To ATL / POR',
          extra: [
            '31-42 to ATL',
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
      getPick(2027, 2, 'ATL'),
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
        details: 'Own',
        summary: {
          isOwn: true,
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
  abbr: 'MEM',
  fullName: 'Memphis Grizzlies',
  location: 'Memphis',
  name: 'Grizzlies',
}

export const memMeta: TeamMeta = {
  info,
  picks: MemPickMeta,
}
