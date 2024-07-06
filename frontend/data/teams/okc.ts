import type { DraftAssetsMeta } from '~/data/DraftAssetsMeta';
import type { PicksByYear } from '~/data/PicksByYear';
import { favorableSwap, ifNotConvey, prot } from '~/data/shorthand';

export const OkcByYear: PicksByYear[] = [
  {
    year: 2025,
    roundOne: {
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
    roundTwo: {
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
  },
  {
    year: 2026,
    roundOne: {
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
    roundTwo: {
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
  },
  {
    year: 2027,
    roundOne: {
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
    roundTwo: {
      own: {

      },
      others: [

      ],
    },
  },
  {
    year: 2028,
    roundOne: {
      own: {
        teams: ['DAL'],
        swapType: 'favorable',
      },
      others: [],
    },
    roundTwo: {
      own: {

      },
      others: [

      ],
    },
  },
  {
    year: 2029,
    roundOne: {
      own: {},
      others: [
        {
          teams: ['DEN'],
          isConditional: true,
        },
      ],
    },
    roundTwo: {
      own: {

      },
      others: [

      ],
    },
  },
  {
    year: 2030,
    roundOne: {
      own: {},
      others: [],
    },
    roundTwo: {
      own: {

      },
      others: [

      ],
    },
  },
  {
    year: 2031,
    roundOne: {
      own: {},
      others: [],
    },
    roundTwo: {
      own: {

      },
      others: [

      ],
    },
  },
]

export const OkcMeta: DraftAssetsMeta = {
  years: [
    {
      year: 2025,
      roundOne: [
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
      roundTwo: [
        'To HOU',
        `ATL ${prot(40)}`,
        'More favorable of BOS and MEM',
      ],
    },
    {
      year: 2026,
      roundOne: [
        {
          headline: 'Two most favorable of OKC / HOU / LAC',
          extra: [
            `HOU ${prot(4)}`,
            `Least favorable to PHI`,
          ],
        },
      ],
      roundTwo: [
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
    {
      year: 2027,
      roundOne: [
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
      roundTwo: [
        {
          headline: 'Three most favorable of OKC / HOU / IND / MIA',
          extra: [
            'Least favorable to SAN',
          ],
        },
        'MIN',
      ],
    },
    {
      year: 2028,
      roundOne: [
        `Own (${favorableSwap} DAL)`,
      ],
      roundTwo: [
        'Own',
        'MIL',
        'UTA',
      ],
    },
    {
      year: 2029,
      roundOne: [
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
      roundTwo: [
        'Own',
        'ATL',
        'BOS',
        'HOU',
        'MIA',
        'PHX',
      ],
    },
    {
      year: 2030,
      roundOne: [
        'Own',
      ],
      roundTwo: [
        'Own',
        'HOU',
        'MIA',
      ],
    },
    {
      year: 2031,
      roundOne: [
        'Own',
      ],
      roundTwo: [
        'Own',
      ],
    },
  ],
}
