import { getMetadataForTeam } from '~/data/getAssetMetadataForTeam';

// None of this needs to be reactive, but we are using a store
// to reduce computation "costs"
export const useMetaStore = defineStore('meta', () => {
  const teamMetas: RichTeamMeta[] = TeamAbbrs
    .map(x => getMetadataForTeam(x))
    .map(x => ({ ...x, tradeInfo: getTradeability(x) }));

  const metaPerTeam = computed<Record<string, RichTeamMeta>>(() => TeamAbbrs.reduce((prev, curr) => ({
    ...prev,
    [curr]: teamMetas.find(x => x.info.abbr === curr),
  }), {}));

  const tableData = computed(() => Object.values(metaPerTeam.value)
    .map(x => x as RichTeamMeta)
    .sort(rankAlgo)
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
