import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import {
  botProt,
  getPick,
  ownPick,
  tradePick,
  unfavorableSwap,
} from '~/data/shorthand';

export const SacPickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      ownPick(),
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
      ownPick(),
      {
        details: `SAS ${botProt(17)}`,
        summary: {
          isConditional: true,
          teams: ['SAS'],
        },
      },
    ],
    roundTwo: [
      tradePick(['OKC', 'CHA']),
    ],
  },
  {
    year: 2028,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      ownPick(),
      tradePick('POR'),
    ],
  },
  {
    year: 2029,
    roundOne: [
      ownPick(),
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
      ownPick(),
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
      ownPick(),
    ],
    roundTwo: [
      ownPick(),
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
