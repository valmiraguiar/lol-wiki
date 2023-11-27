import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ModalBackgroundContainer = styled.div`
  position: fixed;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  top: 50%;
  left: 50%;
  z-index: 99;
  backdrop-filter: blur(2px);
  transform: translate(-50%, -50%);
`;

export const CenteredContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 600px;
  height: 600px;
  background: #202a3b;
  z-index: 10;
  border-radius: 16px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
`;

export const StyledImg = styled(motion.img)`
  width: 100%;
  height: 400px;
  border-radius: 16px 16px 0px 0px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 24px;
  gap: 32px;
  justify-content: flex-start;
  border-radius: 0px 0px 16px 16px;
  overflow: auto;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled(motion.span)`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 48px;
  color: #ffffff;
`;

export const Subtitle = styled.span`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 24px;
  color: #ffffff;
`;

export const Text = styled.span`
  font-family: 'Roboto';
  font-weight: 100;
  font-size: 16px;
  text-align: justify;
  color: #ffffff;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 75vh;
  justify-content: center;
  align-items: center;
  background: #202a3b;
`;
