<script setup lang="ts">
import PocketBase from 'pocketbase'
import type { ExpandedPick } from '~/utils/types/Pick'

const props = defineProps({
  pick: {
    type: Object as PropType<ExpandedPick>,
    required: true,
  },
})

const output = reactive({
  year: 0,
  round: 1,
  protection: props.pick.protections[0].rangeMax,
})

onMounted(() => {
  output.year = props.pick.year + 1
  output.round = props.pick.round
})

async function submit() {
  const pb = new PocketBase('http://127.0.0.1:8090')
  await pb.admins.authWithPassword('geordi.dosher@gmail.com', 'testing1234')

  if (!props.pick.originator) {
    throw Error('no originator')
  }

  const toTeam = props.pick.protections.find(x => x.toTeam.id !== props.pick.originator?.id)?.toTeam

  if (!toTeam) {
    throw Error('couldnt find toTeam')
  }

  // const pickRes = await pb.collection('picks').create({
  //   year: output.year,
  //   round: output.round,
  //   originator: props.pick.originator.id,
  //   toTeam: output.protection ? undefined : toTeam.id,
  //   isConditional: true,
  // })

  const getPickId = (year: number, round: number, abbr: string) => `${year}x${round}x${abbr}xxxxx`;

  const updatedPickId = getPickId(output.year, output.round, props.pick.originator.abbr);

  if (output.protection > 0) {
    const protectionReqs = [
      {
        rangeMin: 1 + ((output.round - 1) * 30),
        rangeMax: output.protection,
        toTeam: props.pick.originator?.id,
      },
      {
        rangeMin: output.protection + 1,
        rangeMax: 30 + ((output.round - 1) * 30),
        toTeam: toTeam.id,
      },
    ].map(protection => pb.collection('protections').create(protection, {
      requestKey: `${protection.rangeMin}-${protection.rangeMax}`,
    }))

    const protectionResponses = await Promise.all(protectionReqs)

    await pb.collection('picks').update(updatedPickId, {
      protections: protectionResponses.map(x => x.id),
      toTeam: toTeam.id,
      conveysFrom: props.pick.id,
    })
  } else {
    await pb.collection('picks').update(updatedPickId, {
      toTeam: toTeam.id,
      conveysFrom: props.pick.id,
    })
  }

  await pb.collection('picks').update(props.pick.id, {
    conveysTo: [...props.pick.conveysTo, updatedPickId],
  })

  isOpen.value = false
  window.location.reload()
}

const isOpen = ref(false)
</script>

<template>
  <div>
    <button @click="() => isOpen = !isOpen">
      Add Extension
    </button>
    <div v-if="isOpen">
      <p>
        Year: <input
          v-model="output.year"
          class="border"
          type="number"
        >
      </p>
      <p>
        Round: <input
          v-model="output.round"
          class="border"
          type="number"
        >
      </p>
      <p>
        Top X: <input
          v-model="output.protection"
          class="border"
          type="number"
        >
      </p>
      <button @click="submit">
        save
      </button>
    </div>
  </div>
</template>
