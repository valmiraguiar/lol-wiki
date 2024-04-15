import React from 'react';
import { ModalBackgroundContainer, ModalContainer } from './styles';
import { ModalProps } from './modal.types';
import { AnimatePresence } from 'framer-motion';

const Modal: React.FC<ModalProps> = ({ children, isOpen, setModalIsOpen }) => {
  const backdrop = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };

  const modal = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalBackgroundContainer
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={() => setModalIsOpen && setModalIsOpen(false)}
        >
          <ModalContainer className="modal" variants={modal}>
            {children}
          </ModalContainer>
        </ModalBackgroundContainer>
      )}
    </AnimatePresence>
  );
};

export default Modal;
