<script setup lang="ts">
import type { PickSummary, PickDetails, YearMeta } from '~/data/PickMetaTypes';

const {
  pickData,
  meta,
} = defineProps({
  pickData: {
    type: Object as PropType<{
      id: string,
      summary: PickSummary,
      details: string | PickDetails,
    }>,
    required: true,
  },
  meta: {
    type: Object as PropType<YearMeta[]>,
    required: true,
  },
  isOwn: Boolean,
})

const details = computed<string>(() => {
  const isFirst = pickData.id.at(5) === '1';

  if (pickData.summary.desc) {
    return pickData.summary.desc;
  }

  const details = meta
    .flatMap(x => isFirst ? x.roundOne : x.roundTwo)
    .find(x => x.id === pickData.id)
    ?.details

  if (!details) {
    return 'Pick details not found';
  }

  return typeof details === 'string' ? details : details.headline;
})
</script>

<template>
  <div
    class="tooltip"
  >
    <p>
      {{ details }}
    </p>
    <!-- IMPORTANT - ifNotSettled is not up to date anymore -->
    <p v-if="pickData.summary.ifNotSettled">
      If not settled: {{ pickData.summary.ifNotSettled.result }}
    </p>
  </div>
</template>

<style scoped>
.tooltip {
  left: 4rem;
  @apply absolute bg-white border border-gray-500 p-2 rounded-sm z-50 text-black w-48;
}
</style>
