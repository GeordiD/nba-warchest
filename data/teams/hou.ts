import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import {
  favorableSwap,
  getPick,
  ifNotConvey,
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
          ifNotSettled: {
            id: '2026.1',
            result: 'To OKC',
          },
        },
      },
      {
        id: '2026.2.OKC-DAL-PHI',
        details: 'Second best of OKC / DAL / PHI',
        summary: {
          teams: ['OKC', 'DAL', 'PHI'],
          swapType: 'mixed',
        },
      },
      {
        id: '2026.2.LAC-BOS-IND-MIA',
        details: 'Worst of LAC and best of BOS / IND / MIA',
        summary: {
          teams: ['LAC', 'BOS', 'IND', 'MIA'],
          swapType: 'mixed',
        },
      },
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
          headline: 'To OKC / SAS / MIA',
          extra: [
            'Three most favorable of HOU / OKC / IND / MIA to OKC',
            'Best of SAS and worst of above to SAS',
            'Worst to MIA',
          ],
        },
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['OKC', 'SAS', 'MIA'],
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
    roundTwo: [tradePick(2028, 2, 'ATL')],
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
          },
          {
            teams: ['DAL', 'PHX'],
            swapType: 'favorable',
          },
        ],
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
    roundTwo: [tradePick(2030, 2, 'OKC'), getPick(2030, 2, 'BOS')],
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
  abbr: 'HOU',
  fullName: 'Houston Rockets',
  location: 'Houston',
  name: 'Rockets',
};

export const houMeta: TeamMeta = {
  info,
  picks: HouPickMeta,
};
