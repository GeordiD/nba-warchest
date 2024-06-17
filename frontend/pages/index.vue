<script setup lang="ts">
import type { Team } from '~/utils/types/Team';
import { type ExpandedPick, type Pick } from '~/utils/types/Pick';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');
await pb.admins.authWithPassword('geordi.dosher@gmail.com', 'testing1234');

const teams = (await pb.collection('teams').getFullList<Team>())
  .sort((a,b) => a.fullName.toLowerCase() > b.fullName.toLowerCase() ? 1 : (a.fullName.toLowerCase() < b.fullName.toLowerCase() ? -1 : 0))
const picks = await pb.collection('picks').getFullList<Pick>({
  expand: 'protections'
});

const formattedPicks = computed(() => picks.map(pick => ({
  ...pick,
  originator: teams.find(x => x.id === pick.originator),
  toTeam: teams.find(x => x.id === pick.toTeam),
  protections: pick.expand?.protections?.map(protection => ({
    ...protection,
    toTeam: teams.find(x => x.id === protection.toTeam),
  })) ?? []
} as ExpandedPick)))

</script>

<template>
  <div class="p-4">
    <h1>NBA Warchest</h1>
    <div v-for="team in teams" :key="team.id">
      <TeamInfo 
        :team="team"
        :all-picks="formattedPicks"
        :all-teams="teams"
      />
    </div>
  </div>
</template>