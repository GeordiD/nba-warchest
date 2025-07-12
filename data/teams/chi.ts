import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { ifNotConvey, ownPick, prot, tradePick } from '~/data/shorthand';

export const ChiPickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      ownPick(),
      {
        details: {
          headline: `POR ${prot(14)}`,
          extra: [
            ifNotConvey([
              `2027 1st ${prot(14)}`,
              `2028 1st ${prot(14)}`,
              `2028 2nd`,
            ]),
          ],
        },
        summary: {
          isConditional: true,
          teams: ['POR'],
        },
      },
    ],
    roundTwo: [
      tradePick('HOU'),
    ],
  },
  {
    year: 2027,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      tradePick('WAS'),
    ],
  },
  {
    year: 2028,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      ownPick(),
    ],
  },
  {
    year: 2029,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      ownPick(),
    ],
  },
  {
    year: 2030,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      ownPick(),
    ],
  },
  {
    year: 2031,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      ownPick(),
    ],
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
  abbr: 'CHI',
  fullName: 'Chicago Bulls',
  name: 'Bulls',
  location: 'Chicago',
};

export const chiMeta: TeamMeta = {
  info,
  picks: ChiPickMeta,
};
