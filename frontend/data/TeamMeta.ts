import type { YearMeta } from '~/data/PickMetaTypes';

export interface TeamInfo {
  abbr: string,
  fullName: string,
  name: string,
  location: string,
}

export interface TeamMeta {
  info: TeamInfo,
  picks: YearMeta[],
}
