import type { TeamMeta } from '~/data/TeamMeta';
import { atlMeta } from '~/data/teams/atl';
import { bknMeta } from '~/data/teams/bkn';
import { bosMeta } from '~/data/teams/bos';
import { chaMeta } from '~/data/teams/cha';
import { chiMeta } from '~/data/teams/chi';
import { cleMeta } from '~/data/teams/cle';
import { dalMeta } from '~/data/teams/dal';
import { denMeta } from '~/data/teams/den';
import { detMeta } from '~/data/teams/det';
import { gswMeta } from '~/data/teams/gsw';
import { houMeta } from '~/data/teams/hou';
import { indMeta } from '~/data/teams/ind';
import { lacMeta } from '~/data/teams/lac';
import { lalMeta } from '~/data/teams/lal';
import { memMeta } from '~/data/teams/mem';
import { miaMeta } from '~/data/teams/mia';
import { milMeta } from '~/data/teams/mil';
import { minMeta } from '~/data/teams/min';
import { nopMeta } from '~/data/teams/nop';
import { nykMeta } from '~/data/teams/nyk';
import { okcMeta } from '~/data/teams/okc';
import { orlMeta } from '~/data/teams/orl';
import { phiMeta } from '~/data/teams/phi';
import { phxMeta } from '~/data/teams/phx';
import { porMeta } from '~/data/teams/por';
import { sacMeta } from '~/data/teams/sac';
import { sasMeta } from '~/data/teams/sas';
import { torMeta } from '~/data/teams/tor';
import { utaMeta } from '~/data/teams/uta';
import { wasMeta } from '~/data/teams/was';

const metas: Record<string, TeamMeta> = {
  atl: atlMeta,
  bos: bosMeta,
  bkn: bknMeta,
  cha: chaMeta,
  chi: chiMeta,
  cle: cleMeta,
  dal: dalMeta,
  den: denMeta,
  det: detMeta,
  gsw: gswMeta,
  hou: houMeta,
  ind: indMeta,
  lac: lacMeta,
  lal: lalMeta,
  mem: memMeta,
  mia: miaMeta,
  mil: milMeta,
  min: minMeta,
  nop: nopMeta,
  nyk: nykMeta,
  okc: okcMeta,
  orl: orlMeta,
  phi: phiMeta,
  phx: phxMeta,
  por: porMeta,
  sac: sacMeta,
  sas: sasMeta,
  tor: torMeta,
  uta: utaMeta,
  was: wasMeta,
}

export function getMetadataForTeam(abbr: TeamAbbr): TeamMeta {
  return metas[(abbr as string).toLowerCase()];
}
