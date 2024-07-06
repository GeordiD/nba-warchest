<script setup lang="ts">
const route = useRoute();
const abbr = route.params.id;

// const teamStore = useTeamsStore();
// await teamStore.fetchIfNecessary();

// const team = computed(() => teamStore.teams.find(x =>
//   x.abbr.toLowerCase() === (route.params.id as string).toLowerCase()),
// )
</script>

<template>
  <div class="m-4 mx-8 flex flex-col gap-4">
    <!-- <h1>{{ team?.fullName }}</h1> -->
    <PicksByYear :team-abbr="abbr" />
    <AllPicks :team-abbr="abbr" />
  </div>
</template>
