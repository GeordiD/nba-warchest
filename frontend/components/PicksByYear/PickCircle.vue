<script setup lang="ts">
import type { PickData } from '~/data/PicksByYear';

const {
  pickData,
  isOwn,
} = defineProps({
  pickData: {
    type: Object as PropType<PickData>,
    required: true,
  },
  isOwn: Boolean,
})

const isTradedAway = computed(() => isOwn && pickData.isTradedAway)

const text = computed(() => pickData.teams?.length === 1
  ? pickData.teams[0]
  : (pickData.teams?.length
      ? pickData.teams?.length
      : ''),
)
</script>

<template>
  <div class="flex items-center">
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
      class="rounded-full h-10 w-10 bg-green-600 text-white flex items-center justify-center"
      :class="[isTradedAway ? 'traded-away' : (pickData.isConditional ? 'conditional' : 'owned')]"
    >
      <p class="text-xs">
        {{ text }}
      </p>
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
</style>
