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
const warchestRanking = computed(() => metaStore.tableData.find(x => x.info.abbr === abbr)?.ranking ?? '??');
</script>

<template>
  <div class="w-full flex gap-3">
    <div class="h-14">
      <TeamLogo
        :abbr="`${abbr}`"
        filled
      />
    </div>
    <div class="flex flex-col h-full justify-center">
      <h1 class="text-xl font-semibold">
        {{ teamMeta.info.fullName }}
      </h1>
      <p class="text-sm font-light">
        War Chest Rank: #{{ warchestRanking }}
      </p>
    </div>
  </div>
</template>
