import type { Pick, PickDto } from '~/utils/types/Pick'
import type { Team } from '~/utils/types/Team'

const getTeamById = (id?: string): Team => {
  const teamsStore = useTeamsStore();

  return teamsStore.teams.find(x => x.id === id)!
};

export const usePickStore = defineStore('picks', () => {
  const data = reactive<{
    picks: PickDto[],
    isFetching: boolean,
  }>({
    picks: [],
    isFetching: false,
  })

  async function fetchAll() {
    data.isFetching = true;

    const pb = usePocketBase()

    data.picks = await pb.collection('picks').getFullList<PickDto>({
      expand: 'protections,swaps,swaps.protections,swaps.picks',
    })

    data.isFetching = false;
  }

  const picks = computed<Pick[]>(() => data.picks.map<Pick>(pick => ({
    ...pick,
    originator: getTeamById(pick.originator),
    toTeam: getTeamById(pick.toTeam),
    protections: pick.expand?.protections?.map(protection => ({
      ...protection,
      toTeam: getTeamById(protection.toTeam),
    })) ?? [],
    swaps: pick.expand?.swaps?.map(swap => ({
      year: swap.year,
      round: swap.round,
      picks: swap.expand.picks.map(swappedPick => ({
        ...swappedPick,
        originator: getTeamById(swappedPick.originator),
      })),
      bestTo: getTeamById(swap.bestTo),
      worstTo: getTeamById(swap.worstTo),
      remainderTo: getTeamById(swap.remainderTo),
      protections: swap.expand?.protections?.map(protection => ({
        ...protection,
        toTeam: getTeamById(protection.toTeam),
      })) ?? [],
    })) ?? [],
  })))

  async function fetchIfNecessary() {
    if (!picks.value.length && !data.isFetching) {
      fetchAll();
    }
  }

  return {
    fetchAll,
    fetchIfNecessary,
    picks,
  }
})
