import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { favorableSwap, getPick, ifNotConvey, ownPick, prot } from '~/data/shorthand';

export const OkcCombinedMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      {
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
            isOwn: true,
            teams: ['HOU', 'LAC'],
            swapType: 'favorable',
            isConditional: true,
            desc: `Second best of OKC / HOU ${prot(4)} / LAC`,
          },
        ],
      },
      {
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
        details: {
          headline: 'Most favorable of OKC / DAL / PHL',
          extra: ['Second most favorable to PHX', 'Least favorable to SAS'],
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
            isOwn: true,
            isConditional: true,
            swapType: 'favorable',
            teams: ['DEN', 'LAC'],
            desc: 'Second best of OKC / DEN / LAC',
          },
        ],
      },
      {
        details: `SAS ${prot(16)}`,
        summary: {
          isConditional: true,
          teams: ['SAS'],
        },
      },
    ],
    roundTwo: [
      {
        details: {
          headline: 'Most favorable of OKC / HOU / IND / MIA',
        },
        summary: {
          isOwn: true,
          swapType: 'favorable',
          teams: ['HOU', 'IND', 'MIA'],
        },
      },
      {
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
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
      {
        details: 'MIL',
        summary: {
          teams: ['MIL'],
        },
      },
      {
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
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
      {
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
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
      {
        details: 'ATL',
        summary: {
          teams: ['ATL'],
        },
      },
      {
        details: 'BOS',
        summary: {
          teams: ['BOS'],
        },
      },
      {
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
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
    ],
    roundTwo: [
      {
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
      {
        details: 'HOU',
        summary: {
          teams: ['HOU'],
        },
      },
      {
        details: 'MIA',
        summary: {
          teams: ['MIA'],
        },
      },
      getPick('DEN'),
    ],
  },
  {
    year: 2031,
    roundOne: [
      {
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
    ],
    roundTwo: [
      {
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
      {
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
      ownPick(),
    ],
    roundTwo: [
      ownPick(),
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
