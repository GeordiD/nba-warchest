<script setup lang="ts">
const {
  isConditional,
  isTradedAway,
  isMoreFavorable,
  isLessFavorable,
  text,
} = defineProps({
  isConditional: Boolean,
  isTradedAway: Boolean,
  isMoreFavorable: Boolean,
  isLessFavorable: Boolean,
  text: String,
})
</script>

<template>
  <div class="flex items-center">
    <div class="w-4">
      <Icon
        v-if="isMoreFavorable && isLessFavorable"
        name="material-symbols:sync-outline"
        class="arrow-mixed"
      />
      <Icon
        v-else-if="isLessFavorable"
        name="material-symbols:arrow-downward-alt"
        class="arrow-unfavorable"
      />
      <Icon
        v-else-if="isMoreFavorable"
        name="material-symbols:arrow-upward-alt"
        class="arrow-favorable"
      />
    </div>

    <div
      class="rounded-full h-8 w-8 bg-green-600 text-white flex items-center justify-center"
      :class="[isTradedAway ? 'traded-away' : (isConditional ? 'conditional' : 'owned')]"
    >
      <p class="text-xs">
        {{ text ?? '' }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.traded-away {
  @apply bg-gray-700;
}

.owned {
  @apply bg-green-600;
}

.conditional {
  @apply bg-yellow-500 text-black;
}

.arrow-favorable {
  @apply text-green-600;
}

.arrow-unfavorable {
  @apply text-red-700;
}

.arrow-mixed {
  @apply text-black;
}
</style>
