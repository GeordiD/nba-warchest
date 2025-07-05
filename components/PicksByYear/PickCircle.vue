<script setup lang="ts">
import CornerArtifact from '~/components/PicksByYear/CornerArtifact.vue';
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

const isFrozen = computed(() => !!pickData.summary.frozen);

const abbrs = computed(() => {
  const summary = pickData.summary;
  const teams = summary.teams ?? [];

  if (summary.isOwn && !summary.isTradedAway && !teams.length) {
    return [relatedAbbr]
  }

  if (summary.swapType) {
    const calcOwnNotIncluded = !summary.includeOwn && !summary.isOwn && summary.swapType;
    if (!(summary.ownNotIncluded || calcOwnNotIncluded)) {
      return [
        relatedAbbr,
        ...teams,
      ]
    } else {
      return teams;
    }
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

const protection = computed(() => {
  const isTradedPickWithOneTradePartner = circleAbbrs.value.length === 1 && pickData.summary.isConditional;
  const isSwappedPickWithOneTradePartner = circleAbbrs.value.length <= 2 && pickData.summary.swapType;
  if (isSwappedPickWithOneTradePartner || isTradedPickWithOneTradePartner) {
    const headline = (pickData.details as PickDetails).headline ?? pickData.details;
    const find = headline.match(/\[top (\d+) prot\.\]/);

    return find?.at(1) ?? '';
  }
  return '';
});

const pickTypeClass = computed(() => {
  if (isTradedAway.value) return 'grayed-out';
  if (isFrozen.value) return 'owned frozen';
  return pickData.summary.isConditional ? 'conditional' : 'owned'
});

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
        pickTypeClass,
        pickData.summary.isOwn ? 'is-own' : '',
        { hover: isIdActive },
      ]"
    >
      <SwapIcon
        v-if="pickData.summary.swapType"
        class="z-30"
        :swap-type="pickData.summary.swapType"
      />

      <CornerArtifact
        v-if="isTradedAway"
        direction="tr"
        class="z-30 bg-gray-800"
      >
        <Icon
          name="fe:logout"
          class="icon text-white"
        />
      </CornerArtifact>

      <CornerArtifact
        v-if="isFrozen"
        direction="tr"
        class="z-30 bg-blue-500"
      >
        <Icon
          name="mingcute:snowflake-line"
          class="icon text-white"
        />
      </CornerArtifact>

      <Protection
        v-if="protection"
        :protection="protection"
        :is-conditional="pickData.summary.isConditional ?? false"
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
  --bg-guaranteed: #CDF3CA;
  --bg-guaranteed-extra: #95d092;
  --bg-conditional-extra: #c7bf96;
}

.grayed-out {
  @apply bg-transparent border-dashed border-2 border-gray-800;
  filter: grayscale(1) opacity(.3);
}

.frozen {
  @apply bg-transparent border-dashed border-2 border-blue-500;
}

.owned {
  background-color: var(--bg-guaranteed);
}

.owned .extra-circle {
  background-color: var(--bg-guaranteed-extra);
}

.conditional {
  background-color: var(--bg-conditional);
  color: black;
}

.conditional.is-own {
  @apply border-dashed border-2;
  border-color: #a49a67;
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
