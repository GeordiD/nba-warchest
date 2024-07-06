import type { TeamAbbr } from '~/utils/TeamAbbr';

export type SwapType = 'favorable' | 'unfavorable' | 'mixed';

export interface PickData {
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
