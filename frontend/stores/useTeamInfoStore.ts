import type { Team } from '~/utils/types/Team';

export const useTeamInfoStore = (team: Team) => {
  return defineStore(`${team.abbr}-info`, () => {
    const pickStore = usePickStore();

    const relatedAssets = computed(() => pickStore.picks
      .filter(pick =>
        pick.originator.id === team.id
        || pick.toTeam?.id === team.id,
      ).map(pick => new DraftAsset(team, pick)),
    )

    const roundOneAssets = computed(() => relatedAssets.value.filter(asset => asset.round === 1));
    const roundTwoAssets = computed(() => relatedAssets.value.filter(asset => asset.round === 2));

    const availableAssets = computed(() => relatedAssets.value.filter(asset =>
      asset.isOwnedBySelf(),
    ))

    const tradableRoundOnePicks = computed(() => []);
    const tradableRoundOneSwaps = computed(() => []);

    return {
      assets: relatedAssets,

      availableAssets,

      roundOneAssets,
      availableAssetsRoundOne: computed(() => availableAssets.value.filter(x => x.round === 1)),
      tradableRoundOnePicks,
      tradableRoundOneSwaps,

      roundTwoAssets,
    }
  })
}
