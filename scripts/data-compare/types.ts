export interface TeamData {
  teamName: string;
  picks: {
    [year: string]: {
      firstRound: string;
      secondRound: string;
    };
  };
}

export interface ParsedData {
  timestamp: string;
  teams: TeamData[];
}

export interface ComparisonOptions {
  save: boolean;
  help: boolean;
}
