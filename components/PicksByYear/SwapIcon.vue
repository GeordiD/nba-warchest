<script setup lang="ts">
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
  <div
    class="rounded-tl-lg rounded-br-lg w-5 h-5 absolute top-0 left-0 flex items-center justify-center"
    :class="swapType"
  >
    <Icon
      name="fe:sync"
      class="icon"
    />
  </div>
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
