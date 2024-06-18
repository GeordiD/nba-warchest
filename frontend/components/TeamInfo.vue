<script setup lang="ts">
import type { Team } from '~/utils/types/Team';
import type { ExpandedPick, Pick } from '~/utils/types/Pick';

const props = defineProps({
  team: {
    type: Object as PropType<Team>,
    required: true,
  },
  allPicks: {
    type: Array as PropType<ExpandedPick[]>,
    required: true,
  },
})

const teamPicks = computed(() => props.allPicks.filter(pick =>
  pick.originator?.id === props.team.id
  || pick.toTeam?.id === props.team.id
  || pick.protections.find(x => x.toTeam.id === props.team.id)
));

const roundOne = computed(() => teamPicks.value
  .filter(pick => pick.round === 1)
  .sort((a, b) => a.year - b.year)
);

const roundTwo = computed(() => teamPicks.value
  .filter(pick => pick.round === 2)
  .sort((a, b) => a.year - b.year)
);
</script>

<template>
  <div>
    <h2 class="font-semibold">{{ props.team.fullName }}</h2>
    <table>
      <tbody>
        <tr>
          <td class="pr-12 align-top">
            <TeamRoundInfo :picks="roundOne" />
          </td>
          <td class="align-top">
            <TeamRoundInfo :picks="roundTwo" />
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