<script setup lang="ts">
const {
  primaryColor,
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
  <div class="rounded border">
    <div class="bg-slate-900 text-white rounded-t p-2">
      <h2 class="font-semibold text-center">
        {{ title }}
      </h2>
    </div>
    <div class="p-2">
      <slot />
    </div>
  </div>
</template>
