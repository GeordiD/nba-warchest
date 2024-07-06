import type { TeamAbbr } from '~/utils/TeamAbbr';

export type SwapType = 'favorable' | 'unfavorable' | 'mixed';

export type Year = '2025' | '2026' | '2027' | '2028' | '2029' | '2030' | '2031';
export type Round = '1' | '2';
export type Id = `${Year}.${Round}` | `${Year}.${Round}.${string}`;

export interface PickDetails {
  id: Id;
  headline: string;
  extra?: (string | string[])[];
}

export interface PickSummary {
  details?: number,
  id: Id,

  isConditional?: boolean,
  swapType?: SwapType,
  teams?: TeamAbbr[];
  isTradedAway?: boolean;
}

export interface RoundPickData {
  own: PickSummary,
  others: PickSummary[]
}

export interface CombinedRoundMeta {
  summary: RoundPickData,
  details: PickDetails[]
}

export interface CombinedMeta {
  year: number,
  roundOne: CombinedRoundMeta,
  roundTwo: CombinedRoundMeta,
}
