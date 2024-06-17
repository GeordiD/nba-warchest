import type { RecordModel } from 'pocketbase';

export type Team = RecordModel & {
  abbr: string,
  location: string,
  name: string,
  fullName: string,
};