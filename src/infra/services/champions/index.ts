import api from '../api';
import { FetchChampionsResponseDTO } from './dtos/getChampions';

export default class ChampionsService {
  private readonly endpoints = {
    championsList: () => '/champion.json',
  };

  public async fetchChampions(): Promise<FetchChampionsResponseDTO> {
    const { data } = await api.get<FetchChampionsResponseDTO>(
      this.endpoints.championsList(),
    );

    return data;
  }
}
