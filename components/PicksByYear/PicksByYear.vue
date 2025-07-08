<script setup lang="ts">
import type { PickSummary, YearMeta } from '~/data/PickMetaTypes';

const {
  abbr,
  picks,
} = defineProps({
  abbr: {
    type: String,
    required: true,
  },
  picks: {
    type: Object as PropType<YearMeta[]>,
    required: true,
  },
})

const isFirsts = ref(true);
const byYear = computed(() =>
  picks.map(x => ({
    year: x.year,
    roundData: (isFirsts.value ? x.roundOne : x.roundTwo)
      .flatMap((y) => {
        return Array.isArray(y.summary)
          ? y.summary.map(z => ({ ...y, summary: z as PickSummary }))
          : { ...y, summary: y.summary as PickSummary }
      }),
  })),
);
</script>

<template>
  <SummaryCard title="Picks By Year">
    <template #header-right>
      <div class="flex gap-2">
        <button
          class="btn"
          :class="{ active: isFirsts }"
          @click="isFirsts = true"
        >
          Firsts
        </button>
        <button
          class="btn"
          :class="{ active: !isFirsts }"
          @click="isFirsts = false"
        >
          Seconds
        </button>
      </div>
    </template>

    <div class="flex flex-col gap-4 pt-2 sm:flex-row sm:justify-between">
      <div
        v-for="yearInfo in byYear"
        :key="`${yearInfo.year}-${isFirsts ? 1 : 2}`"
        class="flex items-center sm:flex-col-reverse"
      >
        <div class="font-semibold mr-2">
          {{ yearInfo.year }}
        </div>
        <div class="flex-grow flex flex-wrap gap-1 sm:flex-nowrap sm:flex-col-reverse">
          <PickCircle
            v-for="(pick, i) in yearInfo.roundData"
            :key="i"
            :pick-data="pick"
            :related-abbr="abbr"
            :year="yearInfo.year"
          />
        </div>
      </div>
    </div>
  </SummaryCard>
</template>

<style scoped>
.btn {
  @apply px-2 py-1 cursor-pointer border border-slate-700 rounded;
}

.active {
  @apply bg-slate-700 text-white
}
</style>
