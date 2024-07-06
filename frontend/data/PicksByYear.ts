import type { PickMeta } from '~/data/DraftAssetsMeta';
import type { TeamAbbr } from '~/utils/TeamAbbr';

export type SwapType = 'favorable' | 'unfavorable' | 'mixed';

export interface PickData {
  details?: number,

  isConditional?: boolean,
  swapType?: SwapType,
  teams?: TeamAbbr[];
  isTradedAway?: boolean;
}

export interface RoundPickData {
  own: PickData,
  others: PickData[]
}

export interface PicksByYear {
  year: number,
  roundOne: RoundPickData,
  roundTwo: RoundPickData,
}

export interface CombinedRoundMeta {
  summary: RoundPickData,
  details: (PickMeta | string)[]
}

export interface CombinedMeta {
  year: number,
  roundOne: CombinedRoundMeta,
  roundTwo: CombinedRoundMeta,
}

// const test: CombinedMeta = {
//   year: 2025,
//   roundOne: {
//     summary: {
//       own: {
//         swapType: 'favorable',
//         teams: ['HOU', 'LAC'],
//       },
//       others: [
//         {
//           teams: ['MIA'],
//           isConditional: true,
//         },
//         {
//           teams: ['PHI'],
//           isConditional: true,
//         },
//         {
//           teams: ['UTA'],
//           isConditional: true,
//         },
//       ],
//     },
//     details: [
//       {
//         headline: `Own (HOU / LAC)`,
//         extra: [
//           `HOU`,
//         ],
//       },
//       {
//         headline: `MIA`,
//         extra: [
//           'ifNotConvey',
//         ],
//       },
//       {
//         headline: `PHI`,
//         extra: [
//           `2026 1st`,
//           `2027 1st`,
//           `2027 2nd`,
//         ],
//       },
//       {
//         headline: `UTA`,
//         extra: [
//           '2026 1st',
//         ],
//       },
//     ],
//   },
//   roundTwo: {
//     summary: {

//     },
//     details: [
//       'To HOU',
//       `ATL`,
//       'More favorable of BOS and MEM',
//     ],
//   },
// },
