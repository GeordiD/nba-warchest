import type { TeamAbbr } from '~/utils/TeamAbbr';

export type SwapType = 'favorable' | 'unfavorable' | 'mixed';

export type Year = '2025' | '2026' | '2027' | '2028' | '2029' | '2030' | '2031';
export type Round = '1' | '2';
export type Id = `${Year}.${Round}` | `${Year}.${Round}.${string}`;

export interface PickDetails {
  headline: string;
  extra?: (string | string[])[];
}

export interface PickSummary {
  details?: number,

  isConditional?: boolean,
  swapType?: SwapType,
  teams?: TeamAbbr[];
  isTradedAway?: boolean;
  isOwn?: boolean;
}

export interface PickMeta {
  id: string,
  summary: PickSummary | PickSummary[],
  details: string | PickDetails,
}

export interface CombinedMeta {
  year: number,
  roundOne: PickMeta[],
  roundTwo: PickMeta[],
}
