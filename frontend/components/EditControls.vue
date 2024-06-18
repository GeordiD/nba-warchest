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

const isOpen = ref(false);

</script>

<template>
  <button 
    class=""
    @click="() => { isOpen = !isOpen }"
  >
    Edit
  </button>
  <div v-if="isOpen" class="flex flex-col gap-1 mt-1">
    <AddExtension
      v-if="pick.protections.length"
      :pick="pick"
    />
    <CreateSwap :pick="pick" />
  </div>
</template>