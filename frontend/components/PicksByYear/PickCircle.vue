<script setup lang="ts">
import type { YearMeta, PickDetails, PickSummary } from '~/data/PickMetaTypes';

const {
  meta,
  pickData,
  relatedAbbr,
} = defineProps({
  relatedAbbr: {
    type: String,
    required: true,
  },
  meta: {
    type: Object as PropType<YearMeta[]>,
    required: true,
  },
  pickData: {
    type: Object as PropType<{
      id: string,
      summary: PickSummary,
      details: string | PickDetails,
    }>,
    required: true,
  },
})

const isTradedAway = computed(() => pickData.summary.isOwn
  && pickData.summary.isTradedAway)

const abbrs = computed(() => {
  if (pickData.summary.isOwn && !pickData.summary.isTradedAway && !pickData.summary.teams?.length) {
    return [relatedAbbr]
  }

  return pickData.summary.teams ?? [];
})

const {
  isIdActive,
  isTarget,
  onMouseOut,
  onMouseOver,
} = useHoverPick(pickData.id);
</script>

<template>
  <div
    class="flex items-center cursor-pointer"
    @mouseover="onMouseOver"
    @mouseout="onMouseOut"
  >
    <!-- <div class="w-4">
      <Icon
        v-if="pickData.summary.swapType === 'mixed'"
        name="material-symbols:sync-outline"
        class="arrow-mixed"
      />
      <Icon
        v-else-if="pickData.summary.swapType === 'unfavorable'"
        name="material-symbols:arrow-downward-alt"
        class="arrow-unfavorable"
      />
      <Icon
        v-else-if="pickData.summary.swapType === 'favorable'"
        name="material-symbols:arrow-upward-alt"
        class="arrow-favorable"
      />
    </div> -->

    <div
      class="rounded-full h-14 w-14 bg-green-600 flex items-center justify-center relative"
      :class="[
        isTradedAway ? 'traded-away' : (pickData.summary.isConditional ? 'conditional' : 'owned'),
        { hover: isIdActive },
      ]"
    >
      <div
        v-if="abbrs.length === 1"
        class="w-10 h-10"
      >
        <TeamLogo
          :abbr="`${abbrs[0]}`"
          filled
        />
      </div>
      <PickHover
        v-if="isTarget"
        :pick-data="pickData"
        :meta="meta"
      />
    </div>

    <!-- <div class="w-4">
      <Icon
        v-if="pickData.summary.ifNotSettled"
        name="material-symbols:asterisk"
      />
    </div> -->
  </div>
</template>

<style scoped>
.traded-away {
  @apply bg-gray-400;
  filter: grayscale(1) opacity(.3);
}

.owned {
  /* @apply bg-green-600; */
  background-color: #CDF3CA;
}

.conditional {
  /* @apply bg-yellow-500 text-black; */
  background-color: #E5DDB4;
  color: black;
}

.arrow-favorable {
  @apply text-green-600;
}

.arrow-unfavorable {
  @apply text-red-700;
}

.arrow-mixed {
  @apply text-black;
}

.hover {
  @apply border border-gray-500 shadow-lg shadow-gray-500;
}
</style>
