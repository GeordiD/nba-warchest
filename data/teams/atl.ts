import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import {
  botProt,
  favorableSwap,
  prot,
  tradePick,
} from '~/data/shorthand';

export const AtlPickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      {
        details: {
          headline: `Own (swap with SAS / CLE / UTA / MIN)`,
          extra: [
            [
              'ATL receives more favorable of (1) and (2):',
              '(1): Worst of SAS / ATL',
              `(2): Best of CLE / UTA ${prot(8)} / MIN. If UTA falls in 1-8, then (2) becomes CLE`,
            ],
          ],
        },
        summary: {
          isOwn: true,
          swapType: 'mixed',
          teams: ['SAS', 'CLE', 'UTA', 'MIN'],
        },
      },
      {
        details: `Most favorable of MIL / NOP`,
        summary: {
          swapType: 'unfavorable',
          teams: ['MIL', 'NOP'],
        },
      },
    ],
    roundTwo: [
      tradePick(2026, 2, 'BKN'),
      {
        details: {
          headline: `One of BOS / IND / MIA / MIN / NYK / NOP / POR`,
          extra: [[
            'ATL receives least favorable of (1) and (2):',
            '(1): Least favorable of BOS and the most favorable of IND / MIA',
            '(2): Most favorable of NYK / NOP / POR',
          ]],
        },
        summary: {
          isConditional: true,
          swapType: 'mixed',
          teams: ['BOS', 'IND', 'MIA', 'MIN', 'NYK', 'NOP', 'POR'],
        },
      },
    ],
  },
  {
    year: 2027,
    roundOne: [
      tradePick(2027, 1, 'SAS'),
      {
        details: `Least favorable of MIL ${prot(4)} and NOP ${prot(4)}`,
        summary: {
          swapType: 'unfavorable',
          teams: ['MIL', 'NOP'],
        },
      },
    ],
    roundTwo: [tradePick(2027, 2, 'POR')],
  },
  {
    year: 2028,
    roundOne: [
      {
        details: {
          headline: 'Swap with UTA / CLE',
          extra: [
            'More favorable of ATL and less favorable of UTA and CLE',
          ],
        },
        summary: {
          isOwn: true,
          swapType: 'mixed',
          teams: ['UTA', 'CLE'],
        },
      },
    ],
    roundTwo: [tradePick(2028, 2, 'BKN')],
  },
  {
    year: 2029,
    roundOne: [
      {
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
    ],
    roundTwo: [tradePick(2029, 2, 'OKC')],
  },
  {
    year: 2030,
    roundOne: [
      {
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
    ],
    roundTwo: [
      {
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
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
    ],
    roundTwo: [
      {
        details: `Own (${favorableSwap} HOU ${botProt(56)})`,
        summary: {
          isOwn: true,
          teams: ['HOU'],
          swapType: 'favorable',
        },
      },
    ],
  },
  {
    year: 2032,
    roundOne: [
      {
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
    ],
    roundTwo: [
      {
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
    ],
  },
];

const info: TeamInfo = {
  abbr: 'ATL',
  fullName: 'Atlanta Hawks',
  location: 'Atlanta',
  name: 'Hawks',
};

export const atlMeta: TeamMeta = {
  info,
  picks: AtlPickMeta,
};
