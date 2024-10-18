<script setup lang="ts">
// @ts-expect-error todo: fix the imports here
import SvgoBasketball from '~/assets/basketball.svg?componentext';
</script>

<template>
  <div class="h-12 w-full bg-gray-700 text-white flex items-center justify-between px-4 pr-6">
    <a
      class="hover:no-underline flex items-center gap-2"
      href="/"
    >
      <div class="w-6 logo">
        <SvgoBasketball />
      </div>
      NBA War Chest
    </a>
    <div>
      <a href="/about">About</a>
    </div>
  </div>
</template>

<style scoped>
.logo {
  color: #ff9200;
}
</style>
