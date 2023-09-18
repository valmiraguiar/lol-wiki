import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useChampions from '../../../../hooks/useChampions';
import { IChampion } from '../../../../../infra/model/champions/IChampion';

const ChampionDetailLayout: React.FC = () => {
  const params = useParams();
  const itemKey = params.championId;

  const { champion, getChampion } = useChampions();
  const [data, setData] = useState<IChampion>();

  useEffect(() => {
    if (itemKey) getChampion(itemKey);

    setData(champion ? Object.values(champion)[0] : {});
    // eslint-disable-next-line
  }, [itemKey]);

  return (
    <>
      <h1>Champion Profile - {data?.key}</h1>
    </>
  );
};

export default ChampionDetailLayout;
