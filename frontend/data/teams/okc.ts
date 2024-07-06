import type { CombinedMeta } from '~/data/PicksByYear';
import { favorableSwap, ifNotConvey, prot } from '~/data/shorthand';

export const OkcCombinedMeta: CombinedMeta[] = [
  {
    year: 2025,
    roundOne: {
      summary: {
        own: {
          id: '2025.1',
          swapType: 'favorable',
          teams: ['HOU', 'LAC'],
        },
        others: [
          {
            id: '2025.1.MIA',
            teams: ['MIA'],
            isConditional: true,
          },
          {
            id: '2025.1.PHI',
            teams: ['PHI'],
            isConditional: true,
          },
          {
            id: '2025.1.UTA',
            teams: ['UTA'],
            isConditional: true,
          },
        ],
      },
      details: [
        {
          id: '2025.1',
          headline: `Own (${favorableSwap} HOU / LAC)`,
          extra: [
            `HOU ${prot(10)}`,
          ],
        },
        {
          id: '2025.1.MIA',
          headline: `MIA ${prot(14)}`,
          extra: [
            ifNotConvey(['2026 1st (unprotected)']),
          ],
        },
        {
          id: '2025.1.PHI',
          headline: `PHI ${prot(6)}`,
          extra: [
            ifNotConvey([
              `2026 1st ${prot(4)}`,
              `2027 1st ${prot(4)}`,
              `2027 2nd`,
            ]),
          ],
        },
        {
          id: '2025.1.UTA',
          headline: `UTA ${prot(10)}`,
          extra: [
            ifNotConvey([`2026 1st ${prot(8)}`]),
          ],
        },
      ],
    },
    roundTwo: {
      summary: {
        own: {
          id: '2025.2',
          teams: ['HOU'],
          isTradedAway: true,
        },
        others: [
          {
            id: '2025.2.ATL',
            teams: ['ATL'],
            isConditional: true,
          },
          {
            id: '2025.2.BOS-MEM',
            teams: ['BOS', 'MEM'],
            swapType: 'favorable',
          },
        ],
      },
      details: [
        {
          id: '2025.2',
          headline: 'To HOU',
        },
        {
          id: '2025.2',
          headline: `ATL ${prot(40)}`,
        },
        {
          id: '2025.2',
          headline: 'More favorable of BOS and MEM',
        },
      ],
    },
  },
  {
    year: 2026,
    roundOne: {
      summary: {
        own: {
          id: '2026.1',
          teams: ['HOU', 'LAC'],
          swapType: 'favorable',
        },
        others: [
          {
            id: '2026.1',
            isConditional: true,
            swapType: 'favorable',
            teams: ['HOU', 'LAC'],
          },
        ],
      },
      details: [
        {
          id: '2026.1',
          headline: 'Two most favorable of OKC / HOU / LAC',
          extra: [
            `HOU ${prot(4)}`,
            `Least favorable to PHI`,
          ],
        },
      ],
    },
    roundTwo: {
      summary: {
        own: {
          id: '2026.2',
          teams: ['DAL', 'PHI'],
          swapType: 'favorable',
        },
        others: [
          {
            id: '2026.2.GSW',
            teams: ['GSW'],
          },
        ],
      },
      details: [
        {
          id: '2026.2',
          headline: 'Most favorable of OKC / DAL / PHL',
          extra: [
            'Second most favorable to HOU',
            'Least favorable to SAN',
          ],
        },
        {
          id: '2026.2.GSW',
          headline: 'GSW',
        },
      ],
    },
  },
  {
    year: 2027,
    roundOne: {
      summary: {
        own: {
          id: '2027.1',
          swapType: 'favorable',
          teams: ['DEN', 'LAC'],
        },
        others: [
          {
            id: '2027.1',
            isConditional: true,
            swapType: 'favorable',
            teams: ['DEN', 'LAC'],
          },
        ],
      },
      details: [
        {
          id: '2027.1',
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
      ],
    },
    roundTwo: {
      summary: {
        own: {
          id: '2027.2',
        },
        others: [

        ],
      },
      details: [
        {
          id: '2027.2',
          headline: 'Three most favorable of OKC / HOU / IND / MIA',
          extra: [
            'Least favorable to SAN',
          ],
        },
        {
          id: '2027.2.MIN',
          headline: 'MIN',
        },
      ],
    },
  },
  {
    year: 2028,
    roundOne: {
      summary: {
        own: {
          id: '2028.1',
          teams: ['DAL'],
          swapType: 'favorable',
        },
        others: [],
      },
      details: [
        {
          id: '2028.1',
          headline: `Own (${favorableSwap} DAL)`,
        },
      ],
    },
    roundTwo: {
      summary: {
        own: {
          id: '2028.2',
        },
        others: [],
      },
      details: [
        {
          id: '2028.2',
          headline: 'Own',
        },
        {
          id: '2028.2.MIL',
          headline: 'MIL',
        },
        {
          id: '2028.2.UTA',
          headline: 'UTA',
        },
      ],
    },
  },
  {
    year: 2029,
    roundOne: {
      summary: {
        own: {
          id: '2029.1',
        },
        others: [
          {
            id: '2029.1.DEN',
            teams: ['DEN'],
            isConditional: true,
          },
        ],
      },
      details: [
        {
          id: '2029.1',
          headline: 'Own',
        },
        {
          id: '2029.1.DEN',
          headline: `DEN ${prot(5)}`,
          extra: [
            'If DEN conveys 1st to OKC in 2027',
            ifNotConvey([
              `2030 1st (${prot(5, false)} and if DEN conveys 1st to OKC in 2028`,
              '2030 2nd',
            ]),
          ],
        },
      ],
    },
    roundTwo: {
      summary: {
        own: {
          id: '2029.2',
        },
        others: [

        ],
      },
      details: [
        {
          id: '2029.2',
          headline: 'Own',
        },
        {
          id: '2029.2',
          headline: 'ATL',
        },
        {
          id: '2029.2',
          headline: 'BOS',
        },
        {
          id: '2029.2',
          headline: 'HOU',
        },
        {
          id: '2029.2',
          headline: 'MIA',
        },
        {
          id: '2029.2',
          headline: 'PHX',
        },
      ],
    },
  },
  {
    year: 2030,
    roundOne: {
      summary: {
        own: {
          id: '2030.1',
        },
        others: [],
      },
      details: [
        {
          id: '2030.1',
          headline: 'Own',
        },
      ],
    },
    roundTwo: {
      summary: {
        own: {
          id: '2030.2',
        },
        others: [],
      },
      details: [
        {
          id: '2030.2',
          headline: 'Own',
        },
        {
          id: '2030.2.HOU',
          headline: 'HOU',
        },
        {
          id: '2030.2.MIA',
          headline: 'MIA',
        },
      ],
    },
  },
  {
    year: 2031,
    roundOne: {
      summary: {
        own: {
          id: '2031.1',
        },
        others: [],
      },
      details: [
        {
          id: '2031.1',
          headline: 'Own',
        },
      ],
    },
    roundTwo: {
      summary: {
        own: {
          id: '2031.2',
        },
        others: [],
      },
      details: [
        {
          id: '2031.2',
          headline: 'Own',
        },
      ],
    },
  },
]
