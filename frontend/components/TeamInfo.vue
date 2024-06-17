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
      <tr>
        <td class="pr-12 align-top">
          <ul class="list-disc pl-4">
            <li v-for="pick in roundOne" :key="pick.id">
              {{ pick.year }}: {{ !!pick.conveysFrom ? '*' : ''}}{{ pick.originator?.abbr }} => {{ pick.toTeam?.abbr }}
              <ul class="list-disc pl-4" v-if="pick.protections?.length">
                <li v-for="protection in pick.protections" :key="protection.id">
                  {{ protection.toTeam.abbr }}: {{ protection.rangeMin }}-{{ protection.rangeMax }}
                </li>
                <AddExtension :pick="pick" />
              </ul> 
            </li>
          </ul>
        </td>
        <td class="align-top">
          <ul class="list-disc pl-4">
            <li v-for="pick in roundTwo" :key="pick.id">
              {{ pick.year }}: {{ !!pick.conveysFrom ? '*' : ''}}{{ pick.originator?.abbr }} => {{ pick.toTeam?.abbr }}
              <ul class="list-disc pl-4" v-if="pick.protections?.length">
                <li v-for="protection in pick.protections" :key="protection.id">
                  {{ protection.toTeam.abbr }}: {{ protection.rangeMin }}-{{ protection.rangeMax }}
                </li>
                <AddExtension :pick="pick" />
              </ul> 
            </li>
          </ul>
        </td>
      </tr>
    </table>
  </div>
</template>