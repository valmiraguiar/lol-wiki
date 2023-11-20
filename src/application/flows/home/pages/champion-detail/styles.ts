import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-image: linear-gradient(#070914, #202a3b);
  height: 100vh;
  align-items: center;
  padding: 0 6vw;
`;

export const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background: black;
  border: 1px transparent rgba(0, 0, 0, 0.01);
`;

export const StyledImg = styled.img`
  width: 50vw;
  height: 100%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 30vw;
  margin: 0px 0px 0px 4vw;
  overflow: scroll;

  @media (min-width: 327px) {
    height: 20vw;
  }

  @media (min-width: 700px) {
    height: 20vw;
  }

  @media (min-width: 1024px) {
    height: 30vw;
  }
`;

export const Title = styled.p`
  color: white;
  font-size: 5vw;
  font-family: 'Lora';
  font-weight: 600;
`;

export const Subtitle = styled.p`
  color: white;
  font-size: 3vw;
  font-family: 'Lora';
  font-weight: 400;
`;

export const StyledText = styled.p`
  color: white;
  font-size: 1.2vw;
  text-align: right;
  justify-content: end;
  margin-top: 12vh;
`;
