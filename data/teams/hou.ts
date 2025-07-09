import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import {
  favorableSwap,
  getPick,
  ifNotConvey,
  ownPick,
  prot,
  tradePick,
} from '~/data/shorthand';

export const HouPickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      {
        details: {
          headline: `To OKC ${prot(4)}`,
          extra: [ifNotConvey(['2026 2nd'])],
        },
        summary: {
          isOwn: true,
          isConditional: true,
          teams: ['OKC'],
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
      getPick('CHI'),
    ],
  },
  {
    year: 2027,
    roundOne: [
      {
        details: `Own (${favorableSwap} BKN)`,
        summary: {
          isOwn: true,
          swapType: 'favorable',
          teams: ['BKN'],
        },
      },
      getPick('PHX'),
    ],
    roundTwo: [
      {
        details: {
          headline: 'To OKC / SAS / MIA / NYK',
        },
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['OKC', 'NYK', 'SAS', 'MIA'],
        },
      },
      getPick('MEM'),
      {
        details: `Worst of POR ${prot(55)} / NOP ${prot(55)}`,
        summary: {
          swapType: 'unfavorable',
          isConditional: true,
          teams: ['POR', 'NOP'],
        },
      },
    ],
  },
  {
    year: 2028,
    roundOne: [
      {
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
    ],
    roundTwo: [ownPick()],
  },
  {
    year: 2029,
    roundOne: [
      {
        details: {
          headline: 'Two most favorable of HOU / DAL / PHX',
          extra: ['Worst to BKN'],
        },
        summary: [
          {
            isOwn: true,
            teams: ['DAL', 'PHX'],
            swapType: 'favorable',
            desc: 'Best of HOU / DAL / PHX',
          },
          {
            isOwn: true,
            teams: ['DAL', 'PHX'],
            swapType: 'favorable',
            desc: 'Second best of HOU / DAL / PHX',
          },
        ],
      },
    ],
    roundTwo: [
      tradePick('WAS'),
      getPick('SAC'),
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
    roundTwo: [tradePick('OKC')],
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
        details: {
          headline: `Unfavorable swap with ATL or to BOS ${prot(55)}`,
          extra: [
            'If 31-55: Unfavorable swap with ATL',
            '56-60: To BOS',
          ],
        },
        summary: {
          isOwn: true,
          teams: ['BOS'],
          isConditional: true,
          swapType: 'unfavorable',
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
        details: 'To MIN / PHX',
        summary: {
          isOwn: true,
          teams: ['MIN', 'PHX'],
        },
      },
    ],
  },
];

const info: TeamInfo = {
  abbr: 'HOU',
  fullName: 'Houston Rockets',
  location: 'Houston',
  name: 'Rockets',
};

export const houMeta: TeamMeta = {
  info,
  picks: HouPickMeta,
};
