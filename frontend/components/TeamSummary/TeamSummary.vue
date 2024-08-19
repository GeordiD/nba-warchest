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
  <div class="flex w-full gap-4 justify-center">
    <!-- <SummaryCard
      title="Available Assets"
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
    </SummaryCard> -->
    <SummaryCard
      title="Tradable Assets"
      class=""
    >
      <div class="flex gap-2 items-center">
        <div class="flex flex-col gap-2 items-center">
          <div class="flex gap-2">
            <TradablePickBox
              :value="tradabilityResult.firsts.tradable.total"
              label="picks"
            />
            <TradablePickBox
              :value="tradabilityResult.firsts.swappable.total"
              label="swaps"
            />
          </div>
          <p>
            <span class="font-semibold text-lg">1sts</span>
          </p>
        </div>
        <div class="border-l-2 border-black opacity-20 h-20 rounded-full" />
        <div class="flex flex-col gap-2 items-center">
          <TradablePickBox
            :value="tradabilityResult.seconds.total"
            label="picks"
          />
          <p>
            <span class="font-semibold text-lg">2nds</span>
          </p>
        </div>
      </div>
    </SummaryCard>
    <!-- <SummaryCard
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
    </SummaryCard> -->
  </div>
</template>
