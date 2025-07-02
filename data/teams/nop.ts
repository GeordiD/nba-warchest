import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { favorableSwap, prot, tradePick } from '~/data/shorthand';

export const NopPickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      {
        id: '2026.1',
        details: `Own (${favorableSwap} MIL)`,
        summary: {
          isOwn: true,
          swapType: 'favorable',
          teams: ['MIL'],
        },
      },
    ],
    roundTwo: [
      {
        id: '2026.2',
        details: 'To BOS / SAS / WAS',
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['BOS', 'SAS', 'WAS'],
        },
      },
    ],
  },
  {
    year: 2027,
    roundOne: [
      {
        id: '2027.1',
        details: {
          headline: `Best of NOP / MIL`,
          extra: [
            `Worst of MIL / NOP to ATL ${prot(4)}`,
          ],
        },
        summary: [
          {
            isOwn: true,
            swapType: 'favorable',
            teams: ['MIL'],
          },
          {
            isConditional: true,
            isTradedAway: true,
            swapType: 'favorable',
            teams: ['MIL'],
          },
        ],
      },
    ],
    roundTwo: [
      {
        id: '2027.2',
        details: {
          headline: 'To CHA / POR',
          extra: [
            'Best of NOP / POR to CHA',
            'Worst to POR',
            'POR may convey to BOS',
          ],
        },
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['CHA', 'POR'],
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
      tradePick(2028, 2, 'SAS'),
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
      tradePick(2028, 2, 'SAS'),
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
]

const info: TeamInfo = {
  abbr: 'NOP',
  fullName: 'New Orleans Pelicans',
  location: 'New Orleans',
  name: 'Pelicans',
}

export const nopMeta: TeamMeta = {
  info,
  picks: NopPickMeta,
}
