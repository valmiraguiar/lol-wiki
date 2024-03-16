interface ChampionDetailModalProps {
  isLoading?: boolean;
  setModalIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  imgSrc: string;
  id: string;
  title: string;
  subtitle: string;
  detail: string;
}

export type { ChampionDetailModalProps };
