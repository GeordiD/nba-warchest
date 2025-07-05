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
  ownNotIncluded?: boolean, // Probably deprecated: should be checking if isOwn instead
  includeOwn?: boolean, // Sometimes needed to get around new logic above. Is isOwn fine here too?
  teams?: TeamAbbr[];
  isTradedAway?: boolean;
  isOwn?: boolean;
  frozen?: number; // Year of the start of the season it's frozen through (2027 = 2027-28)
  desc?: string;
  /**
   * @deprecated we're not using, so I'm not updating. If we want to use, must update data
   */
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
