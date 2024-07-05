import type { Team } from '~/utils/types/Team';
import { getTradeablePicks } from '~/utils/tradeable';
import { DraftAsset } from '#imports';

const sortOwnToTop = (a: DraftAsset, b: DraftAsset) => {
  if (a.isOwn()) return -1;
  if (b.isOwn()) return 1;
  return 0;
};

export const useTeamInfoStore = (team: Team) => {
  return defineStore(`${team.abbr}-info`, () => {
    const pickStore = usePickStore();

    const relatedAssets = computed(() => pickStore.picks
      .filter(pick =>
        pick.originator.id === team.id
        || pick.toTeam?.id === team.id,
      ).map(pick => new DraftAsset(team, pick)),
    )

    const roundOneAssets = computed(() => relatedAssets.value
      .filter(asset => asset.round === 1)
      .sort(sortOwnToTop),
    );
    const roundTwoAssets = computed(() => relatedAssets.value
      .filter(asset => asset.round === 2)
      .sort(sortOwnToTop),
    );

    const availableAssets = computed(() => relatedAssets.value.filter(asset =>
      asset.isOwnedBySelf(),
    ))
    const availableAssetsRoundOne = computed(() => availableAssets.value.filter(x => x.round === 1));

    const tradableRoundOnePicks = computed(() => getTradeablePicks(availableAssetsRoundOne.value));
    const tradableRoundOneSwaps = computed(() => []);

    return {
      assets: relatedAssets,

      availableAssets,

      roundOneAssets,
      availableAssetsRoundOne,
      tradableRoundOnePicks,
      tradableRoundOneSwaps,

      roundTwoAssets,
      availableAssetsRoundTwo: computed(() => availableAssets.value.filter(x => x.round === 2)),
    }
  })
}
