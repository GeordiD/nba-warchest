import type { CombinedMeta } from '~/data/PicksByYear';
import { favorableSwap, ifNotConvey, prot } from '~/data/shorthand';

export const OkcCombinedMeta: CombinedMeta[] = [
  {
    year: 2025,
    roundOne: {
      summary: {
        own: {
          swapType: 'favorable',
          teams: ['HOU', 'LAC'],
        },
        others: [
          {
            teams: ['MIA'],
            isConditional: true,
          },
          {
            teams: ['PHI'],
            isConditional: true,
          },
          {
            teams: ['UTA'],
            isConditional: true,
          },
        ],
      },
      details: [
        {
          headline: `Own (${favorableSwap} HOU / LAC)`,
          extra: [
            `HOU ${prot(10)}`,
          ],
        },
        {
          headline: `MIA ${prot(14)}`,
          extra: [
            ifNotConvey(['2026 1st (unprotected)']),
          ],
        },
        {
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
          headline: `UTA (${prot(10)})`,
          extra: [
            ifNotConvey([`2026 1st ${prot(8)}`]),
          ],
        },
      ],
    },
    roundTwo: {
      summary: {
        own: {
          teams: ['HOU'],
          isTradedAway: true,
        },
        others: [
          {
            teams: ['ATL'],
            isConditional: true,
          },
          {
            teams: ['BOS', 'MEM'],
            swapType: 'favorable',
          },
        ],
      },
      details: [
        'To HOU',
        `ATL ${prot(40)}`,
        'More favorable of BOS and MEM',
      ],
    },
  },
  {
    year: 2026,
    roundOne: {
      summary: {
        own: {
          teams: ['HOU', 'LAC'],
          swapType: 'favorable',
        },
        others: [
          {
            isConditional: true,
            swapType: 'favorable',
            teams: ['HOU', 'LAC'],
          },
        ],
      },
      details: [
        {
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
          teams: ['DAL', 'PHI'],
          swapType: 'favorable',
        },
        others: [
          {
            teams: ['GSW'],
          },
        ],
      },
      details: [
        {
          headline: 'Most favorable of OKC / DAL / PHL',
          extra: [
            'Second most favorable to HOU',
            'Least favorable to SAN',
          ],
        },
        'GSW',
      ],
    },
  },
  {
    year: 2027,
    roundOne: {
      summary: {
        own: {
          swapType: 'favorable',
          teams: ['DEN', 'LAC'],
        },
        others: [
          {
            isConditional: true,
            swapType: 'favorable',
            teams: ['DEN', 'LAC'],
          },
        ],
      },
      details: [
        {
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

        },
        others: [

        ],
      },
      details: [
        {
          headline: 'Three most favorable of OKC / HOU / IND / MIA',
          extra: [
            'Least favorable to SAN',
          ],
        },
        'MIN',
      ],
    },
  },
  {
    year: 2028,
    roundOne: {
      summary: {
        own: {
          teams: ['DAL'],
          swapType: 'favorable',
        },
        others: [],
      },
      details: [
        `Own (${favorableSwap} DAL)`,
      ],
    },
    roundTwo: {
      summary: {
        own: {

        },
        others: [

        ],
      },
      details: [
        'Own',
        'MIL',
        'UTA',
      ],
    },
  },
  {
    year: 2029,
    roundOne: {
      summary: {
        own: {},
        others: [
          {
            teams: ['DEN'],
            isConditional: true,
          },
        ],
      },
      details: [
        'Own',
        {
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

        },
        others: [

        ],
      },
      details: [
        'Own',
        'ATL',
        'BOS',
        'HOU',
        'MIA',
        'PHX',
      ],
    },
  },
  {
    year: 2030,
    roundOne: {
      summary: {
        own: {},
        others: [],
      },
      details: [
        'Own',
      ],
    },
    roundTwo: {
      summary: {
        own: {},
        others: [],
      },
      details: [
        'Own',
        'HOU',
        'MIA',
      ],
    },
  },
  {
    year: 2031,
    roundOne: {
      summary: {
        own: {},
        others: [],
      },
      details: [
        'Own',
      ],
    },
    roundTwo: {
      summary: {
        own: {},
        others: [],
      },
      details: [
        'Own',
      ],
    },
  },
]