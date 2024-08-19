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
  <div class="border border-gray-700 rounded flex flex-col">
    <div class="rounded-t bg-gray-700 text-white p-2">
      <h2 class="font-semibold text-center">
        {{ title }}
      </h2>
    </div>
    <div class="p-4">
      <slot />
    </div>
  </div>
</template>
