import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 900px;
  height: 600px;
  justify-content: center;
  align-items: center;
  background: #202a3b;
  border-radius: 16px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding-right: 32px;
  width: 100%;
  height: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 16px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  height: 100%;
  border-radius: 0px 16px 16px 0px;
  padding-bottom: 16px;
`;

const LoadingWrapper = styled.div`
  display: flex;
  background: #202a3b;
`;

export const StyledImg = styled.img`
  position: relative;
  height: 100%;
  left: 0;
  border-radius: 16px 0px 0px 16px;
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

export { LoadingWrapper, Subtitle, Text, Title, Container };
