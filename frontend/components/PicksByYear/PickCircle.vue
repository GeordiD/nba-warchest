<script setup lang="ts">
import type { YearMeta, PickDetails, PickSummary } from '~/data/PickMetaTypes';

const {
  meta,
  pickData,
  relatedAbbr,
} = defineProps({
  relatedAbbr: {
    type: String,
    required: true,
  },
  meta: {
    type: Object as PropType<YearMeta[]>,
    required: true,
  },
  pickData: {
    type: Object as PropType<{
      id: string,
      summary: PickSummary,
      details: string | PickDetails,
    }>,
    required: true,
  },
})

const isTradedAway = computed(() => pickData.summary.isOwn
  && pickData.summary.isTradedAway)

const abbrs = computed(() => {
  const summary = pickData.summary;
  const teams = summary.teams ?? [];

  if (summary.isOwn && !summary.isTradedAway && !teams.length) {
    return [relatedAbbr]
  }

  if (summary.swapType) {
    return [
      relatedAbbr,
      ...teams,
    ]
  }

  return teams;
})

const {
  isIdActive,
  isTarget,
  onMouseOut,
  onMouseOver,
} = useHoverPick(pickData.id);
</script>

<template>
  <div
    class="flex items-center cursor-pointer relative pick-circle"
    @mouseover="onMouseOver"
    @mouseout="onMouseOut"
  >
    <!-- <div class="w-4">
      <Icon
        v-if="pickData.summary.swapType === 'mixed'"
        name="material-symbols:sync-outline"
        class="arrow-mixed"
      />
      <Icon
        v-else-if="pickData.summary.swapType === 'unfavorable'"
        name="material-symbols:arrow-downward-alt"
        class="arrow-unfavorable"
      />
      <Icon
        v-else-if="pickData.summary.swapType === 'favorable'"
        name="material-symbols:arrow-upward-alt"
        class="arrow-favorable"
      />
    </div> -->

    <div
      class="rounded-full h-14 w-14 flex items-center justify-center"
      :class="[
        isTradedAway ? 'traded-away' : (pickData.summary.isConditional ? 'conditional' : 'owned'),
        { hover: isIdActive },
      ]"
    >
      <div
        v-if="abbrs.length === 1"
        class="w-10 h-10"
      >
        <TeamLogo
          :abbr="`${abbrs[0]}`"
          filled
        />
      </div>
      <div
        v-else-if="abbrs.length === 2"
        class="w-full h-full flex justify-center"
      >
        <div
          v-for="abbr in abbrs"
          :key="abbr"
          class="w-8 swap-group two-swap"
        >
          <TeamLogo
            :abbr="`${abbr}`"
            class="swap-logo"
            filled
          />
        </div>
      </div>
      <div
        v-else
        class="w-full h-full flex flex-col justify-center"
      >
        <div class="flex justify-center">
          <div
            v-for="abbr in [abbrs[0], abbrs[1]]"
            :key="abbr"
            class="w-8 swap-group two-swap"
          >
            <TeamLogo
              :abbr="`${abbr}`"
              class="swap-logo"
              filled
            />
          </div>
        </div>
        <div class="flex justify-center -mt-6">
          <div
            class="w-8 swap-group"
          >
            <TeamLogo
              v-if="abbrs.length === 3"
              :abbr="abbrs[2]"
              class="swap-logo"
              filled
            />
            <div
              v-else
              class="rounded-full w-8 h-8 flex items-center justify-center extra-circle"
            >
              <p>+{{ abbrs.length-2 }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <PickHover
      v-if="isTarget"
      :pick-data="pickData"
      :meta="meta"
    />

    <!-- <div class="w-4">
      <Icon
        v-if="pickData.summary.ifNotSettled"
        name="material-symbols:asterisk"
      />
    </div> -->
  </div>
</template>

<style scoped>
.pick-circle {
  --bg-conditional: #E5DDB4;
  --bg-guarenteed: #CDF3CA;
  --bg-guarenteed-extra: #95d092;
  --bg-conditional-extra: #c7bf96;
}

.traded-away {
  @apply bg-gray-400;
  filter: grayscale(1) opacity(.3);
}

.owned {
  /* @apply bg-green-600; */
  background-color: var(--bg-guarenteed);
}

.owned .extra-circle {
  background-color: var(--bg-guarenteed-extra);
}

.conditional {
  /* @apply bg-yellow-500 text-black; */
  background-color: var(--bg-conditional);
  color: black;
}

.conditional .extra-circle {
  background-color: var(--bg-conditional-extra);
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

.hover {
  @apply border border-gray-500 shadow-lg shadow-gray-500;
}

.swap-group.two-swap:not(:first-child) {
  @apply -ml-4;
}

.swap-group.two-swap:not(:first-child) .swap-logo {
  @apply z-10;
}

.swap-group.three-swap:not(:first-child) {
  @apply -ml-6;
}

.swap-group.three-swap:not(:first-child) .swap-logo {
  @apply z-10;
}
</style>
