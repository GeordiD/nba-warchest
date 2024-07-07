<script setup lang="ts">
import DraftAssetMetaInfo from '~/components/DraftAssetMetaInfo.vue';

const {
  teamAbbr,
} = defineProps({
  teamAbbr: {
    type: String,
    required: true,
  },
})

const meta = computed(() => getMetadataForTeam(teamAbbr)
  ?.map(x => ({
    year: x.year,
    roundOne: x.roundOne.map(x => x.details),
    roundTwo: x.roundTwo.map(x => x.details),
  })),
);
</script>

<template>
  <div>
    <div v-if="!!meta">
      <div class="flex flex-col gap-4">
        <div
          v-for="group in meta"
          :key="group.year"
        >
          <p class="font-semibold text-lg">
            {{ group.year }}
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2">
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
    </div>
    <div v-else>
      Invalid Abbr
    </div>
  </div>
</template>
