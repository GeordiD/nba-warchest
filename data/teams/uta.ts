import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import {
  botProt,
  favorableSwap,
  getPick,
  ifNotConvey,
  prot,
  tradePick,
} from '~/data/shorthand';

export const UtaPickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      {
        id: '2026.1',
        details: {
          headline: `To OKC ${prot(8)}*`,
          extra: [
            'If UTA 1-8, then favorable swap with MIN / CLE',
          ],
        },
        summary: {
          isOwn: true,
          teams: ['OKC'],
          isConditional: true,
        },
      },
    ],
    roundTwo: [tradePick(2026, 2, ['SAS', 'MIL'])],
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
            desc: 'Best of of UTA / CLE / MIN',
          },
          {
            swapType: 'favorable',
            teams: ['UTA', 'CLE', 'MIN'],
            desc: 'Second best of UTA / CLE / MIN',
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
        details: 'To IND',
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['IND'],
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
    roundTwo: [
      tradePick(2028, 2, 'OKC'),
      {
        id: '2028.2.et-all',
        details: {
          headline: `Worst of DET* / CHA / LAC / MIA* / NYK`,
          extra: [
            `DET ${botProt(56)}`,
            'MIA if DAL conveys 1st to CHA in 2027',
          ],
        },
        summary: {
          swapType: 'unfavorable',
          teams: ['DET', 'CHA', 'LAC', 'MIA', 'NYK'],
        },
      },
    ],
  },
  {
    year: 2029,
    roundOne: [
      {
        id: '2029.1',
        details: {
          headline: `Two* most favorable of UTA / CLE / MIN ${prot(5)}`,
          extra: [
            'If MIN does not convey, SAS only receives most favorable',
            ifNotConvey(['2029 2nd'], 'MIN'),
          ],
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
        details: `Worst of LAC / UTA`,
        summary: {
          isOwn: true,
          swapType: 'unfavorable',
          teams: ['LAC'],
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
      tradePick(2032, 2, 'WAS'),
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
