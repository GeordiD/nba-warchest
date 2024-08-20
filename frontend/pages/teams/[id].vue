<script setup lang="ts">
import { getMetadataForTeam } from '~/data/getAssetMetadataForTeam';

const route = useRoute();
const abbr = route.params.id as TeamAbbr;

const meta = computed(() => getMetadataForTeam(abbr))
</script>

<template>
  <div class="m-4 mx-8 flex flex-col gap-6">
    <TeamHeader :abbr="abbr" />
    <PicksByYear
      :abbr="abbr"
      :picks="meta.picks"
    />
    <TeamSummary :abbr="abbr" />
    <AllPicks :picks="meta.picks" />
  </div>
</template>
