import React, { useEffect } from 'react';
import ChampionsLayout from './layout';
import useChampions from '../../../../hooks/useChampions';

const Champions: React.FC = () => {
  const { champions, getChampionsList, getChampion, loadingStateChampions } =
    useChampions();

  useEffect(() => {
    getChampionsList();
    // eslint-disable-next-line
  }, []);

  return (
    <ChampionsLayout
      loadingState={loadingStateChampions}
      championsData={champions ?? []}
      handleGetChampion={getChampion}
    />
  );
};

export default Champions;
