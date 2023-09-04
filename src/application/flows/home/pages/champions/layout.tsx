import React from "react";
import { ChampionsLayoutProps } from "./champions.types";

const ChampionsLayout : React.FC<ChampionsLayoutProps> = ({ championsData }) => {

  return (
    <>
      <h1>Champions home!</h1>
      { 
        Object.entries(championsData).map( champion => 
          <>
            <p>
              <h2>{`${champion[0]}, ${champion[1].title} - ${champion[1].key}`}</h2>
            </p>
          </>
        )
      }        
    </>
  );
};

export default ChampionsLayout;