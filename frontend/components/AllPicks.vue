<script setup lang="ts">
import type { PropType } from 'vue';
import DraftAssetMetaInfo from '~/components/DraftAssetMetaInfo.vue';
import type { YearMeta } from '~/data/PickMetaTypes';

const {
  picks,
} = defineProps({
  picks: {
    type: Object as PropType<YearMeta[]>,
    required: true,
  },
})

const meta = computed(() => picks.map(x => ({
  year: x.year,
  roundOne: x.roundOne.map(x => x.details),
  roundTwo: x.roundTwo.map(x => x.details),
})),
);
</script>

<template>
  <SummaryCard title="Pick Details">
    <div class="flex flex-col gap-6">
      <div
        v-for="group in meta"
        :key="group.year"
        class="flex flex-col gap-2"
      >
        <div class="flex items-center gap-6">
          <!-- <hr class="w-8"> -->
          <p class="font-semibold text-lg text-center">
            {{ group.year }}
          </p>
          <hr class="w-full">
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h3 class="font-semibold">
              Firsts
            </h3>
            <ul class="list-disc pl-4">
              <li
                v-for="(item, index) in group.roundOne"
                :key="index"
              >
                <DraftAssetMetaInfo :item="item" />
              </li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold">
              Seconds
            </h3>
            <ul class="list-disc pl-4">
              <li
                v-for="(item, index) in group.roundTwo"
                :key="index"
              >
                <DraftAssetMetaInfo :item="item" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </SummaryCard>
</template>
