import type { CombinedMeta } from '~/data/PicksByYear';

export interface TeamInfo {
  abbr: string,
  fullName: string,
  name: string,
  location: string,
}

export interface TeamMeta {
  info: TeamInfo,
  picks: CombinedMeta[],
}
