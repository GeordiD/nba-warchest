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

export interface CombinedRoundMeta {
  summary: RoundPickData,
  details: (PickMeta | string)[]
}

export interface CombinedMeta {
  year: number,
  roundOne: CombinedRoundMeta,
  roundTwo: CombinedRoundMeta,
}
