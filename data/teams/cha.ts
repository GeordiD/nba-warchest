import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { getPick, ifNotConvey, prot, tradePick } from '~/data/shorthand';

export const ChaPickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      {
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
      {
        details: `Worst of MEM / ORL / WAS ${prot(8)} / PHX`,
        summary: {
          swapType: 'unfavorable',
          teams: ['PHX', 'WAS', 'ORL', 'MEM'],
        },
      },
    ],
    roundTwo: [
      tradePick(2026, 2, 'SAC'),
      {
        details: 'Best of DEN / GSW',
        summary: {
          swapType: 'favorable',
          teams: ['DEN', 'GSW'],
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
      {
        details: {
          headline: `DAL ${prot(2)}`,
          extra: [ifNotConvey(['2028 MIA 2nd'])],
        },
        summary: {
          isConditional: true,
          teams: ['DAL'],
        },
      },
      {
        details: {
          headline: `MIA ${prot(14)}`,
          extra: [
            ifNotConvey([
              '2028 1st',
            ]),
          ],
        },
        summary: {
          isConditional: true,
          teams: ['MIA'],
        },
      },
    ],
    roundTwo: [
      tradePick(2027, 2, 'SAC'),
      {
        details: 'Best of POR / NOP',
        summary: {
          swapType: 'favorable',
          teams: ['POR', 'NOP'],
        },
      },
    ],
  },
  {
    year: 2028,
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
          headline: 'Best of CHA / LAC',
          extra: ['Worst to DET'],
        },
        summary: {
          isOwn: true,
          teams: ['LAC'],
          swapType: 'favorable',
        },
      },
    ],
  },
  {
    year: 2029,
    roundOne: [
      {
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
      {
        details: `Worst of CLE / MIN ${prot(5)} / UTA`,
        summary: {
          swapType: 'unfavorable',
          teams: ['CLE', 'UTA', 'MIN'],
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
        details: {
          headline: 'DEN',
          extra: [
            'If DEN has conveyed a 1st to OKC by 2029',
          ],
        },
        summary: {
          teams: ['DEN'],
          isConditional: true,
          desc: 'DEN (conditionally)',
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
      {
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
      {
        details: 'Best of LAC / UTA',
        summary: {
          swapType: 'favorable',
          teams: ['LAC', 'UTA'],
        },
      },
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
      getPick(2031, 2, 'NYK'),
      getPick(2031, 2, 'DEN'),
      getPick(2031, 2, 'MIL'),
      getPick(2031, 2, 'PHX'),
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
      getPick(2032, 2, 'MIL'),
    ],
  },
];

const info: TeamInfo = {
  abbr: 'CHA',
  fullName: 'Charlotte Hornets',
  location: 'Charlotte',
  name: 'Hornets',
};

export const chaMeta: TeamMeta = {
  info,
  picks: ChaPickMeta,
};
