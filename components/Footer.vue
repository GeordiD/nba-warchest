<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
const result = await useFetch('https://api.github.com/repos/GeordiD/nba-warchest/branches/main', {
  method: 'GET',
  responseType: 'json',
})

const updateDateString = computed(() =>
  // @ts-expect-error We don't have the github api typed
  result.data.value.commit.commit.author.date as string);

const formattedUpdateDate = computed(() => {
  const date = new Date(Date.parse(updateDateString.value));
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day}`;
});
</script>

<template>
  <div
    v-if="formattedUpdateDate"
    class="flex flex-row-reverse px-4 py-1 bg-opacity-40 bg-slate-700 text-slate-900"
  >
    <p>
      Last updated {{ formattedUpdateDate }}
    </p>
  </div>
</template>

<style>

</style>
