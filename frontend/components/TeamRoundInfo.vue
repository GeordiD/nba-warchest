<script setup lang="ts">
import type { PropType } from 'vue';
import type { ExpandedPick } from '~/utils/types/Pick';

const props = defineProps({
  picks: Object as PropType<ExpandedPick[]>,
});
</script>

<template>
<ul class="list-disc pl-4">
  <li v-for="pick in props.picks" :key="pick.id" class="mb-1">
    <PickInfo :pick="pick" />
    <EditControls 
      :pick="pick"
    />
  </li>
</ul>
</template>