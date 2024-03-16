import { IChampion } from '../../../../../infra/model/champions/IChampion';
import { LoadingStateEnum } from '../../../../ts/types/loading';

export interface ChampionsLayoutProps {
  championsData: IChampion[];
  loadingState: LoadingStateEnum;
  handleGetChampion: (championId: string) => Promise<IChampion | undefined>;
}

export interface TitleContainerProps {
  selected?: boolean;
}

export interface StyleImgProps {
  selected?: boolean;
}

export interface WrapperProps {
  modalIsActive?: boolean;
}
