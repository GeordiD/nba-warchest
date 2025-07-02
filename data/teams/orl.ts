import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { favorableSwap, getPick, ifNotConvey, ownPick, prot } from '~/data/shorthand';

export const OrlPickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      {
        id: '2026.1',
        details: {
          headline: `Own (${favorableSwap} PHX / WAS)`,
          extra: [
            'If WAS does not convey 1st to NYK in 2025, WAS can only swap if it\'s pick is 1-8',
          ],
        },
        summary: {
          isOwn: true,
          swapType: 'favorable',
          teams: ['PHX', 'WAS'],
        },
      },
    ],
    roundTwo: [
      {
        id: '2026.2',
        details: {
          headline: 'Two most favorable of ORL / DET / MIL',
          extra: [
            'Worst to BKN',
          ],
        },
        summary: [
          {
            isOwn: true,
            teams: ['DET', 'MIL'],
            swapType: 'favorable',
            desc: 'Best of ORL / DET / MIL',
          },
          {
            desc: 'Second best of ORL / DET / MIL',
            teams: ['DET', 'MIL'],
            swapType: 'favorable',
          },
        ],
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
        },
      },
      getPick(2027, 2, 'BOS'),
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
      {
        id: '2028.2.LAL-WAS',
        details: 'Best of LAL / WAS',
        summary: {
          teams: ['LAL', 'WAS'],
          swapType: 'favorable',
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
      {
        id: '2030.2',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
      getPick(2030, 2, 'MIL'),
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
      ownPick(2032, 1),
    ],
    roundTwo: [
      ownPick(2032, 2),
    ],
  },
]

const info: TeamInfo = {
  abbr: 'ORL',
  fullName: 'Orlando Magic',
  location: 'Orlando',
  name: 'Magic',
}

export const orlMeta: TeamMeta = {
  info,
  picks: OrlPickMeta,
}
