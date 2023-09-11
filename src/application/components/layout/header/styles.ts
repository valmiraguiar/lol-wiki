import { styled } from "styled-components";

interface ContainerProps {
  width?: number;
}

export const Container = styled.header<ContainerProps>`
  top: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  height: 68px;
  padding-top: 8px;
  padding-left: 12px;
  background: gold;
  text-align: justify;
`;

export const StyledText = styled.text`
  font-family: 'Roboto';
  font-size: 48px;
  font-weight: 500;
`;