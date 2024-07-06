import type { DraftAssetsMeta } from '~/metadata/DraftAssetsMeta';
import { OkcMeta } from '~/metadata/teams/okc';

export function getAssetMetadataForTeam(abbr: string): DraftAssetsMeta | undefined {
  const metas: Record<string, DraftAssetsMeta> = {
    okc: OkcMeta,
  }

  return metas[abbr.toLowerCase()]
}
