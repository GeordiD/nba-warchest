<script setup lang="ts">
import { getMetadataForTeam } from '~/data/getAssetMetadataForTeam';

const route = useRoute();
const abbr = route.params.id as TeamAbbr;

const meta = computed(() => getMetadataForTeam(abbr))
</script>

<template>
  <div class="m-4 mx-8 flex flex-col gap-4">
    <h1>{{ meta.info.fullName }}</h1>
    <TeamSummary :abbr="abbr" />
    <PicksByYear :picks="meta.picks" />
    <AllPicks :picks="meta.picks" />
  </div>
</template>
