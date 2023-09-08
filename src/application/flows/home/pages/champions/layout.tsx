import React from "react";
import { ChampionsLayoutProps } from "./champions.types";
import { DEFAULT_IMAGE_ENDPOINT } from "../../../../../infra/services/api";
import { Container } from "./styles";

const ChampionsLayout : React.FC<ChampionsLayoutProps> = ({ championsData }) => {

  return (
    <Container>
      { 
        Object.entries(championsData).map( champion => 
          <div key={`key-${champion[0]}`}>
              <h1>{`${champion[0]}, ${champion[1].title} - ${champion[1].key}`}</h1>
              <img alt="Champion" src={`${DEFAULT_IMAGE_ENDPOINT}/${champion[0]}_0.jpg`}/>
          </div>
        )
      }        
    </Container>
  );
};

export default ChampionsLayout;