import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { getPick, ifNotConvey, prot, tradePick } from '~/data/shorthand';

export const ChaPickMeta: YearMeta[] = [
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
      {
        id: '2026.1.PHX-WAS-ORL-MEM',
        details: `Worst of MEM / ORL / WAS ${prot(8)} / PHX`,
        summary: {
          swapType: 'unfavorable',
          ownNotIncluded: true,
          teams: ['PHX', 'WAS', 'ORL', 'MEM'],
        },
      },
    ],
    roundTwo: [
      tradePick(2026, 2, 'SAC'),
      {
        id: '2026.2.DEN-GSW',
        details: 'Best of DEN / GSW',
        summary: {
          swapType: 'favorable',
          ownNotIncluded: true,
          teams: ['DEN', 'GSW'],
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
      {
        id: '2027.1.DAL',
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
        id: '2027.1.MIA',
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
        id: '2027.2.POR-NOP',
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
        id: '2028.1',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
    ],
    roundTwo: [
      {
        id: '2028.2',
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
        id: '2029.1',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
      {
        id: '2029.1.CLE-UTA-MIN',
        details: `Worst of CLE / MIN ${prot(5)} / UTA`,
        summary: {
          swapType: 'unfavorable',
          teams: ['CLE', 'UTA', 'MIN'],
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
      {
        id: '2029.2.DEN',
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
      {
        id: '2030.2.LAC-UTA',
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
