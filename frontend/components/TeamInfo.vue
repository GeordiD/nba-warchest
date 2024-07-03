<script setup lang="ts">
import type { DraftAsset } from '#imports';
import type { Team } from '~/utils/types/Team'

const props = defineProps({
  team: {
    type: Object as PropType<Team>,
    required: true,
  },
})

const teamInfoStore = useTeamInfoStore(props.team)();

const roundOne = computed(() => teamInfoStore.roundOneAssets.toSorted((a, b) => a.year - b.year))
const roundTwo = computed(() => teamInfoStore.roundTwoAssets.toSorted((a, b) => a.year - b.year))
</script>

<template>
  <div>
    <h2 class="font-semibold text-lg">
      {{ props.team.fullName }}
    </h2>

    <h3 class="font-semibold">
      Stats:
    </h3>

    <p>
      Available: {{ teamInfoStore.availableAssetsRoundOne.length }}
    </p>
    <p>
      Tradable: {{ teamInfoStore.tradableRoundOnePicks.length }} (+{{ teamInfoStore.tradableRoundOneSwaps.length }})
    </p>

    <h3 class="font-semibold">
      Picks:
    </h3>
    <table>
      <tbody>
        <tr>
          <td class="pr-12 align-top">
            <TeamRoundInfo :assets="roundOne" />
          </td>
          <td class="align-top">
            <TeamRoundInfo :assets="roundTwo" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
button {
  @apply px-1 bg-slate-600 rounded text-white
}
</style>
