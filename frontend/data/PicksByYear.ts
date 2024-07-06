import type { TeamAbbr } from '~/utils/TeamAbbr';

interface PickData {
  isConditional?: boolean,
  isMoreFavorable?: boolean,
  isLessFavorable?: boolean,
  notes?: string | string[];
}

interface OwnPickData extends PickData {
  to?: TeamAbbr;
  with?: TeamAbbr | TeamAbbr[];
}

interface OtherPickData extends PickData {
  from: TeamAbbr | TeamAbbr[];
}

interface RoundPickData {
  own: OwnPickData,
  others: OtherPickData[]
}

export interface PicksByYear {
  year: number,
  roundOne: RoundPickData,
  roundTwo: RoundPickData,
}
