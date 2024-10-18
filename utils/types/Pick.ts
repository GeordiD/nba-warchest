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
  year: number,
  round: number,
  bestTo: string,
  worstTo: string,
  remainderTo: string,
  picks: string[],
  protections: string[],
  expand: {
    protections: ProtectionDto[],
    picks: PickDto[],
  }
}

export type Swap = {
  year: number,
  round: number;
  bestTo?: Team,
  worstTo?: Team,
  remainderTo?: Team,
  picks: SwappedPick[],
  protections: Protection[]
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

export type SwappedPick = Omit<PickDto, 'originator'> & {
  originator: Team,
}
