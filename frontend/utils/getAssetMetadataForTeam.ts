import type { TeamMeta } from '~/data/TeamMeta';
import { bosMeta } from '~/data/teams/bos';
import { okcMeta } from '~/data/teams/okc';

const metas: Record<string, TeamMeta> = {
  bos: bosMeta,
  okc: okcMeta,
}

export function getMetadataForTeam(abbr: TeamAbbr): TeamMeta {
  return metas[(abbr as string).toLowerCase()];
}
