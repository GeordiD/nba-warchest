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
  <div class="w-full gap-6 justify-center flex flex-col sm:flex-row">
    <SummaryCard
      title="Available Assets"
      class="flex-grow basis-0"
    >
      <table class="pick-table">
        <thead>
          <tr>
            <th />
            <th>1sts</th>
            <th>2nds</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              Total
            </td>
            <td>
              {{ tradabilityResult.firsts.total }}
            </td>
            <td>
              {{ tradabilityResult.seconds.total }}
            </td>
          </tr>
          <tr>
            <td>
              Guaranteed
            </td>
            <td>
              {{ guarenteedFirsts.length }}
            </td>
            <td>
              {{ guarenteedSeconds.length }}
            </td>
          </tr>
          <tr>
            <td>
              Conditional
            </td>
            <td>
              {{ conditionalFirsts.length }}
            </td>
            <td>
              {{ conditionalSeconds.length }}
            </td>
          </tr>
          <tr>
            <td>
              Own Picks
            </td>
            <td>
              {{ tradabilityResult.firsts.owned.ownDestiny.length }}/7
            </td>
            <td>
              {{ tradabilityResult.seconds.owned.ownDestiny.length }}/7
            </td>
          </tr>
        </tbody>
      </table>
    </SummaryCard>
    <SummaryCard
      title="Tradable Assets"
      class="flex-grow basis-0"
    >
      <div class="flex gap-4 items-center justify-center">
        <div class="flex flex-col gap-2 items-center">
          <div class="flex gap-4">
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
  </div>
</template>

<style scoped>
table {
  width: 100%;
}

td, th {
  padding: 0.25rem;
  text-align: right;
}

td:first-of-type {
  text-align: left;
  /* padding-right: 10rem; */
}
</style>
