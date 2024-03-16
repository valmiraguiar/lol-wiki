import React from 'react';
import {
  ContentContainer,
  LoadingWrapper,
  ModalContainer,
  StyledImg,
  Subtitle,
  Text,
  Title,
  TitleContainer,
} from './styles';
import { ChampionDetailModalProps } from './types';
import Modal from '../../../../../../components/layout/modal';
import { BarLoader } from 'react-spinners';

const ChampionDetailModal: React.FC<ChampionDetailModalProps> = ({
  detail,
  id,
  imgSrc,
  subtitle,
  title,
  setModalIsOpen,
  isLoading,
}) => {
  return (
    <Modal setModalIsOpen={setModalIsOpen}>
      <ModalContainer>
        {isLoading ? (
          <LoadingWrapper>
            <BarLoader height={32} width={64} />
          </LoadingWrapper>
        ) : (
          <>
            <StyledImg src={imgSrc} layoutId={id} />
            <ContentContainer>
              <TitleContainer>
                <Title layoutId={`title-${title}`}>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
              </TitleContainer>
              <Text>{detail}</Text>
            </ContentContainer>
          </>
        )}
      </ModalContainer>
    </Modal>
  );
};

export default ChampionDetailModal;
