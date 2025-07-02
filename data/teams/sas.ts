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

export const SasPickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      {
        id: '2026.1',
        details: `Own (${favorableSwap} ATL)`,
        summary: {
          isOwn: true,
          swapType: 'favorable',
          teams: ['ATL'],
        },
      },
    ],
    roundTwo: [
      {
        id: '2026.2',
        details: {
          headline: 'Own (swap with IND / MIA)',
          extra: ['Better of SAS and worst of IND / MIA', 'Worst to MIN'],
        },
        summary: {
          isOwn: true,
          swapType: 'mixed',
          teams: ['IND', 'MIA'],
        },
      },
      {
        id: '2026.2.OKC-DAL-PHI',
        details: 'Worst of OKC / DAL / PHI',
        summary: {
          swapType: 'unfavorable',
          teams: ['OKC', 'DAL', 'PHI'],
        },
      },
      {
        id: '2026.2.NOP-POR',
        details: 'Worst of NOP / POR',
        summary: {
          swapType: 'unfavorable',
          teams: ['NOP', 'POR'],
        },
      },
      getPick(2026, 2, 'UTA'),
    ],
  },
  {
    year: 2027,
    roundOne: [tradePick(2027, 1, 'SAC'), getPick(2027, 1, 'ATL')],
    roundTwo: [
      {
        id: '2027.2',
        details: {
          headline: 'Own (swap with OKC / HOU / IND / MIA',
          extra: [
            'Best of SAS and worst of OKC / HOU / IND / MIA',
            'Worst to MIA',
          ],
        },
        summary: {
          isOwn: true,
          swapType: 'mixed',
          teams: ['OKC', 'HOU', 'IND', 'MIA'],
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
          headline: `Own (${favorableSwap} BOS ${prot(1)})`,
          extra: [ifNotConvey([`2028 1st ${botProt(46)}`])],
        },
        summary: {
          isOwn: true,
          swapType: 'favorable',
          teams: ['BOS'],
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
      getPick(2028, 2, 'MIN'),
      getPick(2028, 2, 'NOP'),
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
    ],
    roundTwo: [
      {
        id: '2029.2',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
      getPick(2029, 2, 'LAC'),
      getPick(2029, 2, 'NOP'),
    ],
  },
  {
    year: 2030,
    roundOne: [
      {
        id: '2030.1',
        details: `Own (${favorableSwap} DAL / MIN ${prot(1)})`,
        summary: {
          isOwn: true,
          swapType: 'favorable',
          teams: ['DAL', 'MIN'],
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
      getPick(2030, 2, 'CLE'),
    ],
  },
  {
    year: 2031,
    roundOne: [
      {
        id: '2031.1',
        details: `Own (${favorableSwap})`,
        summary: {
          isOwn: true,
          swapType: 'favorable',
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
      getPick(2031, 2, 'SAC'),
    ],
  },
];

const info: TeamInfo = {
  abbr: 'SAS',
  fullName: 'San Antonio Spurs',
  location: 'San Antonio',
  name: 'Spurs',
};

export const sasMeta: TeamMeta = {
  info,
  picks: SasPickMeta,
};
