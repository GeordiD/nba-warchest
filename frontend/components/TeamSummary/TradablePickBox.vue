<script setup lang="ts">
const {
  value,
  label,
} = defineProps({
  value: {
    type: Number,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="flex flex-col items-center justify-center bg-green-700 text-white rounded-lg h-20 w-20">
    <p class="text-5xl font-bold leading-none">
      {{ value }}
    </p>
    <p class="font-medium">
      {{ label }}
    </p>
  </div>
</template>
