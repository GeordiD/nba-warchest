import type { ExpandedPick, Pick } from '~/utils/types/Pick'
import type { Team } from '~/utils/types/Team'

const getTeamById = (id?: string): Team => {
  const teamsStore = useTeamsStore();

  return teamsStore.teams.find(x => x.id === id)!
};

export const usePickStore = defineStore('picks', () => {
  const data = reactive<{
    picks: Pick[]
  }>({ picks: [] })

  async function fetchAll() {
    const pb = usePocketBase()

    data.picks = await pb.collection('picks').getFullList<Pick>({
      expand: 'protections,swaps,swaps.protections',
    })
  }

  const picks = computed<ExpandedPick[]>(() => data.picks.map<ExpandedPick>(pick => ({
    ...pick,
    originator: getTeamById(pick.originator),
    toTeam: getTeamById(pick.toTeam),
    protections: pick.expand?.protections?.map(protection => ({
      ...protection,
      toTeam: getTeamById(protection.toTeam),
    })) ?? [],
    swaps: pick.expand?.swaps?.map(swap => ({
      bestTo: getTeamById(swap.bestTo),
      worstTo: getTeamById(swap.worstTo),
      remainderTo: getTeamById(swap.remainderTo),
      picks: swap.picks,
      protections: swap.expand?.protections?.map(protection => ({
        ...protection,
        toTeam: getTeamById(protection.toTeam),
      })) ?? [],
    })) ?? [],
  })))

  return {
    fetchAll,
    picks,
  }
})
