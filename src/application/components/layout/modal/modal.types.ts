import { Dispatch, ReactNode } from 'react';

export interface ModalProps {
  children?: ReactNode;
  isOpen: boolean;
  setModalIsOpen?: Dispatch<React.SetStateAction<boolean>>;
}
