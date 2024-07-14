<script setup lang="ts">
import type { YearMeta } from '~/data/PickMetaTypes';

const {
  picks,
} = defineProps({
  picks: {
    type: Object as PropType<YearMeta[]>,
    required: true,
  },
})

const tradabilityResult = computed(() => getTradability(picks));
const totalSeconds = computed(() => picks
  .flatMap(x => x.roundTwo.flatMap(y => y.summary))
  .filter(x => !x.isTradedAway)
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
