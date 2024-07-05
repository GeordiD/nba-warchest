import type { Team } from '~/utils/types/Team'

export const useTeamsStore = defineStore('teams', () => {
  const data = reactive<{
    teams: Team[]
  }>({ teams: [] })

  async function fetchAllTeams() {
    const pb = usePocketBase()

    const response = await pb.collection('teams').getFullList<Team>()
    data.teams = response
      .sort((a, b) => a.fullName.toLowerCase() > b.fullName.toLowerCase()
        ? 1
        : (a.fullName.toLowerCase() < b.fullName.toLowerCase() ? -1 : 0))
      .map(x => ({
        ...x,
        fullName: `${x.fullName}`,
      }))
  }

  async function fetchIfNecessary() {
    if (!data.teams.length) {
      await fetchAllTeams();
    }
  }

  const teams = computed(() => data.teams)

  return {
    fetchAllTeams,
    fetchIfNecessary,
    teams,
  }
})
