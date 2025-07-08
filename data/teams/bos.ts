import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { favorableSwap, getPick, ifNotConvey, prot, tradePick, unfavorableSwap } from '~/data/shorthand';

export const bosPickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      {
        id: '2026.1',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
    ],
    roundTwo: [
      {
        id: '2026.2',
        details: {
          headline: `Own (${unfavorableSwap} with better of IND / MIA)`,
        },
        summary: {
          isOwn: true,
          swapType: 'mixed',
        },
      },
      {
        id: '2026.2.MIN-NYK-NOP-POR',
        details: `Most favorable of MIN / NYK / NOP / POR`,
        summary: {
          teams: ['MIN', 'NYK', 'NOP', 'POR'],
          swapType: 'favorable',
        },
      },
      {
        id: '2026.2.ORL-DET-MIL',
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
        id: '2027.1',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
    ],
    roundTwo: [
      {
        id: '2027.2',
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
        id: '2028.1',
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
        id: '2028.2',
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
        id: '2029.1',
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
        id: '2029.2',
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
        id: '2030.1',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
    ],
    roundTwo: [
      tradePick(2030, 2, 'BKN'),
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
    ],
    roundTwo: [
      {
        id: '2031.2',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
      getPick(2031, 2, 'CLE'),
      {
        id: '2031.2.HOU',
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
        id: '2032.1',
        details: 'Own (frozen through 2027-28)',
        summary: {
          isOwn: true,
          frozen: 2028,
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
  abbr: 'BOS',
  fullName: 'Boston Celtics',
  name: 'Celtics',
  location: 'Boston',
};

export const bosMeta: TeamMeta = {
  info,
  picks: bosPickMeta,
};
