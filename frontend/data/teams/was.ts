import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { favorableSwap, getPick, ifNotConvey, prot, unfavorableSwap } from '~/data/shorthand';

export const WasPickMeta: YearMeta[] = [
  {
    year: 2025,
    roundOne: [
      {
        id: '2025.1',
        details: {
          headline: `To NYK ${prot(10)}`,
          extra: [
            ifNotConvey([
              `2026 1st ${prot(8)}`,
              '2026 2nd & 2027 2nd',
            ]),
          ],
        },
        summary: {
          isOwn: true,
          isConditional: true,
          teams: ['NYK'],
        },
      },
    ],
    roundTwo: [
      {
        id: '2025.2',
        details: `Own (${unfavorableSwap} GSW)`,
        summary: {
          isOwn: true,
          teams: ['GSW'],
          swapType: 'unfavorable',
        },
      },
    ],
  },
  {
    year: 2026,
    roundOne: [
      {
        id: '2026.1',
        details: {
          headline: `Own (${favorableSwap} PHX)`,
          extra: [
            'If has conveyed 1st to NYK in 2025',
          ],
        },
        summary: {
          isOwn: true,
          ifNotSettled: {
            id: '2025.1',
            result: `To NYK ${8}`,
          },
          swapType: 'favorable',
          teams: ['PHX'],
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
            result: `To NYK`,
          },
        },
      },
      getPick(2026, 2, 'CHI'),
      {
        id: '2026.2.MIN-NYK-NOP-POR',
        details: 'Worst between (best of MIN / NYK) and (best of NOP / POR)',
        summary: {
          teams: ['MIN', 'NYK', 'NOP', 'POR'],
          swapType: 'mixed',
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
            result: `To NYK`,
          },
        },
      },
      {
        id: '2027.2.BKN-DAL',
        details: 'Best of BKN / DAL',
        summary: {
          swapType: 'favorable',
          teams: ['BKN', 'DAL'],
        },
      },
      getPick(2027, 2, 'CHI'),
      getPick(2027, 2, 'GSW'),
      getPick(2027, 2, 'PHX'),
    ],
  },
  {
    year: 2028,
    roundOne: [
      {
        id: '2028.1',
        details: {
          headline: `Own (swap with BKN / PHI ${prot(8)} / PHX)`,
          extra: [
            'WAS gets better of WAS and worst of BKN / PHI / PHX',
            [
              'PHI included if',
              'PHI does not convey 1st to BKN in 2027',
              'PHI has conveyed 1st to OKC in 2026',
            ],
          ],
        },
        summary: {
          isOwn: true,
          swapType: 'favorable',
          teams: ['BKN', 'PHI', 'PHX'],
        },
      },
    ],
    roundTwo: [
      {
        id: '2028.2',
        details: {
          headline: 'Worst of WAS / LAL',
          extra: [
            'Best to ORL',
          ],
        },
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
      {
        id: '2029.1.BOS.MIL.POR',
        details: 'Second best of BOS / MIL / POR',
        summary: {
          teams: ['BOS', 'MIL', 'POR'],
          swapType: 'mixed',
          ownNotIncluded: true,
        },
      },
    ],
    roundTwo: [
      {
        id: '2029.2',
        details: {
          headline: 'To IND / NYK',
          extra: [
            'Best of IND / WAS to IND',
            'Worst to NYK',
          ],
        },
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['IND', 'NYK'],
        },
      },
    ],
  },
  {
    year: 2030,
    roundOne: [
      {
        id: '2030.1',
        details: `Own (${favorableSwap} PHX)`,
        summary: {
          isOwn: true,
          swapType: 'favorable',
          teams: ['PHX'],
        },
      },
      {
        id: '2030.1.GSW',
        details: {
          headline: `GSW ${prot(20)}`,
          extra: [
            ifNotConvey([
              '2030 2nd',
            ]),
          ],
        },
        summary: {
          teams: ['GSW'],
          isConditional: true,
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
      getPick(2030, 2, 'PHX'),
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
  abbr: 'WAS',
  fullName: 'Washington Wizards',
  location: 'Washington',
  name: 'Wizards',
}

export const wasMeta: TeamMeta = {
  info,
  picks: WasPickMeta,
}
