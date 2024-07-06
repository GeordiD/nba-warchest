<script setup lang="ts">
const {
  teamAbbr,
} = defineProps({
  teamAbbr: {
    type: String,
    required: true,
  },
})

const isFirsts = ref(true);
const byYear = computed(() =>
  getMetadataForTeam(teamAbbr)
    ?.map(x => ({
      year: x.year,
      roundData: isFirsts.value ? x.roundOne.summary : x.roundTwo.summary,
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
        <div class="mx-auto pr-4">
          <PickCircle
            :pick-data="yearInfo.roundData.own"
            :is-own="true"
          />
        </div>
        <div class="flex-grow flex flex-col-reverse gap-2 mx-auto pr-4">
          <PickCircle
            v-for="(pick, i) in yearInfo.roundData.others"
            :key="i"
            :pick-data="pick"
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
