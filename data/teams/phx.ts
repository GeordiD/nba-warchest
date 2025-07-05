import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import {
  getPick,
  ownPick,
  prot,
  tradePick,
  unfavorableSwap,
} from '~/data/shorthand';

export const PhxPickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      {
        id: '2026.1',
        details: {
          headline: 'To WAS / MEM / CHA',
        },
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['CHA', 'WAS', 'MEM'],
        },
      },
    ],
    roundTwo: [
      // TODO: Gets two 2nds from HOU
      tradePick(2026, 2, 'WAS'),
      {
        id: '2026.2.DEN-GSW',
        details: 'Worst of DEN / GSW',
        summary: {
          swapType: 'unfavorable',
          teams: ['DEN', 'GSW'],
        },
      },
    ],
  },
  {
    year: 2027,
    roundOne: [
      tradePick(2027, 1, 'HOU'),
      {
        id: '2027.1.UTA-CLE-MIN',
        details: 'Least favorable of CLE / MIN / UTA',
        summary: {
          teams: ['UTA', 'CLE', 'MIN'],
          swapType: 'unfavorable',
        },
      },
    ],
    roundTwo: [
      {
        id: '2027.2.PHI-WAS',
        details: 'To PHI / WAS',
        summary: {
          isOwn: true,
          teams: ['PHI', 'WAS'],
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
        details: {
          headline: `Own (${unfavorableSwap} PHI ${prot(8)} / BKN / WAS)`,
          extra: [
            [
              'PHI included if:',
              'PHI does not convey 1st to BKN in 2027',
              'PHI has conveyed 1st to OKC in 2026',
            ],
          ],
        },
        summary: {
          isOwn: true,
          swapType: 'unfavorable',
          teams: ['BKN', 'WAS', 'PHI'],
        },
      },
    ],
    roundTwo: [
      {
        id: '2028.2',
        details: {
          headline: 'To IND / NYK',
          extra: ['Best of PHX / IND to IND', 'Worst to NYK'],
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
    year: 2029,
    roundOne: [
      {
        id: '2029.1',
        details: {
          headline: 'To HOU / BKN',
          extra: [
            'Two most favorable of PHX / DAL / HOU to HOU',
            'Worst to BKN',
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
      ownPick(2029, 2),
    ],
  },
  {
    year: 2030,
    roundOne: [
      {
        id: '2030.1',
        details: {
          headline: `Own (${unfavorableSwap} WAS / MEM)`,
          extra: [
            'Best of PHX / WAS to WAS',
            'Best of MEM and leftover of above to MEM',
          ],
        },
        summary: {
          isOwn: true,
          swapType: 'unfavorable',
          teams: ['WAS', 'MEM'],
        },
      },
    ],
    roundTwo: [
      tradePick(2030, 2, ['WAS', 'PHI']),
      tradePick(2030, 2, 'BOS'),
    ],
  },
  {
    year: 2031,
    roundOne: [tradePick(2031, 1, 'UTA')],
    roundTwo: [
      tradePick(2031, 2, 'CHA'),
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
          frozen: 2028,
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
      getPick(2032, 2, 'HOU'),
      // TODO: two 2nds to BKN
      // TODO: two 2nds to MIN
    ],
  },
];

const info: TeamInfo = {
  abbr: 'PHX',
  fullName: 'Phoenix Suns',
  location: 'Phoenix',
  name: 'Suns',
};

export const phxMeta: TeamMeta = {
  info,
  picks: PhxPickMeta,
};
