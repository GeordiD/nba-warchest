import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { ifNotConvey, prot, tradePick } from '~/data/shorthand';

export const LalPickMeta: YearMeta[] = [
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
    roundTwo: [tradePick('TOR')],
  },
  {
    year: 2027,
    roundOne: [
      {
        details: {
          headline: `To UTA ${prot(4)}`,
          extra: [ifNotConvey(['2027 2nd'])],
        },
        summary: {
          isOwn: true,
          isConditional: true,
          teams: ['UTA'],
        },
      },
    ],
    roundTwo: [
      {
        details: {
          headline: 'To BKN',
          extra: [
            'If LAL has conveyed a 1st to UTA in 2027; Otherwise to UTA',
          ],
        },
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['BKN'],
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
        details: {
          headline: 'To ORL / WAS',
          extra: ['Best of LAL / WAS to ORL', 'Worst to WAS'],
        },
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['ORL', 'WAS'],
        },
      },
    ],
  },
  {
    year: 2029,
    roundOne: [tradePick('DAL')],
    roundTwo: [tradePick('WAS')],
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
      tradePick('BKN'),
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
  abbr: 'LAL',
  fullName: 'Los Angeles Lakers',
  location: 'Los Angeles',
  name: 'Lakers',
};

export const lalMeta: TeamMeta = {
  info,
  picks: LalPickMeta,
};
