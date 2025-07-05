<script setup lang="ts">
const props = defineProps({
  protection: {
    type: String,
    required: true,
  },
  isConditional: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div
    class="rounded-bl-lg rounded-tr-lg w-5 h-5 absolute -top-0.5 -right-0.5 flex items-center justify-center text-xs font-semibold z-50 text-white"
    :class="[
      isConditional ? 'protection-conditional-bg' : 'protection-guaranteed-bg',
    ]"
  >
    {{ props.protection }}
  </div>
</template>

<style scoped>
.protection-conditional-bg {
  background-color: #b67513;
}

.protection-guaranteed-bg {
  background-color: #0e624e;
}
</style>
