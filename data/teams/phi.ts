import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import {
  favorableSwap,
  getPick,
  ifNotConvey,
  prot,
  tradePick,
} from '~/data/shorthand';

export const PhiPickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      {
        details: {
          headline: `To OKC ${prot(4)}`,
          extra: [
            ifNotConvey([
              `2027 1st ${prot(4)}`,
              '2027 2nd',
            ]),
          ],
        },
        summary: {
          isOwn: true,
          isConditional: true,
          teams: ['OKC'],
        },
      },
    ],
    roundTwo: [
      {
        details: {
          headline: 'To OKC / BKN / SAS',
          extra: [
            'Best of PHI / OKC / DAl to OKC',
            'Second best to BKN',
            'Worst to SAS',
          ],
        },
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['OKC', 'BKN', 'SAS'],
        },
      },
    ],
  },
  {
    year: 2027,
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
        details: 'Best of GSW / PHX',
        summary: {
          swapType: 'favorable',
          teams: ['GSW', 'PHX'],
        },
      },
    ],
  },
  {
    year: 2028,
    roundOne: [
      {
        details: {
          headline: `To BKN ${prot(8)}`,
          extra: [
            'Technically this could go to NYK. See BKN for details',
            ifNotConvey(['2028 2nd']),
          ],
        },
        summary: {
          isOwn: true,
          isConditional: true,
          teams: ['BKN'],
        },
      },
      getPick('LAC'),
    ],
    roundTwo: [
      {
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
      {
        details: `DET ${prot(55)}`,
        summary: {
          isConditional: true,
          teams: ['DET'],
        },
      },
      getPick('GSW'),
    ],
  },
  {
    year: 2029,
    roundOne: [
      {
        details: `Own (${favorableSwap} LAC ${prot(3)})`,
        summary: {
          isOwn: true,
          swapType: 'favorable',
          teams: ['LAC'],
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
      tradePick('DAL'),
      {
        details: 'Best of PHX / POR',
        summary: {
          swapType: 'favorable',
          teams: ['PHX', 'POR'],
        },
      },
      getPick('WAS'),
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
  abbr: 'PHI',
  fullName: 'Philadelphia 76ers',
  location: 'Philadelphia',
  name: '76ers',
};

export const phiMeta: TeamMeta = {
  info,
  picks: PhiPickMeta,
};
