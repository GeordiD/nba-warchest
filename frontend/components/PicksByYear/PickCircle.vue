<script setup lang="ts">
import type { YearMeta, PickDetails, PickSummary } from '~/data/PickMetaTypes';

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

const isTradedAway = computed(() => pickData.summary.isOwn
  && pickData.summary.isTradedAway)

const text = computed(() => pickData.summary.teams?.length === 1
  ? pickData.summary.teams[0]
  : (pickData.summary.teams?.length
      ? pickData.summary.teams?.length
      : ''),
)

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
    <div class="w-4">
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
    </div>

    <div
      class="rounded-full h-10 w-10 bg-green-600 text-white flex items-center justify-center relative"
      :class="[
        isTradedAway ? 'traded-away' : (pickData.summary.isConditional ? 'conditional' : 'owned'),
        { hover: isIdActive },
      ]"
    >
      <p class="text-xs">
        {{ text }}
      </p>
      <PickHover
        v-if="isTarget"
        :pick-data="pickData"
        :meta="meta"
      />
    </div>

    <div class="w-4">
      <Icon
        v-if="pickData.summary.ifNotSettled"
        name="material-symbols:asterisk"
      />
    </div>
  </div>
</template>

<style scoped>
.traded-away {
  @apply bg-gray-700;
}

.owned {
  @apply bg-green-600;
}

.conditional {
  @apply bg-yellow-500 text-black;
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
