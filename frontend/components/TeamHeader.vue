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
        <p class="font-light">
          War Chest Rank: #{{ warchestRanking }}
        </p>
      </div>
    </div>
  </div>
</template>
