<script setup lang="ts">
const router = useRouter();
const route = useRoute();

const shouldShowBackButton = computed(() => route.path !== '/')
</script>

<template>
  <div class="h-12 w-full bg-slate-700 text-white flex items-center px-2">
    <div
      v-if="shouldShowBackButton"
      class="flex cursor-pointer hover:underline"
      @click="router.push('/')"
    >
      <div class="mr-4">
        <Icon
          name="material-symbols:arrow-back"
          size="1.5rem"
        />
      </div>
      <div class="">
        Teams
      </div>
    </div>
    <div
      class="mx-auto"
      @click="router.push('/')"
    >
      NBA War Chest
    </div>
  </div>
</template>
