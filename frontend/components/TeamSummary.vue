<script setup lang="ts">
const metaStore = useMetaStore();

const {
  abbr,
} = defineProps({
  abbr: {
    type: String,
    required: true,
  },
})

const tradabilityResult = computed(() => metaStore.metaPerTeam[abbr].tradeInfo);
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
      {{ tradabilityResult.seconds.total }}
    </p>
  </div>
</template>
