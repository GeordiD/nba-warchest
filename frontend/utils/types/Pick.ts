import type { RecordModel } from 'pocketbase'
import type { Team } from '~/utils/types/Team'

export type Protection = {
  rangeMin: number
  rangeMax: number
  toTeam: string
  id: string
}

export type ExpandedProtection = {
  rangeMin: number
  rangeMax: number
  toTeam: Team
  id: string
}

export type Swap = {
  bestTo: string,
  worstTo: string,
  remainderTo: string,
  picks: string[],
  protections: string[]
  expand: {
    protections: Protection[],
  }
}

export type ExpandedSwap = {
  bestTo?: Team,
  worstTo?: Team,
  remainderTo?: Team,
  picks: string[],
  protections: ExpandedProtection[]
}

export type Pick = RecordModel & {
  year: number
  round: number
  position?: number
  originator: string // id
  toTeam?: string
  conveysTo: string[]
  conveysFrom: string
  swaps: string[]
  expand: {
    protections: Protection[]
    swaps: Swap[]
  }
}

export type ExpandedPick = {
  id: string,
  year: number,
  round: number,
  position?: number,
  originator: Team
  toTeam?: Team
  protections: ExpandedProtection[],
  conveysTo: string[]
  conveysFrom?: string
  swaps: ExpandedSwap[]
}
