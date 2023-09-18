import React, { useState } from 'react';
import { ChampionsLayoutProps } from './champions.types';
import { DEFAULT_IMAGE_ENDPOINT } from '../../../../../infra/services/api';
import {
  Container,
  ItemContainer,
  StyledImg,
  Title,
  TitleContainer,
  Wrapper,
} from './styles';

const ChampionsLayout: React.FC<ChampionsLayoutProps> = ({ championsData }) => {
  const [hoveredItem, setHoveredItem] = useState<number>();

  return (
    <Container>
      <Wrapper>
        {Object.entries(championsData).map((champion, index) => (
          <ItemContainer
            onMouseEnter={() => setHoveredItem(index)}
            onMouseOut={() => setHoveredItem(-1)}
          >
            <StyledImg
              alt="Champion"
              src={`${DEFAULT_IMAGE_ENDPOINT}/${champion[0]}_0.jpg`}
              hover={hoveredItem === index}
            />
            <TitleContainer key={champion[1].key} hover={hoveredItem === index}>
              <Title>{`${champion[1].name}`.toUpperCase()}</Title>
            </TitleContainer>
          </ItemContainer>
        ))}
      </Wrapper>
    </Container>
  );
};

export default ChampionsLayout;
