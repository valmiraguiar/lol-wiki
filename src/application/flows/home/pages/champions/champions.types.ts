import { IChampion } from '../../../../../infra/model/champions/IChampion';
import { LoadingStateEnum } from '../../../../ts/types/loading';

export interface ChampionsLayoutProps {
  championsData: IChampion[];
  handleItemClick: (itemKey: string) => void;
  loadingState: LoadingStateEnum;
}

export interface TitleContainerProps {
  selected?: boolean;
}

export interface StyleImgProps {
  selected?: boolean;
}
