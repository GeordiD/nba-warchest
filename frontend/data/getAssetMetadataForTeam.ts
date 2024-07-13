import type { TeamMeta } from '~/data/TeamMeta';
import { atlMeta } from '~/data/teams/atl';
import { bosMeta } from '~/data/teams/bos';
import { chiMeta } from '~/data/teams/chi';
import { okcMeta } from '~/data/teams/okc';

const metas: Record<string, TeamMeta> = {
  atl: atlMeta,
  bos: bosMeta,
  chi: chiMeta,
  okc: okcMeta,
}

export function getMetadataForTeam(abbr: TeamAbbr): TeamMeta {
  return metas[(abbr as string).toLowerCase()];
}
