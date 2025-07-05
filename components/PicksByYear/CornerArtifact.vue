<script setup lang="ts">
const {
  direction = 'tl',
} = defineProps<{
  direction: 'tl' | 'tr'
}>();

const classes = {
  tl: 'rounded-tl-lg rounded-br-lg -left-0.5',
  tr: 'rounded-tr-lg rounded-bl-lg -right-0.5',
}

const cls = computed(() => classes[direction]);
</script>

<template>
  <div
    class="w-5 h-5 absolute -top-0.5 flex items-center justify-center"
    :class="[cls]"
  >
    <slot />
  </div>
</template>
