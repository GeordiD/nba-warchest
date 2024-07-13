import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { botProt, getPick, ifNotConvey, prot, tradePick, unfavorableSwap } from '~/data/shorthand';

export const AtlPickMeta: YearMeta[] = [
  {
    year: 2025,
    roundOne: [
      {
        id: '2025.1',
        details: 'To SAS',
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['SAS'],
        },
      },
      {
        id: '2025.1.SAC',
        details: {
          headline: `SAC ${prot(12)}`,
          extra: [
            ifNotConvey([
              `2026 1st ${prot(10)}`,
              '2026 2nd',
            ]),
          ],
        },
        summary: {
          teams: ['SAC'],
          isConditional: true,
        },
      },
    ],
    roundTwo: [
      {
        id: '2025.2',
        details: {
          headline: 'To POR / OKC',
          extra: [
            `To POR ${prot(40)}`,
            `Otherwise, to OKC`,
          ],
        },
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['OKC', 'POR'],
        },
      },
      {
        id: '2025.2.MIN',
        details: 'MIN',
        summary: {
          teams: ['MIN'],
        },
      },
    ],
  },
  {
    year: 2026,
    roundOne: [
      {
        id: '2026.1',
        details: `Own (${unfavorableSwap} SAS)`,
        summary: {
          isOwn: true,
          swapType: 'unfavorable',
          teams: ['SAS'],
        },
      },
    ],
    roundTwo: [
      tradePick(2026, 2, 'GSW'),
      {
        id: '2026.2.MEM',
        details: `MEM ${botProt(43)}`,
        summary: {
          isConditional: true,
          teams: ['MEM'],
        },
      },
    ],
  },
  {
    year: 2027,
    roundOne: [
      tradePick(2027, 1, 'SAS'),
    ],
    roundTwo: [
      tradePick(2027, 2, 'MEM'),
      {
        id: '2027.2.LAC',
        details: 'LAC',
        summary: {
          teams: ['LAC'],
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
      tradePick(2028, 2, 'GSW'),
      getPick(2028, 2, 'HOU'),
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
      tradePick(2029, 2, 'OKC'),
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
]

const info: TeamInfo = {
  abbr: 'ATL',
  fullName: 'Atlanta Hawks',
  location: 'Atlanta',
  name: 'Hawks',
}

export const atlMeta: TeamMeta = {
  info,
  picks: AtlPickMeta,
}
