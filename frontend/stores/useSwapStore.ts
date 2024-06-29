import type { Swap, SwapDto } from '~/utils/types/Pick';
import type { Team } from '~/utils/types/Team'

const getTeamById = (id?: string): Team | undefined => {
  const teamsStore = useTeamsStore();

  if (!id) return undefined;

  return teamsStore.teams.find(x => x.id === id)!
};

export const useSwapStore = defineStore('swaps', () => {
  const data = reactive<{
    swaps: SwapDto[]
  }>({ swaps: [] })

  async function fetchAll() {
    const pb = usePocketBase()

    data.swaps = await pb.collection('swaps').getFullList<SwapDto>({
      expand: 'protections',
    })
  }

  const swaps = computed<Swap[]>(() => data.swaps.map<Swap>(swap => ({
    picks: swap.picks,
    bestTo: getTeamById(swap.bestTo),
    worstTo: getTeamById(swap.worstTo),
    remainderTo: getTeamById(swap.remainderTo),
    protections: swap.expand?.protections?.map(protection => ({
      ...protection,
      toTeam: getTeamById(protection.toTeam)!,
    })) ?? [],
  })))

  return {
    fetchAll,
    swaps,
  }
})
