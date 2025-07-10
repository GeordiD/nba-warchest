import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import {
  botProt,
  favorableSwap,
  getPick,
  ifNotConvey,
  prot,
} from '~/data/shorthand';

export const SasPickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      {
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
        details: 'Worst of NOP / POR',
        summary: {
          swapType: 'unfavorable',
          teams: ['NOP', 'POR'],
        },
      },
      {
        details: `UTA ${botProt(56)}`,
        summary: {
          isConditional: true,
          teams: ['UTA'],
        },
      },
    ],
  },
  {
    year: 2027,
    roundOne: [
      {
        details: {
          headline: 'To SAC / OKC',
          extra: [
            'To SAC if 1-16',
            'To OKC otherwise',
          ],
        },
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['SAC', 'OKC'],
        },
      },
      getPick('ATL'),
    ],
    roundTwo: [
      {
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
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
      getPick('MIN'),
      getPick('NOP'),
    ],
  },
  {
    year: 2029,
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
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
      getPick('LAC'),
      getPick('NOP'),
    ],
  },
  {
    year: 2030,
    roundOne: [
      {
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
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
      getPick('CLE'),
      getPick('SAC'),
    ],
  },
  {
    year: 2031,
    roundOne: [
      {
        details: `Own (${favorableSwap} SAC)`,
        summary: {
          isOwn: true,
          swapType: 'favorable',
          teams: ['SAC'],
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
      getPick('SAC'),
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
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
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
