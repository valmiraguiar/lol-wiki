import { motion } from 'framer-motion';
import styled from 'styled-components';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 24px;
  gap: 32px;
  justify-content: flex-start;
  border-radius: 0px 0px 16px 16px;
  overflow: auto;
`;

const LoadingWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 75vh;
  justify-content: center;
  align-items: center;
  background: #202a3b;
`;

const ModalContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background: #202a3b;
  z-index: 10;
  border-radius: 16px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);

  width: 400px;
  height: 600px;

  @media (min-width: 328px) {
    width: 300px;
    height: 600px;
  }

  @media (min-width: 600px) {
    width: 600px;
    height: 600px;
  }
`;

const StyledImg = styled(motion.img)`
  width: 100%;
  height: 400px;
  border-radius: 16px 16px 0px 0px;
`;

const Subtitle = styled.span`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 24px;
  color: #ffffff;
`;

const Text = styled.span`
  font-family: 'Roboto';
  font-weight: 100;
  font-size: 16px;
  text-align: justify;
  color: #ffffff;
`;

const Title = styled(motion.span)`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 48px;
  color: #ffffff;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export {
  ContentContainer,
  LoadingWrapper,
  ModalContainer,
  StyledImg,
  Subtitle,
  Text,
  Title,
  TitleContainer,
};