import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { getPick, ifNotConvey, prot, tradePick, unfavorableSwap } from '~/data/shorthand';

export const SacPickMeta: YearMeta[] = [
  {
    year: 2025,
    roundOne: [
      {
        id: '2025.1',
        details: {
          headline: `To ATL ${prot(12)}`,
          extra: [
            ifNotConvey([
              `2026 1st ${prot(10)}`,
              '2026 2nd & 2027 2nd',
            ]),
          ],
        },
        summary: {
          isOwn: true,
          teams: ['ATL'],
          isConditional: true,
        },
      },
    ],
    roundTwo: [
      {
        id: '2025.2',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
      getPick(2025, 2, 'POR'),
    ],
  },
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
            result: `To ATL ${prot(10)}`,
          },
        },
      },
    ],
    roundTwo: [
      {
        id: '2026.2',
        details: 'Own',
        summary: {
          isOwn: true,
          ifNotSettled: {
            id: '2025.1',
            result: `To ATL`,
          },
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
        details: 'Own',
        summary: {
          isOwn: true,
          ifNotSettled: {
            id: '2025.1',
            result: `To ATL`,
          },
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
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
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
      tradePick(2030, 2, 'IND'),
    ],
  },
  {
    year: 2031,
    roundOne: [
      {
        id: '2031.1',
        details: `Own (${unfavorableSwap} SAS)`,
        summary: {
          isOwn: true,
          teams: ['SAS'],
          swapType: 'unfavorable',
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
  abbr: 'SAC',
  fullName: 'Sacramento Kings',
  location: 'Sacramento',
  name: 'Kings',
}

export const sacMeta: TeamMeta = {
  info,
  picks: SacPickMeta,
}
