import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import {
  botProt,
  getPick,
  tradePick,
  unfavorableSwap,
} from '~/data/shorthand';

export const SacPickMeta: YearMeta[] = [
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
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
      {
        details: `CHA ${botProt(56)}`,
        summary: {
          isConditional: true,
          teams: ['CHA'],
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
      {
        details: `SAS ${botProt(17)}`,
        summary: {
          isConditional: true,
          teams: ['SAS'],
        },
      },
    ],
    roundTwo: [
      {
        details: 'To OKC / CHA',
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['OKC', 'CHA'],
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
    roundTwo: [
      {
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
      tradePick('POR'),
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
      tradePick('HOU'),
      {
        details: 'Worst of DET / MIL / NYK',
        summary: {
          swapType: 'unfavorable',
          teams: ['DET', 'MIL', 'NYK'],
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
    roundTwo: [tradePick('SAS')],
  },
  {
    year: 2031,
    roundOne: [
      {
        details: `Own (${unfavorableSwap} SAS)`,
        summary: {
          isOwn: true,
          teams: ['SAS'],
          swapType: 'unfavorable',
        },
      },
      getPick('MIN'),
    ],
    roundTwo: [tradePick('SAS')],
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
  abbr: 'SAC',
  fullName: 'Sacramento Kings',
  location: 'Sacramento',
  name: 'Kings',
};

export const sacMeta: TeamMeta = {
  info,
  picks: SacPickMeta,
};
