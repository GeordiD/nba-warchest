import type { TeamMeta } from '~/data/TeamMeta';
import { okcMeta } from '~/data/teams/okc';

const metas: Record<string, TeamMeta> = {
  okc: okcMeta,
}

export function getMetadataForTeam(abbr: TeamAbbr): TeamMeta {
  return metas[abbr];
}
