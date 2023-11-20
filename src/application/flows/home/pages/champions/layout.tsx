import React, { useState } from 'react';
import { ChampionsLayoutProps } from './champions.types';
import { DEFAULT_IMAGE_ENDPOINT } from '../../../../../infra/services/api';
import {
  Container,
  ItemContainer,
  LoadingWrapper,
  StyledImg,
  Title,
  TitleContainer,
  Wrapper,
} from './styles';
import Spinner from '../../../../components/layout/spinner';
import { LoadingStateEnum } from '../../../../ts/types/loading';

const ChampionsLayout: React.FC<ChampionsLayoutProps> = ({
  championsData,
  handleItemClick,
  loadingState,
}) => {
  const [hoveredItem, setHoveredItem] = useState<number>(-1);

  return (
    <Container>
      {loadingState === LoadingStateEnum.PENDING ? (
        <LoadingWrapper>
          <Spinner indicatorColor="#FFFFFF" />
        </LoadingWrapper>
      ) : (
        <Wrapper>
          {Object.entries(championsData).map((champion, index) => (
            <ItemContainer
              onMouseEnter={() => setHoveredItem(index)}
              onMouseOut={() => setHoveredItem(-1)}
              onClick={() => handleItemClick(champion[0])}
              key={champion[1].key}
            >
              <StyledImg
                alt="Champion"
                src={`${DEFAULT_IMAGE_ENDPOINT}/${champion[0]}_0.jpg`}
                selected={hoveredItem === index ? true : undefined}
              />
              <TitleContainer
                selected={hoveredItem === index ? true : undefined}
              >
                <Title>{`${champion[1].name}`.toUpperCase()}</Title>
              </TitleContainer>
            </ItemContainer>
          ))}
        </Wrapper>
      )}
    </Container>
  );
};

export default ChampionsLayout;
