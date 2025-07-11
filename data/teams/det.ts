import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { botProt, getPick, ownPick, prot } from '~/data/shorthand';

export const DetPickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      {
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
      {
        details: `CHA ${prot(55)}`,
        summary: {
          isConditional: true,
          teams: ['CHA'],
        },
      },
    ],
  },
  {
    year: 2027,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      ownPick(),
      {
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
      ownPick(),
    ],
    roundTwo: [
      {
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
            isOwn: true,
            teams: ['CHA', 'LAC', 'MIA', 'NYK'],
            desc: `Second best of DET ${botProt(56)} / CHA or LAC / MIA / NYK`,
            isConditional: true,
            swapType: 'favorable',
          },
          {
            isOwn: true,
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
      ownPick(),
    ],
    roundTwo: [
      {
        details: {
          headline: 'Two best of DET / MIL / NYK',
          extra: [
            'Worst to SAC',
          ],
        },
        summary: [
          {
            isOwn: true,
            teams: ['MIL', 'NYK'],
            swapType: 'favorable',
          },
          {
            isOwn: true,
            teams: ['MIL', 'NYK'],
            swapType: 'favorable',
          },
        ],
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
      getPick('MIN'),
    ],
  },
  {
    year: 2031,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      ownPick(),
      getPick('DAL'),
      {
        details: 'Worst of GSW / MIN',
        summary: {
          swapType: 'unfavorable',
          teams: ['GSW', 'MIN'],
        },
      },
    ],
  },
  {
    year: 2032,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      ownPick(),
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
