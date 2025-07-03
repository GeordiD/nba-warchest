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
        details: {
          headline: 'To OKC / HOU / SAS',
          extra: [
            'Best of DAL / OKC / PHI to OKC',
            'Second best to HOU',
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
        id: '2027.1',
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
        id: '2027.2',
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
        id: '2028.1',
        details: `Own (${unfavorableSwap} OKC)`,
        summary: {
          isOwn: true,
          swapType: 'unfavorable',
          teams: ['OKC'],
        },
      },
    ],
    roundTwo: [
      tradePick(2028, 2, 'IND'),
    ],
  },
  {
    year: 2029,
    roundOne: [
      {
        id: '2029.1',
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
      getPick(2029, 1, 'LAL'),
    ],
    roundTwo: [tradePick(2029, 2, 'BKN')],
  },
  {
    year: 2030,
    roundOne: [
      {
        id: '2030.1',
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
    roundTwo: [tradePick(2030, 2, 'BKN'), getPick(2030, 2, 'PHI')],
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
      tradePick(2031, 2, 'DET'),
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
  abbr: 'DAL',
  fullName: 'Dallas Mavericks',
  location: 'Dallas',
  name: 'Mavericks',
};

export const dalMeta: TeamMeta = {
  info,
  picks: DalPickMeta,
};
