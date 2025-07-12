export interface PickData {
  picks: string[];
  pickCount: {
    definite: number;
    conditional: number;
    total: number;
  };
}

export interface TeamData {
  teamName: string;
  picks: {
    [year: string]: {
      firstRound: PickData;
      secondRound: PickData;
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
