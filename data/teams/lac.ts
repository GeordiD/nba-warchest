import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import {
  prot,
  tradePick,
  unfavorableSwap,
} from '~/data/shorthand';

export const LacPickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      {
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
    roundTwo: [tradePick('UTA')],
  },
  {
    year: 2028,
    roundOne: [tradePick('PHI')],
    roundTwo: [
      {
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
        details: `Own (${unfavorableSwap} PHI ${prot(3)})`,
        summary: {
          isOwn: true,
          swapType: 'unfavorable',
          teams: ['PHI'],
        },
      },
    ],
    roundTwo: [tradePick('SAS')],
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
    roundTwo: [{
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
    ],
  },
  {
    year: 2032,
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
