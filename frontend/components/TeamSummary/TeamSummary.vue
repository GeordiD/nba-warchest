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

const teamMeta = computed(() => metaStore.metaPerTeam[abbr]);
const tradabilityResult = computed(() => teamMeta.value.tradeInfo);
</script>

<template>
  <div class="flex w-full gap-2">
    <SummaryCard
      title="First Round"
      class="flex-grow"
    >
      <div>
        <p>
          <span class="font-semibold">Total Picks:</span> #
        </p>
        <p>
          - Guaranteed: #
        </p>
        <p>
          - Conditional: #
        </p>
        <p>
          - Swaps: #
        </p>
        <p>
          <span class="font-semibold">Own Picks:</span>
          6/7
        </p>
      </div>
    </SummaryCard>
    <SummaryCard
      title="Tradable Assets"
      class="flex-grow"
    >
      <div>
        <p>
          <span class="font-semibold">Firsts</span>
        </p>
        <p>
          - Picks: {{ tradabilityResult.tradable.total }}
        </p>
        <p>
          - Swaps: {{ tradabilityResult.swappable.total }}
        </p>
        <p>
          <span class="font-semibold">Seconds:</span>
          {{ tradabilityResult.seconds.total }}
        </p>
      </div>
    </SummaryCard>
    <SummaryCard
      title="Second Round"
      class="flex-grow"
    >
      <div>
        <p>
          <span class="font-semibold">Total Picks:</span> #
        </p>
        <p>
          - Guaranteed: #
        </p>
        <p>
          - Conditional: #
        </p>
        <p>
          - Swaps: #
        </p>
        <p>
          <span class="font-semibold">Own Picks:</span>
          6/7
        </p>
      </div>
    </SummaryCard>
  </div>
</template>
