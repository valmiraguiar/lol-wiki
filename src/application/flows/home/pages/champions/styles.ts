import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  background: gold;
  margin: 12px;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: grid;
  background: blue;
  gap: 2vw;
  
  @media (min-width: 327px) {
    grid-template-columns: auto auto;
  };

  @media (min-width: 700px) {
    grid-template-columns: auto auto auto auto;
  };

  @media (min-width: 1024px) {
    grid-template-columns: auto auto auto auto auto;
  };
`;

export const ItemContainer = styled.div`
  position: relative;
  cursor: pointer;

  @media (max-width: 327px) {
    width: 32vw;
    height: 56vw;
  };
`;

export const TitleContainer = styled.div`
  padding: 1.2vw;
  position: absolute;
  align-items: center;
  display: flex;
  height: 1.2vw;
  bottom: 0rem;
  left: 0rem;
  right: 0rem;
  background: #006680;
  border-radius: 0px 0px 0px 0px;
`;

export const Title = styled.text`
  color: #FFFFFF;
  font-family: 'Lora';
  font-weight: 600;
  font-size: 1vw;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;