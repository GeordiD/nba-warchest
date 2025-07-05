<script setup lang="ts">
import CornerArtifact from '~/components/PicksByYear/CornerArtifact.vue';

const {
  swapType,
} = defineProps({
  swapType: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <CornerArtifact
    direction="tl"
    :class="swapType"
  >
    <Icon
      name="fe:sync"
      class="icon"
    />
  </CornerArtifact>
</template>

<style scoped>
.favorable {
  background-color: #0E624E;
}

.favorable .icon {
  color: #B1FA97;
}

.unfavorable {
  background-color: #C0351B;
}

.unfavorable .icon {
  color: #FDDCDC;
}

.mixed {
  background-color: #B67513;
}

.mixed .icon {
  color: #EEDCB8;
}
</style>
