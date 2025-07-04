import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { ifNotConvey, prot, tradePick } from '~/data/shorthand';

export const LalPickMeta: YearMeta[] = [
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
    roundTwo: [tradePick(2026, 2, 'TOR')],
  },
  {
    year: 2027,
    roundOne: [
      {
        id: '2027.1',
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
        id: '2027.2',
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
        id: '2028.1',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
    ],
    roundTwo: [
      {
        id: '2028.2',
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
    roundOne: [tradePick(2029, 1, 'DAL')],
    roundTwo: [tradePick(2029, 2, 'WAS')],
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
      tradePick(2030, 2, 'BKN'),
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
  abbr: 'LAL',
  fullName: 'Los Angeles Lakers',
  location: 'Los Angeles',
  name: 'Lakers',
};

export const lalMeta: TeamMeta = {
  info,
  picks: LalPickMeta,
};
