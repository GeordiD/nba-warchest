import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { botProt, getPick } from '~/data/shorthand';

export const DetPickMeta: YearMeta[] = [
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
    ],
    roundTwo: [
      {
        id: '2026.2',
        details: {
          headline: 'To ORL / BKN',
          extra: [
            'Two most favorable of DET / MIL / ORL to ORL',
            'Worst to BKN',
          ],
        },
        summary: {
          isOwn: true,
          isTradedAway: true,
          teams: ['ORL', 'BKN'],
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
        id: '2027.2.BKN-DAL',
        details: 'Worst of BKN / DAL',
        summary: {
          teams: ['BKN', 'DAL'],
          swapType: 'unfavorable',
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
        id: '2028.2.et-all',
        details: {
          headline: `All but one of DET ${botProt(56)} / CHA or LAC / MIA / NYK`,
          extra: [
            'Least of these picks goes to UTA',
            'MIA: If DAL conveys 1st to CHA in 2027',
            'Own: Included if 31-55; Otherwise to PHI',
            'Least favorable of CHA / LAC',
          ],
        },
        summary: [
          {
            isOwn: true,
            teams: ['CHA', 'LAC', 'MIA', 'NYK'],
            desc: `DET ${botProt(56)} / CHA or LAC / MIA / NYK`,
            swapType: 'favorable',
          },
          {
            teams: ['CHA', 'LAC', 'MIA', 'NYK'],
            desc: `Second best of DET ${botProt(56)} / CHA or LAC / MIA / NYK`,
            isConditional: true,
            swapType: 'favorable',
          },
          {
            teams: ['CHA', 'LAC', 'MIA', 'NYK'],
            desc: `Third best of DET ${botProt(56)} / CHA or LAC / MIA / NYK`,
            isConditional: true,
            swapType: 'favorable',
          },
        ],
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
    ],
    roundTwo: [
      {
        id: '2029.2',
        details: 'Own',
        summary: {
          isOwn: true,
        },
      },
      getPick(2029, 2, 'MIL'),
      getPick(2029, 2, 'NYK'),
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
      getPick(2030, 2, 'MIN'),
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
      getPick(2031, 2, 'DAL'),
      {
        id: '2031.2.GSW-MIN',
        details: 'Worst of GSW / MIN',
        summary: {
          swapType: 'unfavorable',
          ownNotIncluded: true,
          teams: ['GSW', 'MIN'],
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
]

const info: TeamInfo = {
  abbr: 'DET',
  fullName: 'Detroit Pistons',
  location: 'Detroit',
  name: 'Pistons',
}

export const detMeta: TeamMeta = {
  info,
  picks: DetPickMeta,
}
