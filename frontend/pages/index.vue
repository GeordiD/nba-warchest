<script setup lang="ts">
await setupPocketBase()

const teamsStore = useTeamsStore()
const pickStore = usePickStore()

await teamsStore.fetchAllTeams()
await pickStore.fetchAll();
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
