<script setup lang="ts">
import type { PickMeta } from '~/metadata/DraftAssetsMeta';

const {
  item,
} = defineProps({
  item: {
    type: Object as PropType<string | PickMeta>,
    required: true,
  },
})

const isString = computed(() => typeof item === 'string');
</script>

<template>
  <li>
    <span v-if="isString">
      {{ item }}
    </span>
    <span v-else>
      {{ (item as PickMeta).headline }}
    </span>

    <ul
      v-if="!isString"
      class="list-disc pl-4"
    >
      <li
        v-for="(line, index) in (item as PickMeta).extra"
        :key="index"
      >
        <span v-if="!Array.isArray(line)">{{ line }}</span>

        <span v-else>{{ line[0] }}</span>
        <ul
          v-if="Array.isArray(line)"
          class="list-disc pl-4"
        >
          <li
            v-for="(subLine, index2) in line.slice(1)"
            :key="index2"
          >
            {{ subLine }}
          </li>
        </ul>
      </li>
    </ul>
  </li>
</template>
