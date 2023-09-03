import React, { useEffect } from "react";
import ChampionsLayout from "./layout";

const Champions : React.FC = () => {
  useEffect(() => {
    fetch('http://ddragon.leagueoflegends.com/cdn/13.17.1/data/pt_BR/champion.json');
    
  }, []);

  return (
    <ChampionsLayout />
  );
}

export default Champions;