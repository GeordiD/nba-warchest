<script setup lang="ts">
import type { DraftAsset } from '#imports';

const {
  asset,
} = defineProps({
  asset: {
    type: Object as PropType<DraftAsset>,
    required: true,
  },
})
</script>

<template>
  <div>
    {{ asset.year }}:
    <span v-if="asset.isOwn() && asset.isOwnedBySelf() && !asset.isSwap()">Own</span>

    <span v-else-if="asset.isSwap()">
      <!-- <SwapInfo :asset="asset" /> -->
      {{ asset.isFavorableSwap() ? 'Favorable' : 'Unfavorable' }} swap
    </span>
    <span v-else>{{ !!asset.pick.conveysFrom ? '*' : '' }}{{ asset.pick.originator?.abbr }} => {{ asset.pick.toTeam?.abbr }}</span>
    <span v-if="asset.pick.position"> (#{{ asset.pick.position }})</span>

    <span
      v-if="asset.isProtected()"
    >
      (Top {{ asset.getProtection() }} prot.)
    </span>
  </div>
</template>
