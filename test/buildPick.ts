import { Teams } from '~/test/MockTeams'
import type { Pick } from '~/utils/types/Pick'

export const buildPick = ({
  originator = Teams.OKC,
  toTeam = undefined,
  id = 'test-id',
  year = 2024,
  round = 1,
  protections = [],
  conveysFrom = undefined,
  conveysTo = [],
  swaps = [],
}: Partial<Pick>): Pick => {
  return {
    originator,
    toTeam,
    id,
    year,
    round,
    protections,
    conveysFrom,
    conveysTo,
    swaps,
  }
}
