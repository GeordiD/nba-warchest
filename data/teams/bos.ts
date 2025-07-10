import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { favorableSwap, getPick, ifNotConvey, prot, tradePick, unfavorableSwap } from '~/data/shorthand';

export const bosPickMeta: YearMeta[] = [
  {
    year: 2026,
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
          headline: `Own (${unfavorableSwap} with better of IND / MIA)`,
        },
        summary: {
          isOwn: true,
          swapType: 'mixed',
        },
      },
      {
        details: `Most favorable of MIN / NYK / NOP / POR`,
        summary: {
          teams: ['MIN', 'NYK', 'NOP', 'POR'],
          swapType: 'favorable',
        },
      },
      {
        details: 'Most favorable of DET / ORL / MIL',
        summary: {
          teams: ['DET', 'ORL', 'MIL'],
          swapType: 'favorable',
        },
      },
    ],
  },
  {
    year: 2027,
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
        details: `Own (${favorableSwap} ORL)`,
        summary: {
          isOwn: true,
          swapType: 'favorable',
          teams: ['ORL'],
        },
      },
    ],
  },
  {
    year: 2028,
    roundOne: [
      {
        details: {
          headline: `Own (${unfavorableSwap} SAN ${prot(1)})`,
          extra: [ifNotConvey(['2028 2nd'])],
        },
        summary: {
          isOwn: true,
          swapType: 'unfavorable',
          teams: ['SAS'],
        },
      },
    ],
    roundTwo: [
      {
        details: {
          headline: `To NYK ${prot(45)}`,
        },
        summary: {
          isOwn: true,
          isConditional: true,
          teams: ['NYK'],
        },
      },
    ],
  },
  {
    year: 2029,
    roundOne: [
      {
        details: {
          headline: 'To POR or WAS',
          extra: [
            'Best and least favorable of BOS / POR / WAS to POR',
            'Second most favorable to WAS',
          ],
        },
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['POR', 'WAS'],
        },
      },
    ],
    roundTwo: [
      {
        details: 'To OKC',
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['OKC'],
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
      tradePick('BKN'),
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
    ],
    roundTwo: [
      {
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
      getPick('CLE'),
      {
        details: `HOU ${prot(55)}`,
        summary: {
          isConditional: true,
          teams: ['HOU'],
        },
      },
    ],
  },
  {
    year: 2032,
    roundOne: [
      {
        details: 'Own (frozen through 2027-28)',
        summary: {
          isOwn: true,
          frozen: 2028,
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
  abbr: 'BOS',
  fullName: 'Boston Celtics',
  name: 'Celtics',
  location: 'Boston',
};

export const bosMeta: TeamMeta = {
  info,
  picks: bosPickMeta,
};
