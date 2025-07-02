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

export const UtaPickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      {
        id: '2026.1',
        details: {
          headline: 'Best of UTA / MIN / CLE',
          extra: [
            'If has not conveyed 1st to OKC in 2025',
            'Second best to CLE',
            'Worst to MIN',
          ],
        },
        summary: {
          isOwn: true,
          teams: ['UTA', 'MIN', 'CLE'],
          swapType: 'favorable',
          ifNotSettled: {
            id: '2025.1',
            result: `To OKC ${prot(8)}`,
          },
        },
      },
    ],
    roundTwo: [tradePick(2026, 2, 'SAS')],
  },
  {
    year: 2027,
    roundOne: [
      {
        id: '2027.1',
        details: {
          headline: 'Two most favorable of UTA / CLE / MIN',
          extra: ['Least favorable to PHX'],
        },
        summary: [
          {
            isOwn: true,
            swapType: 'favorable',
            teams: ['UTA', 'CLE', 'MIN'],
          },
          {
            swapType: 'favorable',
            teams: ['UTA', 'CLE', 'MIN'],
          },
        ],
      },
      {
        id: '2027.1.LAL',
        details: {
          headline: `LAL ${prot(4)}`,
          extra: ['2027 2nd'],
        },
        summary: {
          teams: ['LAL'],
          isConditional: true,
        },
      },
    ],
    roundTwo: [
      {
        id: '2027.2',
        details: 'To IND / TOR',
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['IND', 'TOR'],
        },
      },
    ],
  },
  {
    year: 2028,
    roundOne: [
      {
        id: '2028.1',
        details: `Own (${favorableSwap} CLE)`,
        summary: {
          isOwn: true,
          swapType: 'favorable',
          teams: ['CLE'],
        },
      },
    ],
    roundTwo: [tradePick(2028, 2, 'OKC')],
  },
  {
    year: 2029,
    roundOne: [
      {
        id: '2029.1',
        details: {
          headline: `1-2 most favorable of UTA / CLE / MIN ${prot(5)}`,
          extra: ['Least favorable to PHX', ifNotConvey(['2029 2nd'])],
        },
        summary: [
          {
            isOwn: true,
            swapType: 'favorable',
            teams: ['UTA', 'CLE', 'MIN'],
            desc: `Most favorable of UTA / CLE / MIN ${prot(5)}`,
          },
          {
            swapType: 'favorable',
            teams: ['UTA', 'CLE', 'MIN'],
            isConditional: true,
            desc: `Second most favorable of UTA / CLE / MIN ${prot(5)}`,
          },
        ],
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
        details: `Own`,
        summary: {
          isOwn: true,
        },
      },
      getPick(2030, 2, 'LAC'),
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
      getPick(2031, 1, 'PHX'),
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
    ],
    roundTwo: [
      {
        id: '2032.2',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
    ],
  },
];

const info: TeamInfo = {
  abbr: 'UTA',
  fullName: 'Utah Jazz',
  location: 'Utah',
  name: 'Jazz',
};

export const utaMeta: TeamMeta = {
  info,
  picks: UtaPickMeta,
};
