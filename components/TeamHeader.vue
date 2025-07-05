<script setup lang="ts">
import Dialog from 'primevue/dialog';

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
const warchestRanking = computed(() => metaStore.tableData.find(x => x.info.abbr === abbr)?.ranking ?? '??');

const showRankModal = ref(false);
</script>

<template>
  <div class="w-full flex">
    <div class="flex gap-4">
      <div class="h-20">
        <TeamLogo
          :abbr="`${abbr}`"
        />
      </div>
      <div class="flex flex-col h-full justify-center gap-1">
        <h1 class="text-2xl font-semibold">
          {{ teamMeta.info.fullName }}
        </h1>
        <div class="flex items-center gap-2">
          <p class="font-light">
            War Chest Rank: #{{ warchestRanking }}
          </p>
          <Icon
            name="fe:info"
            class="w-5 h-5 cursor-pointer"
            @click="showRankModal = true"
          />
        </div>
      </div>
    </div>
  </div>

  <Dialog
    v-model:visible="showRankModal"
    modal
    header="About Ranking"
    class="w-[30rem]"
    dismissable-mask
  >
    <p>
      The NBA War Chest ranking is derived from the following:
    </p>

    <ol class="list-decimal ml-8 mt-4">
      <li>Tradeable, guaranteed first round picks</li>
      <li>Tradeable, conditional first round picks</li>
      <ul class="list-disc ml-4">
        <li>2 conditional picks = 1 guaranteed pick</li>
      </ul>
      <li>Available first round pick swaps</li>
      <li>Available second round picks</li>
    </ol>
  </Dialog>
</template>
