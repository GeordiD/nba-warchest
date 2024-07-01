<script setup lang="ts">
import type { PropType } from 'vue'
import type { DraftAsset } from '@/utils/DraftAsset';

const props = defineProps({
  assets: Object as PropType<DraftAsset[]>,
})
</script>

<template>
  <ul class="list-disc pl-4">
    <li
      v-for="asset in props.assets"
      :key="asset.id"
      class="mb-1"
    >
      <PickInfo :asset="asset" />
      <EditControls
        :pick="asset.pick"
      />
    </li>
  </ul>
</template>
