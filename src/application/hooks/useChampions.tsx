import { useState } from 'react';
import ChampionsService from '../../infra/services/champions';
import { IChampion } from '../../infra/model/champions/IChampion';

const useChampions = () => {
  const [champions, setChampions] = useState<IChampion[]>();
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

  return {
    loadingState,
    getChampionsList,
    champions,
  };
};

export default useChampions;
