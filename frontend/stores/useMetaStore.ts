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

  const tableData = computed(() => Object.values(metaPerTeam.value)
    .map(x => x as RichTeamMeta)
    .sort((a, b) => {
      // Trades > Swaps > Seconds (TBD)
      const tradeDiff = b.tradeInfo.tradable.total - a.tradeInfo.tradable.total;
      const swapDiff = b.tradeInfo.swappable.total - a.tradeInfo.swappable.total;
      const secondDiff = b.tradeInfo.seconds.total - a.tradeInfo.seconds.total;

      return tradeDiff * 10000 + swapDiff * 100 + secondDiff;
    })
    .map((x, i) => ({
      ...x,
      ranking: i + 1,
    })),
  )

  return {
    metaPerTeam,
    tableData,
  };
});
