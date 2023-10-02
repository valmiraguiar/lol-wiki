import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useChampions from '../../../../hooks/useChampions';
import { IChampion } from '../../../../../infra/model/champions/IChampion';
import { DEFAULT_SPLASH_ENDPOINT } from '../../../../../infra/services/api';
import {
  Container,
  ImgContainer,
  StyledImg,
  Subtitle,
  Text,
  TextContainer,
  Title,
} from './styles';

const ChampionDetailLayout: React.FC = () => {
  const params = useParams();
  const itemKey = params.championId;
  const { champion, getChampion } = useChampions();
  const [data, setData] = useState<IChampion>();

  document.title = data
    ? `${data.name}, ${data.title} - LOL Wiki`
    : 'League of Legends Wiki';

  useEffect(() => {
    if (itemKey) getChampion(itemKey);
    setData(champion ? Object.values(champion)[0] : {});

    // eslint-disable-next-line
  }, [data]);

  return (
    <Container>
      {data ? (
        <>
          <ImgContainer>
            <StyledImg src={`${DEFAULT_SPLASH_ENDPOINT}/${data.name}_0.jpg`} />
          </ImgContainer>

          <TextContainer>
            <Title>{data.name}</Title>
            <Subtitle>{data.title}</Subtitle>
            <Text>{data.lore}</Text>
          </TextContainer>
        </>
      ) : (
        <h1>Error</h1>
      )}
    </Container>
  );
};

export default ChampionDetailLayout;
