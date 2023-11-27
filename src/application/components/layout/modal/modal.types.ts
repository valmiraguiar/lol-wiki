import { Dispatch } from 'react';

export interface ModalProps {
  isLoading?: boolean;
  imgSrc: string;
  id: string;
  title: string;
  subtitle: string;
  detail: string;
  setModalIsOpen?: Dispatch<React.SetStateAction<boolean>>;
}
