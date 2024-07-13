<script setup lang="ts">
// await setupPocketBase()

// const teamsStore = useTeamsStore()
// const pickStore = usePickStore()

// await teamsStore.fetchAllTeams()
// await pickStore.fetchAll();
</script>

<template>
  <div class="p-4">
    <h1>NBA Warchest</h1>
    <div
      v-for="team in TeamAbbrs"
      :key="team"
    >
      <NuxtLink :to="`/teams/${team}`">
        {{ team }}
      </NuxtLink>
    </div>
  </div>
</template>
