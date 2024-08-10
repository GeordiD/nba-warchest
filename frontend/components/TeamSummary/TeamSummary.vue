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
const warchestRanking = computed(() => 12);
</script>

<template>
  <div class="w-full flex flex-col gap-4">
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
  </div>
</template>
