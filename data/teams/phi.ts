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
    year: 2025,
    roundOne: [
      {
        id: '2025.1',
        details: {
          headline: `To OKC ${prot(6)}`,
          extra: [
            ifNotConvey([
              `2026 1st ${prot(4)}`,
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
    roundTwo: [tradePick(2025, 2, 'CHA')],
  },
  {
    year: 2026,
    roundOne: [
      {
        id: '2026.1',
        details: 'Own',
        summary: {
          isOwn: true,
          ifNotSettled: {
            id: '2025.1',
            result: `To OKC ${prot(4)}`,
          },
        },
      },
      {
        id: '2026.1.OKC-HOU-LA',
        details: `Worst of OKC / HOU ${prot(4)} / LAC`,
        summary: {
          teams: ['OKC', 'HOU', 'LAC'],
          swapType: 'unfavorable',
        },
      },
    ],
    roundTwo: [
      {
        id: '2026.2',
        details: {
          headline: 'To OKC / HOU / SAS',
          extra: [
            'Best of PHI / OKC / DAl to OKC',
            'Second beest to HOU',
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
          headline: `To BKN ${prot}`,
          extra: [
            'If PHI has conveyed a 1st to OKC by 2025',
            ifNotConvey([`2028 1st ${prot(8)}`]),
          ],
        },
        summary: {
          isOwn: true,
          ifNotSettled: {
            id: '2025.1',
            result: `To OKC ${prot(4)}`,
          },
          isConditional: true,
          teams: ['BKN'],
        },
      },
    ],
    roundTwo: [
      {
        id: '2027.2',
        details: 'Own',
        summary: {
          isOwn: true,
          ifNotSettled: {
            id: '2025.1',
            result: 'To OKC',
          },
        },
      },
      getPick(2027, 2, 'MIL'),
    ],
  },
  {
    year: 2028,
    roundOne: [
      {
        id: '2028.1',
        details: 'Own',
        summary: {
          isOwn: true,
          ifNotSettled: {
            id: '2027.1',
            result: `To BKN ${prot(8)}`,
          },
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
          ifNotSettled: {
            id: '2027.1',
            result: 'To BKN',
          },
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
    roundTwo: [tradePick(2030, 2, 'DAL')],
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
