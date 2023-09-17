import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 32px 64px;
  justify-content: center;
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

  @media (max-width: 327px) {
    width: 32vw;
    height: 56vw;
  }
`;

export const TitleContainer = styled.div`
  position: absolute;
  align-items: center;
  display: flex;
  bottom: 0rem;
  left: 0rem;
  right: 0rem;
  background: #006680;
  border-radius: 0px 0px 12px 12px;

  @media (min-width: 327px) {
    height: 4.5vh;
    padding: 1.7vw;
  }

  @media (min-width: 700px) {
    height: 2.5vh;
    padding: 1.5vw;
  }

  @media (min-width: 1024px) {
    height: 2.5vh;
    padding: 1.2vw;
  }
`;

export const Title = styled.text`
  color: #ffffff;
  font-family: 'Lora';
  font-weight: 600;
  font-size: 2.5vh;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;
