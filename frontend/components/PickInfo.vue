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
    <div
      v-if="asset.isOwn()"
      class="inline-block"
    >
      <span v-if="asset.isSwap()">
        Own
        ({{ asset.isFavorableSwap() ? 'favorable' : 'unfavorable' }} swap with
        {{ asset.swapWith().map(x => x.abbr).join(' / ') }}).
      </span>
      <span v-else-if="asset.isOwnedBySelf()">Own</span>
      <span v-else>To {{ asset.pick.toTeam!.abbr }}</span>
    </div>

    <!-- I don't think this can happen anymore -->
    <span v-else-if="asset.isSwap()">
      <!-- <SwapInfo :asset="asset" /> -->
      <!-- {{ asset.isFavorableSwap() ? 'Favorable' : 'Unfavorable' }} swap -->
      NON OWN SWAP!
    </span>

    <span v-else>{{ asset.pick.originator?.abbr }}</span>
    <span v-if="asset.pick.position"> (#{{ asset.pick.position }})</span>

    <span
      v-if="asset.isProtected()"
    >
      (Top {{ asset.getProtection() }} prot.)
    </span>
  </div>
</template>
