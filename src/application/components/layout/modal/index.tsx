import React from 'react';
import {
  CenteredContainer,
  ContentContainer,
  LoadingWrapper,
  ModalBackgroundContainer,
  ModalContainer,
  StyledImg,
  Subtitle,
  Text,
  Title,
  TitleContainer,
} from './styles';
import Spinner from '../spinner';
import { ModalProps } from './modal.types';

const Modal: React.FC<ModalProps> = ({
  isLoading,
  imgSrc,
  id,
  title,
  subtitle,
  detail,
  setModalIsOpen,
}) => {
  return (
    <ModalBackgroundContainer
      onClick={() => setModalIsOpen && setModalIsOpen(false)}
    >
      <CenteredContainer>
        <ModalContainer>
          {isLoading ? (
            <LoadingWrapper>
              <Spinner indicatorColor="#FFFFFF" />
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
      </CenteredContainer>
    </ModalBackgroundContainer>
  );
};

export default Modal;
