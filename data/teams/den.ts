import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { ifNotConvey, prot, tradePick } from '~/data/shorthand';

export const DenPickMeta: YearMeta[] = [
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
            result: `To ORL ${prot(5)}`,
          },
        },
      },
    ],
    roundTwo: [tradePick(2026, 2, 'PHX')],
  },
  {
    year: 2027,
    roundOne: [
      {
        id: '2027.1',
        details: {
          headline: `To OKC ${prot(5)}`,
          extra: [
            'If DEN conveys 1st to ORL in 2025',
            'OKC can swap OKC or DEN with LAC',
            ifNotConvey([
              `2028 1st ${prot(5)} and if DEN has conveyed 1st to ORL by 2026`,
              `2029 1st ${prot(5)}`,
              `2029 2nd`,
            ]),
          ],
        },
        summary: {
          isOwn: true,
          isConditional: true,
          teams: ['OKC'],
          ifNotSettled: {
            id: '2025.1',
            result: `To ORL ${prot(5)}`,
          },
        },
      },
    ],
    roundTwo: [tradePick(2027, 2, 'CLE')],
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
            result: `To OKC ${prot(5)}`,
          },
        },
      },
    ],
    roundTwo: [
      {
        id: '2028.2',
        details: `To DEN ${prot(33)}`,
        summary: {
          isOwn: true,
          isConditional: true,
          teams: ['DEN'],
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
          headline: `To OKC ${prot(5)}`,
          extra: [ifNotConvey([`2030 1st ${prot(5)}`, '2030 2nd'])],
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
        id: '2029.2',
        details: 'Own',
        summary: {
          isOwn: true,
          ifNotSettled: {
            id: '2027.1',
            result: 'To OKC',
          },
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
          ifNotSettled: {
            id: '2029.1',
            result: `To OKC ${prot(5)}`,
          },
        },
      },
    ],
    roundTwo: [tradePick(2030, 2, 'OKC')],
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
    roundTwo: [tradePick(2031, 2, 'PHX')],
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
  abbr: 'DEN',
  fullName: 'Denver Nuggets',
  location: 'Denver',
  name: 'Nuggets',
};

export const denMeta: TeamMeta = {
  info,
  picks: DenPickMeta,
};
