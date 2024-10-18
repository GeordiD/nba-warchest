import { TeamAbbrs } from '~/utils/TeamAbbrs';
import type { Team } from '~/utils/types/Team';

const mockTeam = (abbr: string) => ({
  collectionId: 'dkbjmd4v8zxkmye',
  collectionName: 'teams',
  created: '2024-06-16 21:43:54.645Z',
  updated: '2024-06-16 21:43:54.645Z',
  fullName: `mock-fullname-${abbr}`,
  location: `mock-location-${abbr}`,
  name: `mock-name-${abbr}`,
  abbr,
  id: `${abbr}xxxxxxxxxxxx`,
});

export const Teams: Record<string, Team> = TeamAbbrs.reduce((prev, curr) => ({
  ...prev,
  [curr]: mockTeam(curr),
}), {})
