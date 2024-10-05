import { getMetadataForTeam } from '~/data/getAssetMetadataForTeam';

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
    .sort(rankAlgo)
    .map((x) => {
      const data = getData(x)
      const s = score(data)
      console.log(`${x.info.abbr}: ${s} (${data.guaranteed_firsts}, ${data.conditional_firsts}, ${data.swaps}, ${data.seconds})`)
      return x;
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
