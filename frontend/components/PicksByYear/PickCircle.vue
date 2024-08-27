<script setup lang="ts">
import type { PickDetails, PickSummary } from '~/data/PickMetaTypes';

const {
  pickData,
  relatedAbbr,
  year,
} = defineProps({
  relatedAbbr: {
    type: String,
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
  year: {
    type: Number,
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

const circleAbbrs = computed(() =>
  abbrs.value.length > 4
    ? abbrs.value.slice(0, 3)
    : abbrs.value,
);

const swapClass = computed(() => {
  switch (abbrs.value.length) {
    case 1:
      return 'one-swap';
    case 2:
      return 'two-swap';
    case 3:
      return 'three-swap';
    default:
      return 'four-swap';
  }
})

const pickDescription = computed(() => getPickDescription(pickData))

const {
  isIdActive,
  onMouseOut,
  onMouseOver,
} = useHoverPick(pickData.id);
</script>

<template>
  <a
    class="flex items-center cursor-pointer relative pick-circle"
    :href="`#${year}`"
    @mouseover="onMouseOver"
    @mouseout="onMouseOut"
  >
    <div
      v-tooltip="pickDescription"
      class="rounded-lg h-14 w-14 flex items-center justify-center relative"
      :class="[
        isTradedAway ? 'traded-away' : (pickData.summary.isConditional ? 'conditional' : 'owned'),
        { hover: isIdActive },
      ]"
    >
      <SwapIcon
        v-if="pickData.summary.swapType"
        class="z-30"
        :swap-type="pickData.summary.swapType"
      />

      <TradedAwayIcon
        v-if="isTradedAway"
        class="z-30"
      />

      <div
        :class="swapClass"
      >
        <div
          v-for="abbr in circleAbbrs"
          :key="abbr"
          class="swap-logo"
        >
          <TeamLogo
            :abbr="`${abbr}`"
            filled
          />
        </div>

        <div
          v-if="abbrs.length > 4"
          class="swap-logo rounded-full extra-circle flex items-center justify-center text-xs"
        >
          <p>+{{ abbrs.length - 3 }}</p>
        </div>
      </div>
    </div>
  </a>
</template>

<style scoped>
.pick-circle {
  --bg-conditional: #E5DDB4;
  --bg-guarenteed: #CDF3CA;
  --bg-guarenteed-extra: #95d092;
  --bg-conditional-extra: #c7bf96;
}

.traded-away {
  @apply bg-transparent border-dashed border-2 border-gray-800;
  filter: grayscale(1) opacity(.3);
}

.owned {
  background-color: var(--bg-guarenteed);
}

.owned .extra-circle {
  background-color: var(--bg-guarenteed-extra);
}

.conditional {
  background-color: var(--bg-conditional);
  color: black;
}

.conditional .extra-circle {
  background-color: var(--bg-conditional-extra);
}

.hover {
  @apply shadow-lg shadow-gray-500;
}

.one-swap {
  & .swap-logo {
    @apply h-12 w-12
  }
}

.two-swap {
  display: flex;
  flex-direction: column-reverse;

  & .swap-logo {
    @apply h-9 w-9;
  }

  & .swap-logo:first-child {
    @apply -mt-6 mr-3;
  }

  & .swap-logo:last-child {
    @apply ml-3 z-10;
  }
}

.three-swap {
  display: flex;
  flex-direction: column;

  & .swap-logo {
    @apply h-7 w-7;
  }

  & .swap-logo:nth-child(1) {
    @apply ml-2;
  }

  & .swap-logo:nth-child(2) {
    @apply -mt-3 mr-4;
  }

  & .swap-logo:nth-child(3) {
    @apply -mt-7 ml-4;
  }
}

.four-swap {
  display: flex;
  flex-direction: column;

  & .swap-logo {
    @apply h-7 w-7;
  }

  & .swap-logo:nth-child(1) {
    @apply mr-4;
  }

  & .swap-logo:nth-child(2) {
    @apply -mt-7 ml-4;
  }

  & .swap-logo:nth-child(3) {
    @apply -mt-3 mr-4;
  }

  & .swap-logo:nth-child(4) {
    @apply -mt-7 ml-4;
  }
}
</style>
