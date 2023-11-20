import styled, { css } from 'styled-components';
import { TitleContainerProps, StyleImgProps } from './champions.types';

export const Container = styled.div`
  display: flex;
  padding: 32px 64px;
  background: #202a3b;
  justify-content: center;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 75vh;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: grid;
  gap: 2vw;

  @media (min-width: 327px) {
    grid-template-columns: auto auto;
  }

  @media (min-width: 700px) {
    grid-template-columns: auto auto auto auto;
  }

  @media (min-width: 1024px) {
    grid-template-columns: auto auto auto auto auto;
  }
`;

export const ItemContainer = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 12px;

  @media (max-width: 327px) {
    width: 32vw;
    height: 56vw;
  }
`;

export const TitleContainer = styled.div<TitleContainerProps>`
  position: absolute;
  align-items: center;
  display: flex;
  bottom: 0rem;
  left: 0rem;
  right: 0rem;
  border-radius: 0px 0px 12px 12px;
  pointer-events: none;

  ${({ selected }) => css`
    background: ${selected ? '#006680' : '#002833'};
  `}

  @media (min-width: 327px) {
    height: 4vh;
    padding: 1vw 4vw;
  }

  @media (min-width: 700px) {
    height: 1.8vh;
    padding: 1.5vw;
  }

  @media (min-width: 1024px) {
    height: 0.7vw;
    padding: 2vh 1vw;
  }
`;

export const Title = styled.p`
  color: #ffffff;
  font-family: 'Lora';
  font-weight: 600;
  font-size: 1.8vh;
  pointer-events: none;
`;

export const StyledImg = styled.img<StyleImgProps>`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  pointer-events: none;
  transition: all 0.2s linear;

  ${({ selected }) => css`
    scale: ${selected ? '1.05' : '1.1'};
  `}
`;
