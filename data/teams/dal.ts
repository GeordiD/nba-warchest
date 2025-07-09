import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import {
  getPick,
  ifNotConvey,
  prot,
  tradePick,
  unfavorableSwap,
} from '~/data/shorthand';

export const DalPickMeta: YearMeta[] = [
  {
    year: 2026,
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
        details: {
          headline: 'To OKC / HOU / SAS',
          extra: [
            'Best of DAL / OKC / PHI to OKC',
            'Second best to PHX',
            'Worst to SAS',
          ],
        },
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['OKC', 'HOU', 'SAS'],
        },
      },
    ],
  },
  {
    year: 2027,
    roundOne: [
      {
        details: {
          headline: `To CHA ${prot(2)}`,
          extra: [ifNotConvey(['2028 MIA 2nd'])],
        },
        summary: {
          isOwn: true,
          isConditional: true,
          teams: ['CHA'],
        },
      },
    ],
    roundTwo: [
      {
        details: {
          headline: 'To WAS / DET',
          extra: ['Best of DAL / BKN to WAS', 'Worst to DET'],
        },
        summary: {
          isOwn: true,
          teams: ['WAS', 'DET'],
          isTradedAway: true,
        },
      },
    ],
  },
  {
    year: 2028,
    roundOne: [
      {
        details: `Own (${unfavorableSwap} OKC)`,
        summary: {
          isOwn: true,
          swapType: 'unfavorable',
          teams: ['OKC'],
        },
      },
    ],
    roundTwo: [
      tradePick('IND'),
    ],
  },
  {
    year: 2029,
    roundOne: [
      {
        details: {
          headline: 'To HOU / BKN',
          extra: [
            'Two most favorable of DAL / HOU / PHX to HOU',
            'Least favorable to BKN',
          ],
        },
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['HOU', 'BKN'],
        },
      },
      getPick('LAL'),
    ],
    roundTwo: [tradePick('BKN')],
  },
  {
    year: 2030,
    roundOne: [
      {
        details: {
          headline: `Own (${unfavorableSwap} SAS)`,
          extra: [
            'SAS has included this pick in a swap with MIN, but DAL can only swap with SAS',
          ],
        },
        summary: {
          isOwn: true,
          swapType: 'unfavorable',
          teams: ['SAS'],
        },
      },
    ],
    roundTwo: [tradePick('BKN'), getPick('PHI')],
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
      tradePick('DET'),
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
  abbr: 'DAL',
  fullName: 'Dallas Mavericks',
  location: 'Dallas',
  name: 'Mavericks',
};

export const dalMeta: TeamMeta = {
  info,
  picks: DalPickMeta,
};
