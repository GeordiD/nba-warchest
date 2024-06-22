import { useSwapStore } from '~/stores/useSwapStore';
import type { Team } from '~/utils/types/Team';

export const useTeamInfoStore = (team: Team) => {
  return defineStore(`${team.abbr}-info`, () => {
    const pickStore = usePickStore();
    const swapStore = useSwapStore();

    const relatedPicks = computed(() => pickStore.picks.filter(pick =>
      pick.originator.id === team.id
      || pick.toTeam?.id === team.id,
    ),
    )

    const relatedSwaps = swapStore.swaps.filter(swap =>
      swap.bestTo?.id === team.id
      || swap.worstTo?.id == team.id
      || swap.remainderTo?.id === team.id
      || swap.picks.some(pick => relatedPicks.value.map(x => x.id).includes(pick)),
    )

    const roundOnePicks = computed(() => relatedPicks.value.filter(pick => pick.round === 1));
    const roundTwoPicks = computed(() => relatedPicks.value.filter(pick => pick.round === 2));

    const availablePicks = computed(() => relatedPicks.value.filter(pick =>
      // own pick, not traded
      (pick.originator.id === team.id && !pick.toTeam)
      // traded to this team
      || pick.toTeam?.id === team.id,
    ))

    return {
      picks: relatedPicks,
      roundOnePicks,
      roundTwoPicks,
      availablePicks,
    }
  })
}
