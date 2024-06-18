<script setup lang="ts">
import type { ExpandedPick } from '~/utils/types/Pick';

const {
  pick
} = defineProps({
  pick: {
    type: Object as PropType<ExpandedPick>,
    required: true,
  }
});

const isOwn = computed(() => !pick.toTeam && !pick.swaps.length)
</script>

<template>
  <div>
    {{ pick.year }}:
    <span v-if="isOwn">Own</span>
    <span v-else>{{ !!pick.conveysFrom ? '*' : ''}}{{ pick.originator?.abbr }} => {{ pick.toTeam?.abbr }}</span>
    <span v-if="pick.position"> (#{{ pick.position }})</span>
    
    <ul class="list-disc pl-4" v-if="pick.protections?.length">
      <li v-for="protection in pick.protections" :key="protection.id">
        {{ protection.toTeam.abbr }}: {{ protection.rangeMin }}-{{ protection.rangeMax }}
      </li>
    </ul> 
  </div>
</template>