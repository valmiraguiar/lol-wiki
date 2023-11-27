import api from '../api';
import {
  FetchChampionsResponseDTO,
  GetChampionResponseDTO,
} from './dtos/getChampions';

export default class ChampionsService {
  private readonly endpoints = {
    championsList: () => '/champion.json',
    getChampion: (championName: string) => `/champion/${championName}.json`,
  };

  public async fetchChampions(): Promise<FetchChampionsResponseDTO> {
    const { data } = await api.get<FetchChampionsResponseDTO>(
      this.endpoints.championsList(),
    );

    return data;
  }

  public async getChampion(
    championId: string,
  ): Promise<GetChampionResponseDTO> {
    const id = championId.charAt(0).toUpperCase() + championId.slice(1);
    const { data } = await api.get<GetChampionResponseDTO>(
      this.endpoints.getChampion(id),
    );

    return data;
  }
}
