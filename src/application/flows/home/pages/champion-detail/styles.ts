import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 120vh;
  min-height: max-content;
  background-image: linear-gradient(#070914, #202a3b);
  height: 100vh;
  align-items: center;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 64px;
  background: red;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 75vh;
  justify-content: center;
  align-items: center;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  border: 1px transparent rgba(0, 0, 0, 0.01);
`;

export const StyledImg = styled.img`
  width: 50vw;
  height: 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const Divider = styled.div`
  height: 1px;
  width: 128px;
  background: white;
`;

export const Title = styled.p`
  color: white;
  font-size: 32px;
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
  text-align: center;
  justify-content: end;
  margin-top: 12vh;
`;
