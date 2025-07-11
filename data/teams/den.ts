import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { ifNotConvey, ownPick, prot, tradePick } from '~/data/shorthand';

export const DenPickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      tradePick(['CHA', 'MIN']),
    ],
  },
  {
    year: 2027,
    roundOne: [
      {
        details: {
          headline: `To OKC ${prot(5)}`,
          extra: [
            'OKC can swap OKC or DEN with LAC',
            ifNotConvey([
              `2028 1st ${prot(5)} and if DEN has conveyed 1st to ORL by 2026`,
              `2029 1st ${prot(5)}`,
              `2029 2nd`,
            ]),
          ],
        },
        summary: {
          isOwn: true,
          isConditional: true,
          teams: ['OKC'],
        },
      },
    ],
    roundTwo: [tradePick('CLE')],
  },
  {
    year: 2028,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      {
        details: `To WAS ${prot(33)}`,
        summary: {
          isOwn: true,
          isConditional: true,
          teams: ['WAS'],
        },
      },
    ],
  },
  {
    year: 2029,
    roundOne: [
      {
        details: {
          headline: `To OKC ${prot(5)}`,
          extra: [
            ifNotConvey([`2030 1st ${prot(5)}`, '2030 2nd']),
          ],
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
        details: {
          headline: 'To CHA',
          extra: ['If DEN has conveyed a 1st to OKC by 2029; Otherwise this goes to OKC'],
        },
        summary: {
          isOwn: true,
          teams: ['CHA'],
        },
      },
    ],
  },
  {
    year: 2030,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [tradePick('OKC')],
  },
  {
    year: 2031,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [tradePick('CHA')],
  },
  {
    year: 2032,
    roundOne: [
      tradePick('BKN'),
    ],
    roundTwo: [
      ownPick(),
    ],
  },
];

const info: TeamInfo = {
  abbr: 'DEN',
  fullName: 'Denver Nuggets',
  location: 'Denver',
  name: 'Nuggets',
};

export const denMeta: TeamMeta = {
  info,
  picks: DenPickMeta,
};
