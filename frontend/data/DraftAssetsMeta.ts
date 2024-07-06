export interface PickMeta {
  headline: string;
  extra: (string | string[])[];
}

export interface DraftAssetsMeta {
  years: {
    year: number,
    roundOne: (PickMeta | string)[],
    roundTwo: (PickMeta | string)[],
  }[];
}
