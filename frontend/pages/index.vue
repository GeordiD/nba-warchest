<script setup lang="ts">
import { DraftAsset } from '@/utils/DraftAsset';

await setupPocketBase()

const teamsStore = useTeamsStore()
const pickStore = usePickStore()

await teamsStore.fetchAllTeams()
await pickStore.fetchAll();

const draftAssets: Record<string, DraftAsset[]> = {};
teamsStore.teams.forEach(team => draftAssets[team.id] = []);

pickStore.picks.forEach((pick) => {
  draftAssets[pick.originator.id].push(new DraftAsset(pick.originator, pick));
  if (pick.toTeam) {
    draftAssets[pick.toTeam.id].push(new DraftAsset(pick.toTeam, pick));
  }
});
</script>

<template>
  <div class="p-4">
    <h1>NBA Warchest</h1>
    <div
      v-for="team in teamsStore.teams"
      :key="team.id"
    >
      {{ team.abbr }}
    </div>
  </div>
</template>
