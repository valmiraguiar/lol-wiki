import React from "react";
import { ChampionsLayoutProps } from "./champions.types";
import { DEFAULT_IMAGE_ENDPOINT } from "../../../../../infra/services/api";
import { Container, ItemContainer, StyledImg, Title, TitleContainer, Wrapper } from "./styles";

const ChampionsLayout : React.FC<ChampionsLayoutProps> = ({ championsData }) => {

  return (
    <Container>
      <Wrapper>
        { 
          Object.entries(championsData).map( champion => (
            <ItemContainer>
              <StyledImg alt="Champion" src={`${DEFAULT_IMAGE_ENDPOINT}/${champion[0]}_0.jpg`}/>
              <TitleContainer>
                <Title>{`${champion[1].name}`.toUpperCase()}</Title>
              </TitleContainer>
            </ItemContainer>
          ))
        }        
      </Wrapper>
    </Container>
  );
};

export default ChampionsLayout;