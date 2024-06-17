<script setup lang="ts">
import type { ExpandedPick } from '~/utils/types/Pick';
import PocketBase from 'pocketbase';

const props = defineProps({
  pick: {
    type: Object as PropType<ExpandedPick>,
    required: true,
  }
})

const output = reactive({
  year: 0,
  round: 1,
  protection: 0
})

onMounted(() => {
  output.year = props.pick.year + 1;
  output.round = props.pick.round;
})

async function submit() {
  const pb = new PocketBase('http://127.0.0.1:8090');
  await pb.admins.authWithPassword('geordi.dosher@gmail.com', 'testing1234');

  if (!props.pick.originator) {
    throw Error('no originator');
  }

  const toTeam = props.pick.protections.find(x => x.toTeam.id !== props.pick.originator?.id)?.toTeam;

  if (!toTeam) {
    throw Error('couldnt find toTeam');
  }

  const pickRes = await pb.collection('picks').create({
    year: output.year,
    round: output.round,
    originator: props.pick.originator.id,
    toTeam: output.protection ? undefined : toTeam.id,
    isConditional: true,
  });

  
  if (output.protection > 0) {
    const protectionReqs = [
      {
        rangeMin: 1 + ((output.round - 1) * 30),
        rangeMax: output.protection,
        toTeam: props.pick.originator?.id
      },
      {
        rangeMin: output.protection + 1,
        rangeMax: 30 + ((output.round - 1) * 30),
        toTeam: toTeam.id,
      }
    ].map(protection => pb.collection('protections').create(protection, {
      requestKey: `${protection.rangeMin}-${protection.rangeMax}`,
    }))

    const protectionResponses = await Promise.all(protectionReqs);

    await pb.collection('picks').update(pickRes.id, {
      protections: protectionResponses.map(x => x.id),
    })
  }

  await pb.collection('picks').update(props.pick.id, {
    conveysTo: [...props.pick.conveysTo, pickRes.id],
  });

  isOpen.value = false;
  window.location.reload();
}

const isOpen = ref(false);
</script>

<template>
  <div>
    <button @click="() => isOpen = !isOpen">Add Extension</button>
    <div v-if="isOpen">
      <p>Year: <input class="border" type="number" v-model="output.year" /></p>
      <p>Round: <input class="border" type="number" v-model="output.round" /></p>
      <p>Top X: <input class="border" type="number" v-model="output.protection" /></p>
      <button @click="submit">save</button>
    </div>
  </div>
</template>