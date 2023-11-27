import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useChampions from '../../../../hooks/useChampions';
import { IChampion } from '../../../../../infra/model/champions/IChampion';
import { DEFAULT_SPLASH_ENDPOINT } from '../../../../../infra/services/api';
import {
  Container,
  ImgContainer,
  StyledImg,
  LoadingWrapper,
  DetailsWrapper,
  TitleWrapper,
  Title,
  Divider,
  Subtitle,
  StyledText,
} from './styles';
import { LoadingStateEnum } from '../../../../ts/types/loading';
import Spinner from '../../../../components/layout/spinner';

const ChampionDetailLayout: React.FC = () => {
  const params = useParams();
  const itemKey = params.championId;
  const { champion, getChampion, loadingStateChampionDetail } = useChampions();
  const [data, setData] = useState<IChampion>();

  useEffect(() => {
    itemKey && getChampion(itemKey);
    setData(champion ? Object.values(champion)[0] : {});

    document.title = data
      ? `${data.name}, ${data.title} - LOL Wiki`
      : 'League of Legends Wiki';

    // eslint-disable-next-line
  }, [data]);

  return (
    <>
      {loadingStateChampionDetail === LoadingStateEnum.PENDING ? (
        <LoadingWrapper>
          <Spinner indicatorColor="#FFFFFF" />
        </LoadingWrapper>
      ) : (
        <DetailsWrapper>
          {data ? (
            <Container>
              <ImgContainer>
                <StyledImg
                  src={`${DEFAULT_SPLASH_ENDPOINT}/${data.name}_0.jpg`}
                />
              </ImgContainer>

              <DetailsWrapper>
                <TitleWrapper>
                  <Divider />
                  <Title>{data.name}</Title>
                  <Divider />
                </TitleWrapper>

                <Subtitle>{data.title}</Subtitle>
                <StyledText>{data.lore}</StyledText>
              </DetailsWrapper>

              {/* <TextContainer>
                <Title>{data.name}</Title>
                <Subtitle>{data.title}</Subtitle>
                <StyledText>{data.lore}</StyledText>
              </TextContainer> */}
            </Container>
          ) : (
            <h1>Error</h1>
          )}
        </DetailsWrapper>
      )}
    </>
  );
};

export default ChampionDetailLayout;
