import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import {
  ownPick,
  prot,
  tradePick,
  unfavorableSwap,
} from '~/data/shorthand';

export const LacPickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      {
        id: '2026.1',
        details: {
          headline: 'To OKC / WAS',
          extra: [
            `Two most favorable of LAC / HOU ${prot(4)} / OKC to OKC`,
            `Worst to WAS`,
          ],
        },
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['OKC', 'WAS'],
        },
      },
    ],
    roundTwo: [
      {
        id: '2026.2',
        details: {
          headline: 'To BKN / MEM',
          extra: [
            'Worst between LAC and the best of BOS / IND / MIA to BKN',
            'Other to MEM',
          ],
        },
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['MEM', 'BKN'],
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
        },
        summary: {
          isOwn: true,
          teams: ['DEN', 'OKC'],
          swapType: 'unfavorable',
        },
      },
    ],
    roundTwo: [ownPick(2027, 2)],
  },
  {
    year: 2028,
    roundOne: [tradePick(2028, 1, 'PHI')],
    roundTwo: [
      {
        id: '2028.2',
        details: {
          headline: 'To CHA / DET',
          extra: ['Best of LAC / CHA to CHA', 'Worst to DET'],
        },
        summary: {
          isOwn: true,
          teams: ['CHA', 'DET'],
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
    roundTwo: [tradePick(2029, 2, 'SAS')],
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
    roundTwo: [{
      id: '2030.2',
      details: {
        headline: `Worst of LAC / UTA`,
        extra: ['Best to CHA'],
      },
      summary: {
        isOwn: true,
        teams: ['UTA'],
        swapType: 'unfavorable',
      },
    }],
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
];

const info: TeamInfo = {
  abbr: 'LAC',
  fullName: 'Los Angeles Clippers',
  location: 'Los Angeles',
  name: 'Clippers',
};

export const lacMeta: TeamMeta = {
  info,
  picks: LacPickMeta,
};
