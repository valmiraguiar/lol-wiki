import { useState } from 'react';
import ChampionsService from '../../infra/services/champions';
import { IChampion } from '../../infra/model/champions/IChampion';

const useChampions = () => {
  const [champions, setChampions] = useState<IChampion[]>();
  const [champion, setChampion] = useState<IChampion>();

  const [loadingState, setLoadingState] = useState('');
  const service = new ChampionsService();

  const getChampionsList = async () => {
    try {
      setLoadingState('loading');
      const response = await service.fetchChampions();
      setChampions(response.data);

      setLoadingState('success');
    } catch (error) {
      console.log('error');
    }
  };

  const getChampion = async (championId: string) => {
    try {
      setLoadingState('loading');
      const response = await service.getChampion(championId);
      setChampion(response.data);

      setLoadingState('success');
    } catch (error) {
      console.log('error');
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
