import type { RecordModel } from 'pocketbase';
import type { Team } from '~/utils/types/Team';

export type Pick = RecordModel & {
  year: number,
  round: number,
  position?: number,
  originator?: string, // id
  toTeam?: string,
  conveysTo: string[],
  isConditional: boolean,
  expand: {
    protections: {
      rangeMin: number,
      rangeMax: number,
      toTeam: string,
      id: string,
    }[]
  }
};

export type ExpandedPick = Pick & {
  toTeam?: Team,
  originator?: Team,
  protections: {
    rangeMin: number,
    rangeMax: number,
    toTeam: Team,
    id: string,
  }[]
}