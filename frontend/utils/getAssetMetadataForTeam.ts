import type { CombinedMeta } from '~/data/PicksByYear';
import { OkcCombinedMeta } from '~/data/teams/okc';

const metas: Record<string, CombinedMeta[]> = {
  okc: OkcCombinedMeta,
}

export function getMetadataForTeam(abbr: string): CombinedMeta[] | undefined {
  return metas[abbr]
}
