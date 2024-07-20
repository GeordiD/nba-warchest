import type { TeamMeta } from '~/data/TeamMeta';
import { getMetadataForTeam } from '~/data/getAssetMetadataForTeam';

export interface RichTeamMeta extends TeamMeta {
  tradeInfo: ReturnType<typeof getTradability>;
}

// None of this needs to be reactive, but we are using a store
// to reduce computation "costs"
export const useMetaStore = defineStore('meta', () => {
  const teamMetas: RichTeamMeta[] = TeamAbbrs
    .map(x => getMetadataForTeam(x))
    .map(x => ({ ...x, tradeInfo: getTradability(x) }));

  const metaPerTeam = computed<Record<string, RichTeamMeta>>(() => TeamAbbrs.reduce((prev, curr) => ({
    ...prev,
    [curr]: teamMetas.find(x => x.info.abbr === curr),
  }), {}));

  return {
    metaPerTeam,
  };
});
