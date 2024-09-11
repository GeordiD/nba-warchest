<script setup lang="ts">
import SvgoBasketball from '~/assets/basketball.svg?componentext';
</script>

<template>
  <div class="h-12 w-full bg-gray-700 text-white flex items-center px-4">
    <div class="w-full">
      <a
        class="hover:no-underline flex items-center gap-2"
        href="/"
      >
        <div class="w-6 logo">
          <SvgoBasketball />
        </div>
        NBA War Chest
      </a>
    </div>
  </div>
</template>

<style scoped>
.logo {
  color: #ff9200;
}
</style>
