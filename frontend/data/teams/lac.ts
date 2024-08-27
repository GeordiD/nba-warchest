import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { favorableSwap, prot, tradePick, unfavorableSwap } from '~/data/shorthand';

export const LacPickMeta: YearMeta[] = [
  {
    year: 2025,
    roundOne: [
      {
        id: '2025.1',
        details: {
          headline: `Own (${unfavorableSwap} OKC)`,
          extra: [
            `OKC gets best of OKC / HOU ${prot(10)} / LAC`,
          ],
        },
        summary: {
          isOwn: true,
          swapType: 'unfavorable',
          teams: ['OKC'],
        },
      },
    ],
    roundTwo: [
      tradePick(2025, 2, 'LAL'),
    ],
  },
  {
    year: 2026,
    roundOne: [
      {
        id: '2026.1',
        details: {
          headline: 'To OKC / PHI',
          extra: [
            `Two most favorable of LAC / HOU ${prot(4)} / OKC to OKC`,
            `Worst to PHI`,
          ],
        },
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['OKC', 'PHI'],
        },
      },
    ],
    roundTwo: [
      {
        id: '2026.2',
        details: {
          headline: 'To HOU / MEM',
          extra: [
            'Worst between LAC and the best of BOS / IND / MIA to HOU',
            'Other to MEM',
          ],
        },
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['MEM', 'HOU'],
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
          headline: `Worst of LAC / DEN ${prot(5)} / OKC`,
          extra: [
            'If DEN conveys 1st to ORL in 2025',
          ],
        },
        summary: {
          isOwn: true,
          teams: ['DEN', 'OKC'],
          swapType: 'unfavorable',
        },
      },
    ],
    roundTwo: [
      tradePick(2027, 2, 'ATL'),
    ],
  },
  {
    year: 2028,
    roundOne: [
      tradePick(2028, 1, 'PHI'),
    ],
    roundTwo: [
      {
        id: '2028.2',
        details: {
          headline: 'To CHA / DAL',
          extra: [
            'Best of LAC / CHA to CHA',
            'Worst to DAL',
          ],
        },
        summary: {
          isOwn: true,
          teams: ['CHA', 'DAL'],
          isTradedAway: true,
        },
      },
    ],
  },
  {
    year: 2029,
    roundOne: [
      {
        id: '2029.1',
        details: `Own (${unfavorableSwap} PHI ${prot(3)})`,
        summary: {
          isOwn: true,
          swapType: 'unfavorable',
          teams: ['PHI'],
        },
      },
    ],
    roundTwo: [
      tradePick(2029, 2, 'SAS'),
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
        details: `Own (${favorableSwap} UTA)`,
        summary: {
          isOwn: true,
          teams: ['UTA'],
          swapType: 'favorable',
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
  abbr: 'LAC',
  fullName: 'Los Angeles Clippers',
  location: 'Los Angeles',
  name: 'Clippers',
}

export const lacMeta: TeamMeta = {
  info,
  picks: LacPickMeta,
}
