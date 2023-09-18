export interface IChampion {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  lore: string;
  tags: string;
  image: ChampionImage;
}

export interface ChampionImage {
  full: string;
}
