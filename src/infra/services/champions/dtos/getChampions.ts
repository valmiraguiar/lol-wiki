import { IChampion } from '../../../model/champions/IChampion';

export interface FetchChampionsResponseDTO {
  type: string;
  format: string;
  version: string;
  data: IChampion[];
}

export interface GetChampionResponseDTO {
  version: string;
  data: IChampion;
}
