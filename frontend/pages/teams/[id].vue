<script setup lang="ts">
const route = useRoute();
const abbr = route.params.id as TeamAbbr;

const meta = computed(() => getMetadataForTeam(abbr))

getTradability(meta.value.picks);
</script>

<template>
  <div class="m-4 mx-8 flex flex-col gap-4">
    <h1>{{ meta.info.fullName }}</h1>
    <PicksByYear :picks="meta.picks" />
    <AllPicks :picks="meta.picks" />
  </div>
</template>
