<script setup lang="ts">
import type { Pick } from '~/utils/types/Pick'

const {
  pick,
} = defineProps({
  pick: {
    type: Object as PropType<Pick>,
    required: true,
  },
})

const isOpen = ref(true)
</script>

<template>
  <!-- <button
    class=""
    @click="() => { isOpen = !isOpen }"
  >
    Edit
  </button> -->
  <div
    v-if="isOpen"
    class="flex flex-col gap-1 mt-1"
  >
    <AddExtension
      v-if="pick.protections.length"
      :pick="pick"
    />
    <!-- <CreateSwap :pick="pick" /> -->
  </div>
</template>
