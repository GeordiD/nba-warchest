import type { RecordModel } from 'pocketbase'
import type { Team } from '~/utils/types/Team'

export type ProtectionDto = {
  rangeMin: number
  rangeMax: number
  toTeam: string
  id: string
}

export type Protection = {
  rangeMin: number
  rangeMax: number
  toTeam: Team
  id: string
}

export type SwapDto = {
  bestTo: string,
  worstTo: string,
  remainderTo: string,
  picks: string[],
  protections: string[],
  year: number,
  round: number,
  expand: {
    protections: ProtectionDto[],
  }
}

export type Swap = {
  bestTo?: Team,
  worstTo?: Team,
  remainderTo?: Team,
  picks: Pick[],
  protections: Protection[]
  year: number,
  round: number;
}

export type PickDto = RecordModel & {
  year: number
  round: number
  position?: number
  originator: string // id
  toTeam?: string
  conveysTo: string[]
  conveysFrom: string
  swaps: string[]
  expand: {
    protections: ProtectionDto[]
    swaps: SwapDto[]
  }
}

export type Pick = {
  id: string,
  year: number,
  round: number,
  position?: number,
  originator: Team
  toTeam?: Team
  protections: Protection[],
  conveysTo: string[]
  conveysFrom?: string
  swaps: Swap[]
}
