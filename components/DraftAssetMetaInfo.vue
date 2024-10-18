<script setup lang="ts">
import type { PickDetails } from '~/data/PickMetaTypes';

const {
  item,
} = defineProps({
  item: {
    type: [String, Object],
    required: true,
  },
})

const isString = computed(() => typeof item === 'string');
const metaObj = computed(() => item as PickDetails);

const getHtmlWithTeamLinks = (value: string) => {
  const teamAbbrRegex = /(ATL|BOS|BKN|CHA|CHI|CLE|DAL|DEN|DET|GSW|HOU|IND|LAC|LAL|MEM|MIA|MIL|MIN|NOP|NYK|OKC|ORL|PHI|PHX|POR|SAC|SAS|TOR|UTA|WAS)/g;

  const newVal = value.replaceAll(teamAbbrRegex, '<a href="/teams/$1">$1</a>');

  return newVal;
}
</script>

<template>
  <!-- eslint-disable vue/no-v-html -->
  <li>
    <span
      v-if="isString"
      v-html="getHtmlWithTeamLinks(item as string)"
    />
    <span
      v-else
      v-html="getHtmlWithTeamLinks((item as PickDetails).headline)"
    />

    <ul
      v-if="!isString"
      class="list-disc pl-4"
    >
      <li
        v-for="(line, index) in metaObj.extra"
        :key="index"
      >
        <span
          v-if="!Array.isArray(line)"
          v-html="getHtmlWithTeamLinks(line)"
        />

        <span
          v-else
          v-html="getHtmlWithTeamLinks(line[0])"
        />
        <ul
          v-if="Array.isArray(line)"
          class="list-disc pl-4"
        >
          <li
            v-for="(subLine, index2) in line.slice(1)"
            :key="index2"
            v-html="getHtmlWithTeamLinks(subLine)"
          />
        </ul>
      </li>
    </ul>
  </li>
</template>
