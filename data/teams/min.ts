import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import {
  getPick,
  ifNotConvey,
  prot,
  tradePick,
  unfavorableSwap,
} from '~/data/shorthand';

export const MinPickMeta: YearMeta[] = [
  {
    year: 2025,
    roundOne: [
      tradePick(2025, 1, 'UTA'),
      {
        id: '2025.1.DET',
        details: {
          headline: `DET ${prot(13)}`,
          extra: [
            ifNotConvey([
              `2026 1st ${prot(11)}`,
              `2027 1st ${prot(9)}`,
              '2026 2nd & 2027 2nd',
            ]),
          ],
        },
        summary: {
          isConditional: true,
          teams: ['DET'],
        },
      },
    ],
    roundTwo: [tradePick(2025, 2, 'ATL'), getPick(2025, 2, 'UTA')],
  },
  {
    year: 2026,
    roundOne: [
      {
        id: '2026.1',
        details: {
          headline: `Own (${unfavorableSwap} UTA)`,
          extra: [
            "If UTA has not conveyed 1st to OKC in 2025, UTA can only swap if it's pick is 1-8",
          ],
        },
        summary: {
          isOwn: true,
          teams: ['UTA'],
          swapType: 'unfavorable',
        },
      },
    ],
    roundTwo: [
      {
        id: '2026.2',
        details: 'To NYK / BOS / WAS',
        summary: {
          isOwn: true,
          teams: ['NYK', 'BOS', 'WAS'],
          isTradedAway: true,
        },
      },
      {
        id: '2026.2.IND-MIA-SAS',
        details: 'Worst of IND / MIA / SAS',
        summary: {
          teams: ['IND', 'MIA', 'SAS'],
          swapType: 'unfavorable',
        },
      },
    ],
  },
  {
    year: 2027,
    roundOne: [tradePick(2027, 1, 'UTA')],
    roundTwo: [tradePick(2027, 2, 'OKC')],
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
    roundTwo: [tradePick(2028, 2, 'SAS')],
  },
  {
    year: 2029,
    roundOne: [
      {
        id: '2029.1',
        details: {
          headline: `To UTA ${prot(5)}`,
          extra: [ifNotConvey(['2029 2nd'])],
        },
        summary: {
          isOwn: true,
          isConditional: true,
          teams: ['UTA'],
        },
      },
    ],
    roundTwo: [
      {
        id: '2029.2',
        details: 'Own',
        summary: {
          isOwn: true,
          ifNotSettled: {
            id: '2029.1',
            result: 'To UTA',
          },
        },
      },
    ],
  },
  {
    year: 2030,
    roundOne: [
      {
        id: '2030.1',
        details: `Own (${unfavorableSwap} best of DAL / SAS) ${prot(1)}`,
        summary: {
          isOwn: true,
          swapType: 'mixed',
          teams: ['DAL', 'SAS'],
        },
      },
    ],
    roundTwo: [tradePick(2030, 2, 'DET')],
  },
  {
    year: 2031,
    roundOne: [tradePick(2031, 1, 'SAC')],
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
  abbr: 'MIN',
  fullName: 'Minnesota Timberwolves',
  location: 'Minnesota',
  name: 'Timberwolves',
};

export const minMeta: TeamMeta = {
  info,
  picks: MinPickMeta,
};
