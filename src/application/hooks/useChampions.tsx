import { useState } from 'react';
import ChampionsService from '../../infra/services/champions';
import { IChampion } from '../../infra/model/champions/IChampion';
import { LoadingStateEnum } from '../ts/types/loading';

const useChampions = () => {
  const [champions, setChampions] = useState<IChampion[]>();
  const [champion, setChampion] = useState<IChampion>();

  const [loadingState, setLoadingState] = useState<LoadingStateEnum>(
    LoadingStateEnum.STAND_BY,
  );
  const service = new ChampionsService();

  const getChampionsList = async () => {
    try {
      setLoadingState(LoadingStateEnum.PENDING);
      const response = await service.fetchChampions();
      setChampions(response.data);

      setLoadingState(LoadingStateEnum.DONE);
    } catch (error) {
      console.log('error');
      setLoadingState(LoadingStateEnum.ERROR);
    }
  };

  const getChampion = async (championId: string) => {
    try {
      setLoadingState(LoadingStateEnum.PENDING);
      const response = await service.getChampion(championId);
      setChampion(response.data);

      setLoadingState(LoadingStateEnum.DONE);
    } catch (error) {
      console.log('error');
      setLoadingState(LoadingStateEnum.ERROR);
    }
  };

  return {
    loadingState,
    getChampionsList,
    getChampion,
    champions,
    champion,
  };
};

export default useChampions;
