import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { favorableSwap, getPick, ifNotConvey, ownPick, prot } from '~/data/shorthand';

export const OkcCombinedMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      {
        id: '2026.1',
        details: {
          headline: `Two most favorable of OKC / HOU ${prot(4)} / LAC`,
          extra: [`Least favorable to WAS`],
        },
        summary: [
          {
            teams: ['HOU', 'LAC'],
            swapType: 'favorable',
            isOwn: true,
            desc: `Best of OKC / HOU ${prot(4)} / LAC`,
          },
          {
            teams: ['HOU', 'LAC'],
            swapType: 'favorable',
            isConditional: true,
            desc: `Second best of OKC / HOU ${prot(4)} / LAC`,
          },
        ],
      },
      {
        id: '2026.1.PHI',
        details: {
          headline: `PHI ${prot(4)}`,
          extra: [
            ifNotConvey([
              `2027 1st ${prot(4)}`,
              `2027 2nd`,
            ]),
          ],
        },
        summary: {
          isConditional: true,
          teams: ['PHI'],
        },
      },
      {
        id: '2026.1.UTA',
        details: {
          headline: `UTA ${prot(8)}`,
        },
        summary: {
          isConditional: true,
          teams: ['UTA'],
        },
      },
    ],
    roundTwo: [
      {
        id: '2026.2',
        details: {
          headline: 'Most favorable of OKC / DAL / PHL',
          extra: ['Second most favorable to HOU', 'Least favorable to SAN'],
        },
        summary: {
          isOwn: true,
          teams: ['DAL', 'PHI'],
          swapType: 'favorable',
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
          headline: `Two most favorable of OKC / DEN ${prot(5)} / LAC`,
          extra: [
            ifNotConvey(
              [
                `2028 1st (${prot(5, false)} and if DEN conveys 1st to ORL in 2026)`,
                `2029 1st ${prot(5)}`,
                '2029 2nd',
              ],
              'DEN',
            ),
            'Least favorable to LAC',
          ],
        },
        summary: [
          {
            swapType: 'favorable',
            teams: ['DEN', 'LAC'],
            isOwn: true,
            desc: 'Best of OKC / DEN / LAC',
          },
          {
            isConditional: true,
            swapType: 'favorable',
            teams: ['DEN', 'LAC'],
            desc: 'Second best of OKC / DEN / LAC',
          },
        ],
      },
      {
        id: '2027.1.SAS',
        details: `SAS ${prot(16)}`,
        summary: {
          isConditional: true,
          teams: ['SAS'],
        },
      },
    ],
    roundTwo: [
      {
        id: '2027.2',
        details: {
          headline: 'Most favorable of OKC / HOU / IND / MIA',
        },
        summary: [
          {
            isOwn: true,
            swapType: 'favorable',
            teams: ['HOU', 'IND', 'MIA'],
          },
        ],
      },
      {
        id: '2027.2.CHA',
        details: {
          headline: 'CHA',
          extra: [
            'If SAS 1-16 in 2027',
          ],
        },
        summary: {
          isConditional: true,
          teams: ['CHA'],
          desc: 'CHA (conditionally)',
        },
      },
      {
        id: '2027.2.SAC',
        details: {
          headline: 'SAC',
          extra: [
            'If SAS 1-16 in 2027',
          ],
        },
        summary: {
          isConditional: true,
          teams: ['SAC'],
          desc: 'SAC (conditionally)',
        },
      },
    ],
  },
  {
    year: 2028,
    roundOne: [
      {
        id: '2028.1',
        details: `Own (${favorableSwap} DAL)`,
        summary: {
          teams: ['DAL'],
          swapType: 'favorable',
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
        id: '2028.2.MIL',
        details: 'MIL',
        summary: {
          teams: ['MIL'],
        },
      },
      {
        id: '2028.2.UTA',
        details: 'UTA',
        summary: {
          teams: ['UTA'],
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
        id: '2029.1.DEN',
        details: {
          headline: `DEN ${prot(5)}`,
          extra: [
            'If DEN conveys 1st to OKC in 2027',
            ifNotConvey([
              `2030 1st (${prot(5, false)} and if DEN conveys 1st to OKC in 2028`,
              '2030 2nd',
            ]),
          ],
        },
        summary: {
          teams: ['DEN'],
          isConditional: true,
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
      {
        id: '2029.2.ATL',
        details: 'ATL',
        summary: {
          teams: ['ATL'],
        },
      },
      {
        id: '2029.2.BOS',
        details: 'BOS',
        summary: {
          teams: ['BOS'],
        },
      },
      {
        id: '2029.2.MIA',
        details: 'MIA',
        summary: {
          teams: ['MIA'],
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
      {
        id: '2030.2.HOU',
        details: 'HOU',
        summary: {
          teams: ['HOU'],
        },
      },
      {
        id: '2030.2.MIA',
        details: 'MIA',
        summary: {
          teams: ['MIA'],
        },
      },
      getPick(2030, 2, 'DEN'),
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
        id: '2031.2.NOP-ORL',
        details: 'Worst of NOP / ORL',
        summary: {
          swapType: 'unfavorable',
          teams: ['ORL', 'NOP'],
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
];

const info: TeamInfo = {
  abbr: 'OKC',
  fullName: 'Oklahoma City Thunder',
  name: 'Thunder',
  location: 'Oklahoma City',
};

export const okcMeta: TeamMeta = {
  info,
  picks: OkcCombinedMeta,
};
