<script setup lang="ts">
import type { CombinedMeta, PickSummary } from '~/data/PicksByYear';

const {
  pickData,
  id,
  meta,
} = defineProps({
  pickData: {
    type: Object as PropType<PickSummary>,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  meta: {
    type: Object as PropType<CombinedMeta[]>,
    required: true,
  },
  isOwn: Boolean,
})

const isTradedAway = computed(() => pickData.isOwn && pickData.isTradedAway)

const text = computed(() => pickData.teams?.length === 1
  ? pickData.teams[0]
  : (pickData.teams?.length
      ? pickData.teams?.length
      : ''),
)

const details = computed(() => {
  const isFirst = id.at(5) === '1';

  const details = meta
    .flatMap(x => isFirst ? x.roundOne : x.roundTwo)
    .find(x => x.id === id)
    ?.details;

  if (!details) {
    return 'Pick details not found';
  }

  return typeof details === 'string' ? details : details.headline;
})

const {
  isIdActive,
  isTarget,
  onMouseOut,
  onMouseOver,
} = useHoverPick(id);
</script>

<template>
  <div
    class="flex items-center cursor-pointer"
    @mouseover="onMouseOver"
    @mouseout="onMouseOut"
  >
    <div class="w-4">
      <Icon
        v-if="pickData.swapType === 'mixed'"
        name="material-symbols:sync-outline"
        class="arrow-mixed"
      />
      <Icon
        v-else-if="pickData.swapType === 'unfavorable'"
        name="material-symbols:arrow-downward-alt"
        class="arrow-unfavorable"
      />
      <Icon
        v-else-if="pickData.swapType === 'favorable'"
        name="material-symbols:arrow-upward-alt"
        class="arrow-favorable"
      />
    </div>

    <div
      class="rounded-full h-10 w-10 bg-green-600 text-white flex items-center justify-center relative"
      :class="[
        isTradedAway ? 'traded-away' : (pickData.isConditional ? 'conditional' : 'owned'),
        { hover: isIdActive },
      ]"
    >
      <p class="text-xs">
        {{ text }}
      </p>
      <div
        v-if="isTarget"
        class="tooltip"
      >
        {{ details }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.tooltip {
  left: 3rem;
  @apply absolute bg-white border border-gray-500 p-2 rounded-sm z-10 text-black w-48;
}

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
