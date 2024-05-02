import React from 'react';
import {
  Container,
  ContentContainer,
  LoadingWrapper,
  StyledImg,
  Subtitle,
  Text,
  TextContainer,
  Title,
  TitleContainer,
} from './styles';
import { ChampionDetailModalProps } from './types';
import { BarLoader } from 'react-spinners';
import Modal from '../../../../../../components/layout/modal';

const ChampionDetailModal: React.FC<ChampionDetailModalProps> = ({
  detail,
  id,
  imgSrc,
  subtitle,
  title,
  isOpen,
  setModalIsOpen,
  isLoading,
}) => {
  return (
    <Modal isOpen={isOpen} setModalIsOpen={setModalIsOpen}>
      <Container>
        {isLoading ? (
          <LoadingWrapper>
            <BarLoader color="#ffffff" />
          </LoadingWrapper>
        ) : (
          <ContentContainer key={id}>
            <StyledImg src={imgSrc} alt={`${id}-${title}-${subtitle}-img`} />

            <TextContainer>
              <TitleContainer>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
              </TitleContainer>
              <Text>{detail}</Text>
            </TextContainer>
          </ContentContainer>
        )}
      </Container>
    </Modal>
  );
};

export default ChampionDetailModal;
