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

const showInfoModal = ref(false);

const teamMeta = computed(() => metaStore.metaPerTeam[abbr]);
const tradeabilityResult = computed(() => teamMeta.value.tradeInfo);

const guarenteedFirsts = computed(() => tradeabilityResult.value.firsts.picks.filter(x => !x.isConditional));
const guarenteedSeconds = computed(() => tradeabilityResult.value.seconds.picks.filter(x => !x.isConditional));

const conditionalFirsts = computed(() => tradeabilityResult.value.firsts.picks.filter(x => x.isConditional));
const conditionalSeconds = computed(() => tradeabilityResult.value.seconds.picks.filter(x => x.isConditional));
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
              {{ tradeabilityResult.firsts.total }}
            </td>
            <td>
              {{ tradeabilityResult.seconds.total }}
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
              {{ tradeabilityResult.firsts.owned.ownDestiny.length }}/7
            </td>
            <td>
              {{ tradeabilityResult.seconds.owned.ownDestiny.length }}/7
            </td>
          </tr>
        </tbody>
      </table>
    </SummaryCard>
    <SummaryCard
      title="Tradeable Assets"
      class="flex-grow basis-0"
    >
      <div class="flex gap-4 items-center justify-center">
        <div class="flex flex-col gap-2 items-center">
          <div class="flex gap-4">
            <TradeablePickBox
              :value="tradeabilityResult.firsts.tradeable.total"
              label="picks"
            />
            <TradeablePickBox
              :value="tradeabilityResult.firsts.swappable.total"
              label="swaps"
            />
          </div>
          <p>
            <span class="font-semibold text-lg">1sts</span>
          </p>
        </div>
        <div class="border-l-2 border-black opacity-20 h-20 rounded-full" />
        <div class="flex flex-col gap-2 items-center">
          <TradeablePickBox
            :value="tradeabilityResult.seconds.total"
            label="picks"
          />
          <p>
            <span class="font-semibold text-lg">2nds</span>
          </p>
        </div>
      </div>
      <template #header-right>
        <Icon
          name="fe:info"
          class="w-5 h-5 cursor-pointer"
          @click="showInfoModal = true"
        />
      </template>
    </SummaryCard>
  </div>
  <Dialog
    v-model:visible="showInfoModal"
    modal
    header="About Tradeability"
    class="w-[30rem]"
    dismissable-mask
  >
    <p class="mb-2">
      When trading first round picks, teams must follow the Stepien rule.
      This requires teams to have at least one first round draft pick in every other draft.
    </p>
    <p class="mb-2">
      NBA War Chest uses this rule to calculate how many of a team's first round assets are actually tradeable when taking into account the Stepien rule.
    </p>
  </Dialog>
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
