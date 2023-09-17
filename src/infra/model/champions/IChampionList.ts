import { IChampion } from './IChampion';

export interface IChampionList {
  type: string;
  format: string;
  version: string;
  data: IChampion[];
}
