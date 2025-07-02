import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { getPick, ifNotConvey, prot } from '~/data/shorthand';

export const DetPickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      {
        id: '2026.1',
        details: 'Own',
        summary: {
          isOwn: true,
          ifNotSettled: {
            id: '2025.1',
            result: `To NYK ${prot(11)}`,
          },
        },
      },
    ],
    roundTwo: [
      {
        id: '2026.2',
        details: {
          headline: 'To ORL / BKN',
          extra: [
            'Two most favorable of DET / MIL / ORL to ORL',
            'Worst to BKN',
          ],
        },
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['ORL', 'BKN'],
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
          ifNotSettled: {
            id: '2025.1',
            result: `To NYK ${prot(9)}`,
          },
        },
      },
    ],
    roundTwo: [
      {
        id: '2027.2',
        details: 'Own',
        summary: {
          isOwn: true,
          ifNotSettled: {
            id: '2025.1',
            result: 'To NYK',
          },
        },
      },
      {
        id: '2027.2.BKN-DAL',
        details: 'Worst of BKN / DAL',
        summary: {
          teams: ['BKN', 'DAL'],
          swapType: 'unfavorable',
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
        details: `To PHI ${prot(55)}`,
        summary: {
          isOwn: true,
          isConditional: true,
          teams: ['PHI'],
        },
      },
      getPick(2028, 2, 'NYK'),
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
      getPick(2029, 2, 'MIL'),
      getPick(2029, 2, 'NYK'),
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
      {
        id: '2030.2',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
      getPick(2030, 2, 'MIN'),
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
    ],
  },
]

const info: TeamInfo = {
  abbr: 'DET',
  fullName: 'Detroit Pistons',
  location: 'Detroit',
  name: 'Pistons',
}

export const detMeta: TeamMeta = {
  info,
  picks: DetPickMeta,
}
