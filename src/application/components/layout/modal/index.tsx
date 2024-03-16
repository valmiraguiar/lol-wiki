import React from 'react';
import { CenteredContainer, ModalBackgroundContainer } from './styles';
import { ModalProps } from './modal.types';

const Modal: React.FC<ModalProps> = ({ children, setModalIsOpen }) => {
  return (
    <ModalBackgroundContainer
      onClick={() => setModalIsOpen && setModalIsOpen(false)}
    >
      <CenteredContainer>{children}</CenteredContainer>
    </ModalBackgroundContainer>
  );
};

export default Modal;
