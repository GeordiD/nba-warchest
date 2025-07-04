import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { botProt, favorableSwap, getPick, ifNotConvey, ownPick, prot, tradePick } from '~/data/shorthand';

export const WasPickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      {
        id: '2026.1',
        details: {
          headline: `To NYK ${prot(8)}`,
          extra: [
            'If WAS 1-8, it can favorably swap with PHX',
            ifNotConvey(['2026 2nd & 2027 2nd']),
          ],
        },
        summary: {
          isOwn: true,
          isConditional: true,
          teams: ['NYK'],
        },
      },
      {
        id: '2026.1.OKC-HOU-LAC',
        details: `Worst of OKC / HOU ${prot(4)} / LAC`,
        summary: {
          teams: ['OKC', 'HOU', 'LAC'],
          swapType: 'unfavorable',
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
      getPick(2026, 2, 'CHI'),
      getPick(2026, 2, 'PHX'),
      {
        id: '2026.2.MIN-NYK-NOP-POR',
        details: {
          headline: 'MIN / NYK / NOP / POR',
          extra: [
            [
              'WAS receives worst of (1) and (2):',
              '(1): Best of MIN / NYK',
              '(2): Best of NOP / POR',
            ],
          ],
        },
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
      {
        id: '2027.2.CHI',
        details: `CHI ${botProt(51)}`,
        summary: {
          isConditional: true,
          teams: ['CHI'],
        },
      },
      {
        id: '2027.2.GSW-PHX',
        details: 'Worst of GSW / PHX',
        summary: {
          swapType: 'unfavorable',
          teams: ['GSW', 'PHX'],
        },
      },
    ],
  },
  {
    year: 2028,
    roundOne: [
      {
        id: '2028.1',
        details: {
          headline: `Own (swap with BKN / PHI* / PHX / MIL / POR)`,
          extra: [
            [
              'WAS receives better of (1) and (2):',
              '(1): Best of WAS and worst of BKN / PHI* / PHX',
              '(2): Worst of MIL and POR*',
            ],
            [
              'PHI included if',
              prot(8, false),
              'PHI does not convey 1st to BKN in 2027',
              'PHI has conveyed 1st to OKC in 2026',
            ],
            'POR include if they have conveyed a 1st to CHI by 2027',
          ],
        },
        summary: {
          isOwn: true,
          swapType: 'favorable',
          teams: ['BKN', 'PHI', 'PHX', 'MIL', 'POR'],
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
      {
        id: '2028.2.DEN',
        details: `DEN ${prot(33)}`,
        summary: {
          teams: ['DEN'],
          isConditional: true,
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
        },
      },
    ],
    roundTwo: [
      {
        id: '2029.2',
        details: {
          headline: 'To IND / NYK',
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
      tradePick(2030, 2, 'PHI'),
      {
        id: '2030.2.PHX-POR',
        details: 'Worst of PHX / POR',
        summary: {
          teams: ['PHX', 'POR'],
          swapType: 'unfavorable',
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
      {
        id: '2031.2.MIA-IND',
        details: 'Best of MIA / IND',
        summary: {
          swapType: 'favorable',
          teams: ['MIA', 'IND'],
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
      // TODO: 2nd from NOP
      ownPick(2032, 2),
      getPick(2032, 2, 'UTA'),
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
