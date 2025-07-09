import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import {
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
      tradePick('WAS'),
      {
        details: 'Second best of OKC / DAL / PHI',
        summary: {
          teams: ['OKC', 'DAL', 'PHI'],
          swapType: 'mixed',
        },
      },
    ],
  },
  {
    year: 2027,
    roundOne: [
      tradePick('HOU'),
      {
        details: 'Least favorable of CLE / MIN / UTA',
        summary: {
          teams: ['UTA', 'CLE', 'MIN'],
          swapType: 'unfavorable',
        },
      },
    ],
    roundTwo: [
      {
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
      ownPick(),
    ],
  },
  {
    year: 2030,
    roundOne: [
      {
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
      tradePick(['WAS', 'PHI']),
    ],
  },
  {
    year: 2031,
    roundOne: [tradePick('UTA')],
    roundTwo: [
      tradePick('CHA'),
    ],
  },
  {
    year: 2032,
    roundOne: [
      {
        details: 'Own',
        summary: {
          isOwn: true,
          frozen: 2028,
        },
      },
    ],
    roundTwo: [
      {
        details: 'Worst of PHX / HOU',
        summary: {
          isOwn: true,
          teams: ['HOU'],
          swapType: 'unfavorable',
        },
      },
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
