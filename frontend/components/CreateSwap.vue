<script setup lang="ts">
import type { ExpandedPick } from '~/utils/types/Pick';

const { pick } = defineProps({
  pick: Object as PropType<ExpandedPick>,
})

const isOpen = ref(false);
const form = reactive({});

function createSwap() {
  console.log('form: ', form);
}
</script>

<template>
  <div>
    <button @click="() => isOpen = !isOpen">Create Swap</button>
    <div v-if="isOpen" class="mt-1">
      <!-- <p>Year: <input class="border" type="number" v-model="output.year" /></p>
      <p>Round: <input class="border" type="number" v-model="output.round" /></p>
      <p>Top X: <input class="border" type="number" v-model="output.protection" /></p> -->
      <button @click="createSwap">save</button>
    </div>
  </div>
</template>