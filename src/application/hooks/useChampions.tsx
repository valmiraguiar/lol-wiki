import { useCallback, useState } from 'react';
import ChampionsService from '../../infra/services/champions';
import { IChampion } from '../../infra/model/champions/IChampion';
import { LoadingStateEnum } from '../ts/types/loading';

const useChampions = () => {
  const [champions, setChampions] = useState<IChampion[]>();
  const [champion, setChampion] = useState<IChampion>();
  const [championSplash, setChampionSplash] = useState<string>('');

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

  const getChampionSplash = async (championId: string) => {
    try {
      setLoadingStateChampionDetail(LoadingStateEnum.PENDING);
      const response = await service.getChampionSplash(championId);
      setChampionSplash(response);

      setLoadingStateChampionDetail(LoadingStateEnum.DONE);
      return response;
    } catch (error) {
      console.log('error ', error);
      setLoadingStateChampionDetail(LoadingStateEnum.ERROR);
      return undefined;
    }
  };

  const getChampion = async (championId: string) => {
    try {
      setLoadingStateChampionDetail(LoadingStateEnum.PENDING);
      const response = await service.getChampion(championId);
      setChampion(response.data);
      Promise.resolve(getChampionSplash(championId));

      const championResponse: IChampion = Object.values(response.data)[0];

      console.log('Response data ', championResponse);

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
    getChampionSplash,
    champions,
    champion,
    championSplash,
    handleChampion,
  };
};

export default useChampions;
