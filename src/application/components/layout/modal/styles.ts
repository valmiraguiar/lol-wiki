import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ModalBackgroundContainer = styled(motion.div)`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  z-index: 99;
`;

export const ModalContainer = styled(motion.div)`
  display: flex;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
`;
