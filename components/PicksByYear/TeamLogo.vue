<script setup lang="ts">
import SvgoAtl from '~/assets/icons/atl.svg?componentext';
import SvgoBos from '~/assets/icons/bos.svg?componentext';
import SvgoBkn from '~/assets/icons/bkn.svg?componentext';
import SvgoCha from '~/assets/icons/cha.svg?componentext';
import SvgoChi from '~/assets/icons/chi.svg?componentext';
import SvgoCle from '~/assets/icons/cle.svg?componentext';
import SvgoDal from '~/assets/icons/dal.svg?componentext';
import SvgoDen from '~/assets/icons/den.svg?componentext';
import SvgoDet from '~/assets/icons/det.svg?componentext';
import SvgoGsw from '~/assets/icons/gsw.svg?componentext';
import SvgoHou from '~/assets/icons/hou.svg?componentext';
import SvgoInd from '~/assets/icons/ind.svg?componentext';
import SvgoLac from '~/assets/icons/lac.svg?componentext';
import SvgoLal from '~/assets/icons/lal.svg?componentext';
import SvgoMem from '~/assets/icons/mem.svg?componentext';
import SvgoMia from '~/assets/icons/mia.svg?componentext';
import SvgoMil from '~/assets/icons/mil.svg?componentext';
import SvgoMin from '~/assets/icons/min.svg?componentext';
import SvgoNop from '~/assets/icons/nop.svg?componentext';
import SvgoNyk from '~/assets/icons/nyk.svg?componentext';
import SvgoOkc from '~/assets/icons/okc.svg?componentext';
import SvgoOrl from '~/assets/icons/orl.svg?componentext';
import SvgoPhi from '~/assets/icons/phi.svg?componentext';
import SvgoPhx from '~/assets/icons/phx.svg?componentext';
import SvgoPor from '~/assets/icons/por.svg?componentext';
import SvgoSac from '~/assets/icons/sac.svg?componentext';
import SvgoSas from '~/assets/icons/sas.svg?componentext';
import SvgoTor from '~/assets/icons/tor.svg?componentext';
import SvgoUta from '~/assets/icons/uta.svg?componentext';
import SvgoWas from '~/assets/icons/was.svg?componentext';

const {
  abbr,
} = defineProps({
  abbr: {
    type: String,
    required: true,
  },
})

const test = computed(() => {
  return abbr;
})

const logos: Record<string, unknown> = {
  ATL: SvgoAtl,
  BOS: SvgoBos,
  BKN: SvgoBkn,
  CHA: SvgoCha,
  CHI: SvgoChi,
  CLE: SvgoCle,
  DAL: SvgoDal,
  DEN: SvgoDen,
  DET: SvgoDet,
  GSW: SvgoGsw,
  HOU: SvgoHou,
  IND: SvgoInd,
  LAC: SvgoLac,
  LAL: SvgoLal,
  MEM: SvgoMem,
  MIA: SvgoMia,
  MIL: SvgoMil,
  MIN: SvgoMin,
  NOP: SvgoNop,
  NYK: SvgoNyk,
  OKC: SvgoOkc,
  ORL: SvgoOrl,
  PHI: SvgoPhi,
  PHX: SvgoPhx,
  POR: SvgoPor,
  SAC: SvgoSac,
  SAS: SvgoSas,
  TOR: SvgoTor,
  UTA: SvgoUta,
  WAS: SvgoWas,
}
</script>

<template>
  <component
    :is="logos[abbr]"
    filled
  />
</template>

<style>
.nuxt-icon {
  height: 100% !important;
  width: 100% !important;
}
</style>
