import type { DraftAssetsMeta } from '~/data/DraftAssetsMeta';
import type { PicksByYear } from '~/data/PicksByYear';
import { OkcByYear, OkcMeta } from '~/data/teams/okc';

interface Thing {
  meta: DraftAssetsMeta,
  byYear: PicksByYear[],
}

const metas: Record<string, Thing> = {
  okc: {
    meta: OkcMeta,
    byYear: OkcByYear,
  },
}

export function getAssetMetadataForTeam(abbr: string): DraftAssetsMeta | undefined {
  return metas[abbr.toLowerCase()].meta;
}

export function getByYearForTeam(abbr: string): PicksByYear[] | undefined {
  return metas[abbr.toLowerCase()].byYear;
}
