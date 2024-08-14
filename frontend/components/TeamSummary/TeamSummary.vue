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

const guarenteedFirsts = computed(() => tradabilityResult.value.firsts.picks.filter(x => !x.isConditional));
const guarenteedSeconds = computed(() => tradabilityResult.value.seconds.picks.filter(x => !x.isConditional));

const conditionalFirsts = computed(() => tradabilityResult.value.firsts.picks.filter(x => x.isConditional));
const conditionalSeconds = computed(() => tradabilityResult.value.seconds.picks.filter(x => x.isConditional));
</script>

<template>
  <div class="flex w-full gap-2">
    <SummaryCard
      title="First Round"
      class="flex-grow"
    >
      <div>
        <p>
          <span class="font-semibold">Total Picks:</span> {{ tradabilityResult.firsts.total }}
        </p>
        <p>
          - Guaranteed: {{ guarenteedFirsts.length }}
        </p>
        <p>
          - Conditional: {{ conditionalFirsts.length }}
        </p>
        <p>
          - Swaps: {{ tradabilityResult.firsts.owned.swaps.length }}
        </p>
        <p>
          <span class="font-semibold">Own Picks:</span>
          {{ tradabilityResult.firsts.owned.ownDestiny.length }}/7
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
          - Picks: {{ tradabilityResult.firsts.tradable.total }}
        </p>
        <p>
          - Swaps: {{ tradabilityResult.firsts.swappable.total }}
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
          <span class="font-semibold">Total Picks:</span> {{ tradabilityResult.seconds.total }}
        </p>
        <p>
          - Guaranteed: {{ guarenteedSeconds.length }}
        </p>
        <p>
          - Conditional: {{ conditionalSeconds.length }}
        </p>
        <p>
          - Swaps: {{ tradabilityResult.seconds.owned.swaps.length }}
        </p>
        <p>
          <span class="font-semibold">Own Picks:</span>
          {{ tradabilityResult.seconds.owned.ownDestiny.length }}/7
        </p>
      </div>
    </SummaryCard>
  </div>
</template>
