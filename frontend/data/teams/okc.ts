import type { CombinedMeta } from '~/data/PicksByYear';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { favorableSwap, ifNotConvey, prot } from '~/data/shorthand';

export const OkcCombinedMeta: CombinedMeta[] = [
  {
    year: 2025,
    roundOne: [
      {
        id: '2025.1',
        details: {
          headline: `Own (${favorableSwap} HOU / LAC)`,
          extra: [
            `HOU ${prot(10)}`,
          ],
        },
        summary: {
          swapType: 'favorable',
          teams: ['HOU', 'LAC'],
          isOwn: true,
        },
      },
      {
        id: '2025.1.MIA',
        details: {
          headline: `MIA ${prot(14)}`,
          extra: [
            ifNotConvey(['2026 1st (unprotected)']),
          ],
        },
        summary: {
          teams: ['MIA'],
          isConditional: true,
        },
      },
      {
        id: '2025.1.PHI',
        details: {
          headline: `PHI ${prot(6)}`,
          extra: [
            ifNotConvey([
              `2026 1st ${prot(4)}`,
              `2027 1st ${prot(4)}`,
              `2027 2nd`,
            ]),
          ],
        },
        summary: {
          teams: ['PHI'],
          isConditional: true,
        },
      },
      {
        id: '2025.1.UTA',
        details: {
          headline: `UTA ${prot(10)}`,
          extra: [
            ifNotConvey([`2026 1st ${prot(8)}`]),
          ],
        },
        summary: {
          teams: ['UTA'],
          isConditional: true,
        },
      },
    ],
    roundTwo: [
      {
        id: '2025.2',
        details: 'To HOU',
        summary: {
          teams: ['HOU'],
          isTradedAway: true,
          isOwn: true,
        },
      },
      {
        id: '2025.2.ATL',
        details: `ATL ${prot(40)}`,
        summary: {
          teams: ['ATL'],
          isConditional: true,
        },
      },
      {
        id: '2025.2.BOS-MEM',
        details: 'More favorable of BOS and MEM',
        summary: {
          teams: ['BOS', 'MEM'],
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
          headline: 'Two most favorable of OKC / HOU / LAC',
          extra: [
            `HOU ${prot(4)}`,
            `Least favorable to PHI`,
          ],
        },
        summary: [
          {
            teams: ['HOU', 'LAC'],
            swapType: 'favorable',
            isOwn: true,
          },
          {
            isConditional: true,
            swapType: 'favorable',
            teams: ['HOU', 'LAC'],
          },
        ],
      },
    ],
    roundTwo: [
      {
        id: '2026.2',
        details: {
          headline: 'Most favorable of OKC / DAL / PHL',
          extra: [
            'Second most favorable to HOU',
            'Least favorable to SAN',
          ],
        },
        summary: {
          teams: ['DAL', 'PHI'],
          swapType: 'favorable',
          isOwn: true,
        },
      },
      {
        id: '2026.2.GSW',
        details: 'GSW',
        summary: {
          teams: ['GSW'],
        },
      },
    ],
  },
  {
    year: 2027,
    roundOne: [
      {
        id: '2027.1',
        details: {
          headline: 'Two most favorable of OKC / DEN / LAC',
          extra: [
            `DEN (${prot(5, false)} and if DEN conveys 1st to ORL in 2025)`,
            ifNotConvey([
              `2028 1st (${prot(5, false)} and if DEN conveys 1st to ORL in 2026)`,
              `2029 1st ${prot(5)}`,
              '2029 2nd',
            ], 'DEN'),
            'Least favorable to LAC',
          ],
        },
        summary: [
          {
            swapType: 'favorable',
            teams: ['DEN', 'LAC'],
            isOwn: true,
          },
          {
            isConditional: true,
            swapType: 'favorable',
            teams: ['DEN', 'LAC'],
          },
        ],
      },
    ],
    roundTwo: [
      {
        id: '2027.2',
        details: {
          headline: 'Three most favorable of OKC / HOU / IND / MIA',
          extra: [
            'Least favorable to SAN',
          ],
        },
        summary: [
          {
            isOwn: true,
            swapType: 'favorable',
            teams: ['HOU', 'IND', 'MIA'],
          },
          {
            swapType: 'favorable',
            teams: ['HOU', 'IND', 'MIA'],
          },
          {
            swapType: 'favorable',
            teams: ['HOU', 'IND', 'MIA'],
          },
        ],
      },
      {
        id: '2027.2.MIN',
        details: 'MIN',
        summary: {
          teams: ['MIN'],
        },
      },
    ],
  },
  {
    year: 2028,
    roundOne: [
      {
        id: '2028.1',
        details: `Own (${favorableSwap} DAL)`,
        summary: {
          teams: ['DAL'],
          swapType: 'favorable',
          isOwn: true,
        },
      },
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
        id: '2028.2.MIL',
        details: 'MIL',
        summary: {
          teams: ['MIL'],
        },
      },
      {
        id: '2028.2.UTA',
        details: 'UTA',
        summary: {
          teams: ['UTA'],
        },
      },
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
      {
        id: '2029.1.DEN',
        details: {
          headline: `DEN ${prot(5)}`,
          extra: [
            'If DEN conveys 1st to OKC in 2027',
            ifNotConvey([
              `2030 1st (${prot(5, false)} and if DEN conveys 1st to OKC in 2028`,
              '2030 2nd',
            ]),
          ],
        },
        summary: {
          teams: ['DEN'],
          isConditional: true,
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
      {
        id: '2029.2.ATL',
        details: 'ATL',
        summary: {
          teams: ['ATL'],
        },
      },
      {
        id: '2029.2.BOS',
        details: 'BOS',
        summary: {
          teams: ['BOS'],
        },
      },
      {
        id: '2029.2.HOU',
        details: 'HOU',
        summary: {
          teams: ['HOU'],
        },
      },
      {
        id: '2029.2.MIA',
        details: 'MIA',
        summary: {
          teams: ['MIA'],
        },
      },
      {
        id: '2029.2.PHX',
        details: 'PHX',
        summary: {
          teams: ['PHX'],
        },
      },
    ],
  },
  {
    year: 2030,
    roundOne: [
      {
        id: '2030.1',
        details: 'Own',
        summary: {
          isOwn: true,
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
      {
        id: '2030.2.HOU',
        details: 'HOU',
        summary: {
          teams: ['HOU'],
        },
      },
      {
        id: '2030.2.MIA',
        details: 'MIA',
        summary: {
          teams: ['MIA'],
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
  abbr: 'OKC',
  fullName: 'Oklahoma City Thunder',
  name: 'Thunder',
  location: 'Oklahoma City',
}

export const okcMeta: TeamMeta = {
  info,
  picks: OkcCombinedMeta,
}
