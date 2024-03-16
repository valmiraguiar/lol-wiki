import { Dispatch, ReactNode } from 'react';

export interface ModalProps {
  children?: ReactNode;
  setModalIsOpen?: Dispatch<React.SetStateAction<boolean>>;
}
