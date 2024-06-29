<script setup lang="ts">
import type { PropType } from 'vue'
import type { Pick } from '~/utils/types/Pick'

const props = defineProps({
  picks: Object as PropType<Pick[]>,
})
</script>

<template>
  <ul class="list-disc pl-4">
    <li
      v-for="pick in props.picks"
      :key="pick.id"
      class="mb-1"
    >
      <PickInfo :pick="pick" />
      <EditControls
        :pick="pick"
      />
    </li>
  </ul>
</template>
