import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { getPick, ifNotConvey, ownPick, prot, tradePick } from '~/data/shorthand';

export const ChaPickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      ownPick(),
      {
        details: `Worst of MEM / ORL / WAS ${prot(8)} / PHX`,
        summary: {
          swapType: 'unfavorable',
          teams: ['PHX', 'WAS', 'ORL', 'MEM'],
        },
      },
    ],
    roundTwo: [
      tradePick(['SAC', 'DET']),
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
      ownPick(),
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
      tradePick('SAC'),
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
      ownPick(),
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
      ownPick(),
      {
        details: `Worst of CLE / MIN ${prot(5)} / UTA`,
        summary: {
          swapType: 'unfavorable',
          teams: ['CLE', 'UTA', 'MIN'],
        },
      },
    ],
    roundTwo: [
      ownPick(),
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
      ownPick(),
    ],
    roundTwo: [
      ownPick(),
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
      ownPick(),
    ],
    roundTwo: [
      ownPick(),
      getPick('NYK'),
      getPick('DEN'),
      getPick('MIL'),
      getPick('PHX'),
    ],
  },
  {
    year: 2032,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      ownPick(),
      getPick('MIL'),
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
