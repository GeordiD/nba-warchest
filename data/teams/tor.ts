import type { YearMeta } from '~/data/PickMetaTypes';
import type { TeamInfo, TeamMeta } from '~/data/TeamMeta';
import { getPick, ownPick, prot, tradePick } from '~/data/shorthand';

export const TorPickMeta: YearMeta[] = [
  {
    year: 2026,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      {
        details: `To IND ${prot(55)}`,
        summary: {
          isOwn: true,
          isConditional: true,
          teams: ['IND'],
        },
      },
      getPick('LAL'),
    ],
  },
  {
    year: 2027,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      ownPick(),
    ],
  },
  {
    year: 2028,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      ownPick(),
    ],
  },
  {
    year: 2029,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      ownPick(),
    ],
  },
  {
    year: 2030,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      ownPick(),
    ],
  },
  {
    year: 2031,
    roundOne: [
      ownPick(),
    ],
    roundTwo: [
      tradePick('NOP'),
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
  abbr: 'TOR',
  fullName: 'Toronto Raptors',
  location: 'Toronto',
  name: 'Raptors',
}

export const torMeta: TeamMeta = {
  info,
  picks: TorPickMeta,
}
