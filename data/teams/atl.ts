import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import {
  botProt,
  getPick,
  prot,
  tradePick,
  unfavorableSwap,
} from '~/data/shorthand';

export const AtlPickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      {
        id: '2026.1',
        details: {
          headline: `Own (swap with SAS / CLE / UTA / MIN)`,
          extra: [
            'ATL receives more favorable of (1) and (2):',
            '(1): Worst of SAS / ATL',
            `(2): Best of CLE / UTA ${prot(8)} / MIN. If UTA falls in 1-8, then (2) becomes CLE`,
          ],
        },
        summary: {
          isOwn: true,
          swapType: 'mixed',
          teams: ['SAS', 'CLE', 'UTA', 'MIN'],
        },
      },
      {
        id: '2026.1',
        details: `Own (${unfavorableSwap} SAS)`,
        summary: {
          isOwn: true,
          swapType: 'unfavorable',
          teams: ['SAS'],
        },
      },
    ],
    roundTwo: [
      tradePick(2026, 2, 'BKN'),
      {
        id: '2026.2.MEM',
        details: `MEM ${botProt(43)}`,
        summary: {
          isConditional: true,
          teams: ['MEM'],
        },
      },
    ],
  },
  {
    year: 2027,
    roundOne: [
      tradePick(2027, 1, 'SAS'),
      {
        id: '2027.1.MIL.NOP',
        details: `Least favorable of MIL ${prot(4)} and NOP ${prot(4)}`,
        summary: {
          swapType: 'unfavorable',
          teams: ['MIL', 'NOP'],
          ownNotIncluded: true,
        },
      },
    ],
    roundTwo: [tradePick(2027, 2, 'MEM'), getPick(2027, 2, 'LAC')],
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
    roundTwo: [tradePick(2028, 2, 'BKN'), getPick(2028, 2, 'HOU')],
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
    roundTwo: [tradePick(2029, 2, 'OKC')],
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
