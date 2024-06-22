<script setup lang="ts">
import type { ExpandedPick } from '~/utils/types/Pick';

const pickStore = usePickStore();

const {
  pick,
} = defineProps({
  pick: {
    type: Object as PropType<ExpandedPick>,
    required: true,
  },
})

const getOtherTeamsFromPickList = (pickIds: string[]) => {
  return pickStore.picks.filter(x => pickIds.includes(x.id) && x.id !== pick.id)
    .map(x => x.originator.abbr)
}

const firstSwap = computed(() => {
  if (pick.swaps.length === 1) {
    return {
      ...pick.swaps[0],
      otherTeams: getOtherTeamsFromPickList(pick.swaps[0].picks),
    }
  }
  return undefined;
})
</script>

<template>
  <span>
    <span v-if="firstSwap?.bestTo.id === pick.originator.id">Best of Own / {{ firstSwap.otherTeams.join(' / ') }}</span>
    <span v-else>Worst of Own / {{ firstSwap?.bestTo.abbr }}</span>
  </span>

  <div v-if="firstSwap?.protections?.length">
    <ul
      class="list-disc pl-4"
    >
      <li
        v-for="protection in firstSwap.protections"
        :key="protection.id"
      >
        {{ protection.toTeam.abbr }}: {{ protection.rangeMin }}-{{ protection.rangeMax }}
      </li>
    </ul>
  </div>
</template>
