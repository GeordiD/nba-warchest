<script setup lang="ts">
const {
  // primaryColor,
  title,
} = defineProps({
  primaryColor: {
    type: String,
    default: '#222',
  },
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="border border-gray-400 rounded flex flex-col divide-y-2 px-4">
    <div class="rounded-t py-2 flex justify-between items-center">
      <h2 class="font-semibold">
        {{ title }}
      </h2>
      <slot name="header-right" />
    </div>
    <div class="py-4">
      <slot />
    </div>
  </div>
</template>
