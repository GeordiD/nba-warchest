import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import {
  favorableSwap,
  ifNotConvey,
  ownPick,
  prot,
  tradePick,
} from '~/data/shorthand';

export const MiaPickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      tradePick(['BOS', 'MIN', 'SAS', 'MEM', 'BKN']),
    ],
  },
  {
    year: 2027,
    roundOne: [
      {
        details: {
          headline: `To CHA ${prot(14)}`,
          extra: [
            ifNotConvey(['2028 1st']),
          ],
        },
        summary: {
          isOwn: true,
          teams: ['CHA'],
          isConditional: true,
        },
      },
    ],
    roundTwo: [
      {
        details: {
          headline: `Own (${favorableSwap} SAS and worst of MIA / OKC / HOU / IND)`,
          extra: [
            'Best three of MIA / OKC / HOU / IND to OKC',
            'Best of remaining pick and SAS to MIA',
            'Worst to SAS',
          ],
        },
        summary: {
          isOwn: true,
          swapType: 'mixed',
          teams: ['OKC', 'SAS', 'HOU', 'IND'],
        },
      },
    ],
  },
  {
    year: 2028,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      tradePick(['DET', 'CHA']),
    ],
  },
  {
    year: 2029,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [tradePick('OKC')],
  },
  {
    year: 2030,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [tradePick('OKC')],
  },
  {
    year: 2031,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      tradePick(['IND', 'MEM', 'WAS']),
    ],
  },
  {
    year: 2032,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      ownPick(),
    ],
  },
];

const info: TeamInfo = {
  abbr: 'MIA',
  fullName: 'Miami Heat',
  location: 'Miami',
  name: 'Heat',
};

export const miaMeta: TeamMeta = {
  info,
  picks: MiaPickMeta,
};
