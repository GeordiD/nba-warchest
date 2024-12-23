import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import {
  favorableSwap,
  getPick,
  ifNotConvey,
  prot,
  tradePick,
  unfavorableSwap,
} from '~/data/shorthand';

export const BknPickMeta: YearMeta[] = [
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
      {
        id: '2025.1.PHX-HOU',
        details: {
          headline: `Worst of PHX / HOU`,
          extra: [
            [
              `HOU's pick resulting from ${unfavorableSwap} OKC`,
              `OKC has right to swap with LAC / HOU ${prot(10)}`,
            ],
          ],
        },
        summary: {
          teams: ['PHX', 'HOU'],
          swapType: 'unfavorable',
        },
      },
      {
        id: '2025.1.MIL',
        details: `MIL ${prot(4)}`,
        summary: {
          teams: ['MIL'],
          isConditional: true,
        },
      },
    ],
    roundTwo: [tradePick(2025, 2, 'NYK')],
  },
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
      {
        id: '2026.2.DET-MIL-ORL',
        details: 'Worst of DET / MIL / ORL',
        summary: {
          swapType: 'unfavorable',
          teams: ['DET', 'MIL', 'ORL'],
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
      {
        id: '2027.1.PHI',
        details: {
          headline: `PHI ${prot(8)}`,
          extra: [
            'If PHI conveys 1st to OKC in 2025',
            ifNotConvey([
              `2028 1st ${prot(8)} and if PHI conveys 1st to OKC by 2026`,
              '2028 2nd',
            ]),
          ],
        },
        summary: {
          teams: ['PHI'],
          isConditional: true,
        },
      },
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
          headline: `Own (${favorableSwap} PHX / NYK)`,
          extra: [
            `If PHI 1st does not convey in 2027, PHI ${prot(
              8
            )} included in this swap (BKN getting the two most favorable)`,
          ],
        },
        summary: {
          isOwn: true,
          swapType: 'favorable',
          teams: ['NYK', 'PHX'],
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
    ],
  },
];

const info: TeamInfo = {
  abbr: 'BKN',
  fullName: 'Brooklyn Nets',
  location: 'Brookly',
  name: 'Nets',
};

export const bknMeta: TeamMeta = {
  info,
  picks: BknPickMeta,
};
