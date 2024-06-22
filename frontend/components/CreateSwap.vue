<script setup lang="ts">
import type { ExpandedPick } from '~/utils/types/Pick'

const teamsStore = useTeamsStore()

const { pick } = defineProps({
  pick: {
    type: Object as PropType<ExpandedPick>,
    required: true,
  },
})

const isOpen = ref(false)
const form = reactive({
  team: '',
})

function createSwap() {
  console.log('form: ', form)
}
</script>

<template>
  <div>
    <button @click="() => isOpen = !isOpen">
      Create Swap
    </button>
    <div
      v-if="isOpen"
      class="mt-1 flex flex-col gap-1"
    >
      <div>
        <label for="team">Team: </label>
        <select
          v-model="form.team"
          name="team"
        >
          <option
            v-for="team in teamsStore.teams"
            :key="team.id"
            :value="team.id"
          >
            {{ team.fullName }}
          </option>
        </select>
      </div>

      <!-- <p>Year: <input class="border" type="number" v-model="output.year" /></p>
      <p>Round: <input class="border" type="number" v-model="output.round" /></p>
      <p>Top X: <input class="border" type="number" v-model="output.protection" /></p> -->
      <button @click="createSwap">
        save
      </button>
    </div>
  </div>
</template>
