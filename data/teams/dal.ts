import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { ifNotConvey, prot, tradePick, unfavorableSwap } from '~/data/shorthand';

export const DalPickMeta: YearMeta[] = [
  {
    year: 2025,
    roundOne: [
      {
        id: '2025.1',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
    ],
    roundTwo: [
      {
        id: '2025.2',
        details: {
          headline: 'To BOS',
          extra: [
            'DAL may receive a 2nd conditionally',
          ],
        },
        summary: {
          isOwn: true,
          isConditional: true,
          teams: ['BOS'],
        },
      },
    ],
  },
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
          extra: [
            ifNotConvey([
              '2028 MIA 2nd',
            ]),
          ],
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
          extra: [
            'Best of DAL / BKN to WAS',
            'Worst to DET',
          ],
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
      {
        id: '2028.2',
        details: {
          headline: 'To IND / TOR',
          extra: [
            'To IND if IND conveys 1st to TOR by 2027',
            'Otherwise, to TOR',
          ],
        },
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['IND', 'TOR'],
        },
      },
      {
        id: '2028.2.CHA-LAC',
        details: 'Worst of CHA / LAC',
        summary: {
          swapType: 'unfavorable',
          teams: ['CHA', 'LAC'],
        },
      },
      {
        id: '2028.2.DAL',
        details: {
          headline: 'MIA',
          extra: [
            'If DAL conveys 1st to CHA in 2027',
          ],
        },
        summary: {
          isConditional: true,
          teams: ['MIA'],
        },
      },
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
    ],
    roundTwo: [
      tradePick(2029, 2, 'BKN'),
    ],
  },
  {
    year: 2030,
    roundOne: [
      {
        id: '2030.1',
        details: `Own (${unfavorableSwap} SAS)`,
        summary: {
          isOwn: true,
          swapType: 'unfavorable',
          teams: ['SAS'],
        },
      },
    ],
    roundTwo: [
      tradePick(2030, 2, 'MEM'),
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
  abbr: 'DAL',
  fullName: 'Dallas Mavericks',
  location: 'Dallas',
  name: 'Mavericks',
}

export const dalMeta: TeamMeta = {
  info,
  picks: DalPickMeta,
}
