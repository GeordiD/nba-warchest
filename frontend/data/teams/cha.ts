import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { getPick, ifNotConvey, prot } from '~/data/shorthand';

export const ChaPickMeta: YearMeta[] = [
  {
    year: 2025,
    roundOne: [
      {
        id: '2025.1',
        details: {
          headline: `To SAS ${prot(14)}`,
          extra: [
            ifNotConvey([
              '2026 2nd',
            ]),
          ],
        },
        summary: {
          isOwn: true,
          isConditional: true,
          teams: ['SAS'],
        },
      },
    ],
    roundTwo: [
      {
        id: '2025.2',
        details: `To IND ${prot(55)}`,
        summary: {
          isOwn: true,
          isConditional: true,
          teams: ['IND'],
        },
      },
      getPick(2025, 2, 'PHI'),
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
        },
      },
    ],
    roundTwo: [
      {
        id: '2026.2',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
      getPick(2026, 2, 'GSW'),
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
      {
        id: '2027.1.DAL',
        details: {
          headline: `DAL ${prot(2)}`,
          extra: [
            ifNotConvey([
              '2028 MIA 2nd',
            ]),
          ],
        },
        summary: {
          isConditional: true,
          teams: ['DAL'],
        },
      },
      {
        id: '2027.1.MIA',
        details: {
          headline: `MIA ${prot(14)}`,
          extra: [
            'If MIA conveys 1st to OKC in 2025',
            ifNotConvey([
              '2028 1st',
            ]),
          ],
        },
        summary: {
          isConditional: true,
          teams: ['MIA'],
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
      {
        id: '2027.2.POR-NOP',
        details: 'Best of POR / NOP',
        summary: {
          swapType: 'favorable',
          teams: ['POR', 'NOP'],
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
          headline: 'Best of CHA / LAC',
          extra: [
            'Worst to DAL',
          ],
        },
        summary: {
          isOwn: true,
          teams: ['LAC'],
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
      getPick(2031, 2, 'NYK'),
    ],
  },
]

const info: TeamInfo = {
  abbr: 'CHA',
  fullName: 'Charlotte Hornets',
  location: 'Charlotte',
  name: 'Hornets',
}

export const chaMeta: TeamMeta = {
  info,
  picks: ChaPickMeta,
}
