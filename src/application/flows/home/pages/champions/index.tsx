import React, { useEffect } from 'react';
import ChampionsLayout from './layout';
import useChampions from '../../../../hooks/useChampions';
import { useNavigate } from 'react-router-dom';

const Champions: React.FC = () => {
  const { champions, getChampionsList, loadingState } = useChampions();
  const navigate = useNavigate();

  useEffect(() => {
    getChampionsList();

    // eslint-disable-next-line
  }, []);

  const handleItemClick = (itemKey: string) => {
    navigate(`/champion/${itemKey.toLowerCase()}`);
  };

  return (
    <ChampionsLayout
      loadingState={loadingState}
      handleItemClick={handleItemClick}
      championsData={champions ?? []}
    />
  );
};

export default Champions;
