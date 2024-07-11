<script setup lang="ts">
import type { CombinedMeta } from '~/data/PicksByYear';

const {
  picks,
} = defineProps({
  picks: {
    type: Object as PropType<CombinedMeta[]>,
    required: true,
  },
})

const tradabilityResult = computed(() => getTradability(picks));
const totalSeconds = computed(() => picks
  .flatMap(x => x.roundTwo.flatMap(y => y.summary))
  .length,
)
</script>

<template>
  <div>
    <p>
      <span class="font-semibold">Tradable Firsts:</span>
      {{ tradabilityResult.tradable.total }}
    </p>
    <p>
      <span class="font-semibold">Swappable Firsts:</span>
      {{ tradabilityResult.swappable.total }}
    </p>
    <p>
      <span class="font-semibold">Seconds:</span>
      {{ totalSeconds }}
    </p>
  </div>
</template>
