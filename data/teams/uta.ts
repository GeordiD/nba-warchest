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
    roundTwo: [tradePick(['SAS', 'MIL'])],
  },
  {
    year: 2027,
    roundOne: [
      {
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
            isOwn: true,
            swapType: 'favorable',
            teams: ['UTA', 'CLE', 'MIN'],
            desc: 'Second best of UTA / CLE / MIN',
          },
        ],
      },
      {
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
        details: 'To IND',
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['IND'],
        },
      },
      getPick('LAC'),
    ],
  },
  {
    year: 2028,
    roundOne: [
      {
        details: `Own (${favorableSwap} CLE)`,
        summary: {
          isOwn: true,
          swapType: 'favorable',
          teams: ['CLE'],
        },
      },
    ],
    roundTwo: [
      tradePick('OKC'),
      {
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
            isOwn: true,
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
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
    ],
    roundTwo: [
      {
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
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
      getPick('PHX'),
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
      tradePick('WAS'),
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
