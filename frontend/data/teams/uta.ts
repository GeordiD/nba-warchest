import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { favorableSwap, getPick, ifNotConvey, prot, tradePick } from '~/data/shorthand';

export const UtaPickMeta: YearMeta[] = [
  {
    year: 2025,
    roundOne: [
      {
        id: '2025.1',
        details: {
          headline: `To OKC ${prot(10)}`,
          extra: [
            ifNotConvey([
              `2026 1st ${prot(8)}`,
            ]),
          ],
        },
        summary: {
          isOwn: true,
          teams: ['OKC'],
          isConditional: true,
        },
      },
    ],
    roundTwo: [
      tradePick(2025, 2, 'MIN'),
    ],
  },
  {
    year: 2026,
    roundOne: [
      {
        id: '2026.1',
        details: {
          headline: 'Best of UTA / MIN / CLE',
          extra: [
            'If has not conveyed 1st to OKC in 2025',
            'Second best to CLE',
            'Worst to MIN',
          ],
        },
        summary: {
          isOwn: true,
          teams: ['UTA', 'MIN', 'CLE'],
          swapType: 'favorable',
          ifNotSettled: {
            id: '2025.1',
            result: `To OKC ${prot(8)}`,
          },
        },
      },
    ],
    roundTwo: [
      tradePick(2026, 2, 'SAS'),
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
      getPick(2027, 1, 'CLE'),
      {
        id: '2027.1.LAL',
        details: {
          headline: `LAL ${prot(4)}`,
          extra: [
            '2027 2nd',
          ],
        },
        summary: {
          teams: ['LAL'],
          isConditional: true,
        },
      },
      getPick(2027, 1, 'MIN'),
    ],
    roundTwo: [
      {
        id: '2027.2',
        details: 'To IND / TOR',
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['IND', 'TOR'],
        },
      },
    ],
  },
  {
    year: 2028,
    roundOne: [
      {
        id: '2028.1',
        details: `Own (${favorableSwap} CLE)`,
        summary: {
          isOwn: true,
          swapType: 'favorable',
          teams: ['CLE'],
        },
      },
    ],
    roundTwo: [
      tradePick(2028, 2, 'OKC'),
    ],
  },
  {
    year: 2029,
    roundOne: [
      {
        id: '2029.1',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
      getPick(2029, 1, 'CLE'),
      {
        id: '2029.1.MIN',
        details: {
          headline: `MIN ${prot(5)}`,
          extra: [
            ifNotConvey([
              '2029 2nd',
            ]),
          ],
        },
        summary: {
          teams: ['MIN'],
          isConditional: true,
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
      {
        id: '2030.2',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
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
  abbr: 'UTA',
  fullName: 'Utah Jazz',
  location: 'Utah',
  name: 'Jazz',
}

export const utaMeta: TeamMeta = {
  info,
  picks: UtaPickMeta,
}
