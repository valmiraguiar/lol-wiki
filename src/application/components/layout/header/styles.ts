import { styled } from "styled-components";

interface ContainerProps {
  width?: number;
}

export const Container = styled.header<ContainerProps>`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  height: 68px;
  background: gold;
`;