import { IChampion } from '../../../../../infra/model/champions/IChampion';

export interface ChampionsLayoutProps {
  championsData: IChampion[];
  handleItemClick: (itemKey: string) => void;
}

export interface TitleContainerProps {
  hover?: boolean;
}

export interface StyleImgProps {
  hover?: boolean;
}
