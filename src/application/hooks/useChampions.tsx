import { useCallback, useState } from 'react';
import ChampionsService from '../../infra/services/champions';
import { IChampion } from '../../infra/model/champions/IChampion';
import { LoadingStateEnum } from '../ts/types/loading';

const useChampions = () => {
  const [champions, setChampions] = useState<IChampion[]>();
  const [champion, setChampion] = useState<IChampion>();

  const [loadingStateChampions, setLoadingStateChampions] =
    useState<LoadingStateEnum>(LoadingStateEnum.STAND_BY);
  const [loadingStateChampionDetail, setLoadingStateChampionDetail] =
    useState<LoadingStateEnum>(LoadingStateEnum.STAND_BY);

  const service = new ChampionsService();

  const getChampionsList = async () => {
    try {
      setLoadingStateChampions(LoadingStateEnum.PENDING);
      const response = await service.fetchChampions();
      setChampions(response.data);

      setLoadingStateChampions(LoadingStateEnum.DONE);
    } catch (error) {
      console.log('error ', error);
      setLoadingStateChampions(LoadingStateEnum.ERROR);
    }
  };

  const getChampion = async (championId: string) => {
    try {
      setLoadingStateChampionDetail(LoadingStateEnum.PENDING);
      const response = await service.getChampion(championId);
      setChampion(response.data);
      const championResponse: IChampion = Object.values(response.data)[0];

      setLoadingStateChampionDetail(LoadingStateEnum.DONE);
      return championResponse;
    } catch (error) {
      console.log('error ', error);
      setLoadingStateChampionDetail(LoadingStateEnum.ERROR);
      return undefined;
    }
  };

  const handleChampion = useCallback(() => {
    return champion;
  }, [champion]);

  return {
    loadingStateChampions,
    loadingStateChampionDetail,
    getChampionsList,
    getChampion,
    champions,
    champion,
    handleChampion,
  };
};

export default useChampions;
