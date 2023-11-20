import { styled } from 'styled-components';

interface ContainerProps {
  width?: number;
}

export const Container = styled.header<ContainerProps>`
  top: 0px;
  left: 0px;
  right: 0px;
  height: 68px;
  display: flex;
  padding-left: 18px;
  align-items: center;
  background: #232323;
`;

export const StyledText = styled.p`
  font-family: 'Montserrat';
  color: #ffffff;
  font-size: 24px;
  font-weight: 600;

  cursor: pointer;
`;
