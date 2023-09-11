import React, { useEffect, useState } from "react";
import ChampionsLayout from "./layout";
import useChampions from "../../../../hooks/useChampions";

const Champions : React.FC = () => {
  const { 
    champions, 
    getChampionsList, 
    loadingState
  } = useChampions();

  useEffect(() => {
    getChampionsList();  
    
    // eslint-disable-next-line
  }, []);

  return (
    <ChampionsLayout championsData={champions ?? []} />
  );
}

export default Champions;