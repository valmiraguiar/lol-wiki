import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
`;

export const Wrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  width: 180px;
  height: 320px;
  flex: 1 0 24%;
`;

export const ItemContainer = styled.div`
  width: 240px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: lightgray;
  cursor: pointer;
`;

export const Title = styled.text`
  font-size: 32px;
`;

export const StyledImg = styled.img`
  width: 196px;
  height: 196px;
  margin: 12px;
  border-radius: 12px;
`;