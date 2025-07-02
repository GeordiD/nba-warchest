import type { TeamAbbr } from '~/utils/TeamAbbr';

export type SwapType = 'favorable' | 'unfavorable' | 'mixed';

export type Year = '2026' | '2027' | '2028' | '2029' | '2030' | '2031' | '2032';
export type Round = '1' | '2';
export type Id = `${Year}.${Round}` | `${Year}.${Round}.${string}`;

export interface PickDetails {
  headline: string;
  extra?: (string | string[])[];
}

export interface PickSummary {
  isConditional?: boolean,
  swapType?: SwapType,
  ownNotIncluded?: boolean,
  teams?: TeamAbbr[];
  isTradedAway?: boolean;
  isOwn?: boolean;
  frozen?: number; // 2028
  desc?: string;
  ifNotSettled?: {
    id: Id,
    result: string,
  },
}

export interface PickMeta {
  id: Id,
  summary: PickSummary | PickSummary[],
  details: string | PickDetails,
}

export interface YearMeta {
  year: number,
  roundOne: PickMeta[],
  roundTwo: PickMeta[],
}
