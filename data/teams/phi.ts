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
        id: '2026.1',
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
        id: '2026.2',
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
        id: '2027.1',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
    ],
    roundTwo: [
      {
        id: '2027.2',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
      {
        id: '2027.2.GSW-PHX',
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
        id: '2028.1',
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
      getPick(2028, 1, 'LAC'),
    ],
    roundTwo: [
      {
        id: '2028.2',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
      {
        id: '2028.2.DET',
        details: `DET ${prot(55)}`,
        summary: {
          isConditional: true,
          teams: ['DET'],
        },
      },
      getPick(2028, 2, 'GSW'),
    ],
  },
  {
    year: 2029,
    roundOne: [
      {
        id: '2029.1',
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
        id: '2029.2',
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
        id: '2030.1',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
    ],
    roundTwo: [
      tradePick(2030, 2, 'DAL'),
      {
        id: '2030.2.PHX-POR',
        details: 'Best of PHX / POR',
        summary: {
          swapType: 'favorable',
          teams: ['PHX', 'POR'],
        },
      },
      getPick(2030, 2, 'WAS'),
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
  abbr: 'PHI',
  fullName: 'Philadelphia 76ers',
  location: 'Philadelphia',
  name: '76ers',
};

export const phiMeta: TeamMeta = {
  info,
  picks: PhiPickMeta,
};
