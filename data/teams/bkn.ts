import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import {
  getPick,
  unfavorableSwap,
} from '~/data/shorthand';

export const BknPickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      {
        id: '2026.1',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
    ],
    roundTwo: [
      {
        id: '2026.2',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
      getPick(2026, 2, 'ATL'),
    ],
  },
  {
    year: 2027,
    roundOne: [
      {
        id: '2027.1',
        details: `Own (${unfavorableSwap} HOU)`,
        summary: {
          isOwn: true,
          swapType: 'unfavorable',
          teams: ['HOU'],
        },
      },
      getPick(2027, 1, 'NYK'),
    ],
    roundTwo: [
      {
        id: '2027.2',
        details: {
          headline: 'To WAS / DET',
          extra: ['Best of BKN / DAL to WAS', 'Worst to DET'],
        },
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['WAS', 'DET'],
        },
      },
    ],
  },
  {
    year: 2028,
    roundOne: [
      {
        id: '2028.1',
        details: {
          headline: `Two most favorable of BKN / PHX / NYK / PHI)`,
          extra: [
            `PHI only included in swap if PHI conveys 1st to OKC in 2026`,
            'If PHI is included and is the third most favorable, and NYK is the first or second most favorable, then BRK gets the first and third most favorable picks',
          ],
        },
        summary: [
          {
            isOwn: true,
            swapType: 'favorable',
            teams: ['NYK', 'PHX', 'PHI'],
            desc: 'Best of BKN / PHX / NYK / PHI',
          },
          {
            swapType: 'favorable',
            teams: ['NYK', 'PHX', 'PHI'],
            desc: 'Second (or third) best of BKN / PHX / NYK / PHI',
          },
        ],
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
      getPick(2028, 2, 'MEM'),
      getPick(2028, 2, 'ATL'),
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
      getPick(2029, 1, 'NYK'),
      {
        id: '2029.1.DAL-PHX-HOU',
        details: 'Worst of DAL / PHX / HOU',
        summary: {
          swapType: 'unfavorable',
          teams: ['DAL', 'PHX', 'HOU'],
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
      getPick(2029, 2, 'DAL'),
      getPick(2029, 2, 'MEM'),
      getPick(2029, 2, 'GSW'),
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
      getPick(2030, 2, 'DAL'),
      getPick(2030, 2, 'LAL'),
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
      getPick(2031, 1, 'NYK'),
    ],
    roundTwo: [
      {
        id: '2031.2',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
      getPick(2031, 2, 'LAL'),
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
      getPick(2032, 1, 'DEN'),
    ],
    roundTwo: [
      {
        id: '2032.2',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
      // TODO: 2 unspecified 2nd round from PHX
    ],
  },
];

const info: TeamInfo = {
  abbr: 'BKN',
  fullName: 'Brooklyn Nets',
  location: 'Brooklyn',
  name: 'Nets',
};

export const bknMeta: TeamMeta = {
  info,
  picks: BknPickMeta,
};
