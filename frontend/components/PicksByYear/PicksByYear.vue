<script setup lang="ts">
import type { YearMeta, PickSummary } from '~/data/PickMetaTypes';

const {
  picks,
} = defineProps({
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
  <div class="w-full min-h-32 rounded border border-slate-400 p-2 divide-y-2 divide-slate-200 flex flex-col gap-2">
    <div class="flex justify-between items-center">
      <p class="text-lg">
        Picks by Year
      </p>
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
    </div>
    <div class="flex justify-between mx-4 pt-2">
      <div
        v-for="yearInfo in byYear"
        :key="`${yearInfo.year}-${isFirsts ? 1 : 2}`"
        class="flex flex-col-reverse gap-2"
      >
        <div class="font-semibold px-4">
          {{ yearInfo.year }}
        </div>
        <div class="flex-grow flex flex-col-reverse gap-2 mx-auto pr-4">
          <PickCircle
            v-for="(pick, i) in yearInfo.roundData"
            :id="pick.id"
            :key="i"
            :pick-data="pick"
            :meta="picks"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn {
  @apply px-2 py-1 cursor-pointer border border-slate-700;
}

.active {
  @apply bg-slate-700 text-white
}
</style>
