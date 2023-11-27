import React, { useEffect } from 'react';
import ChampionsLayout from './layout';
import useChampions from '../../../../hooks/useChampions';
import { useNavigate } from 'react-router-dom';
import Modal from '../../../../components/layout/modal';
import { DEFAULT_IMAGE_ENDPOINT } from '../../../../../infra/services/api';
import { IChampion } from '../../../../../infra/model/champions/IChampion';

const Champions: React.FC = () => {
  const { champions, getChampionsList, loadingStateChampions } = useChampions();
  const navigate = useNavigate();

  useEffect(() => {
    getChampionsList();

    // eslint-disable-next-line
  }, []);

  return (
    <ChampionsLayout
      loadingState={loadingStateChampions}
      championsData={champions ?? []}
    />
  );
};

export default Champions;
