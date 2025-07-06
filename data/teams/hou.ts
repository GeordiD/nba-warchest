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
        id: '2026.1',
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
        id: '2026.2',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
      getPick(2026, 2, 'CHI'),
    ],
  },
  {
    year: 2027,
    roundOne: [
      {
        id: '2027.1',
        details: `Own (${favorableSwap} BKN)`,
        summary: {
          isOwn: true,
          swapType: 'favorable',
          teams: ['BKN'],
        },
      },
      getPick(2027, 1, 'PHX'),
    ],
    roundTwo: [
      {
        id: '2027.2',
        details: {
          headline: 'To OKC / SAS / MIA / NYK',
        },
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['OKC', 'NYK', 'SAS', 'MIA'],
        },
      },
      getPick(2027, 2, 'MEM'),
      {
        id: '2027.2.POR-NOP',
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
        id: '2028.1',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
    ],
    roundTwo: [ownPick(2028, 2)],
  },
  {
    year: 2029,
    roundOne: [
      {
        id: '2029.1',
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
            teams: ['DAL', 'PHX'],
            swapType: 'favorable',
            includeOwn: true,
            desc: 'Second best of HOU / DAL / PHX',
          },
        ],
      },
    ],
    roundTwo: [
      tradePick(2029, 2, 'WAS'),
      getPick(2029, 2, 'SAC'),
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
    roundTwo: [tradePick(2030, 2, 'OKC')],
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
        details: `To BOS ${prot(55)}`,
        summary: {
          isOwn: true,
          teams: ['BOS'],
          isConditional: true,
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
      // TODO: get 2 unspecified 2nd round picks from WAS
      tradePick(2032, 2, 'PHX'),
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
