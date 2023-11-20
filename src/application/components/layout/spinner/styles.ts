import styled, { css } from 'styled-components';
import { SpinnerStyleProps } from './spinner.types';

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerStyled = styled.div<SpinnerStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  border-width: 0.2rem;
  border-style: solid;
  border-radius: 50%;
  position: relative;

  ${({ color, size }) => css`
    width: ${size ? size : 24}px;
    height: ${size ? size : 24}px;
    border-color: ${color ?? 'gray'} ${color ?? 'gray'} ${color ?? `gray`}
      ${color ?? `gray`};
  `}
`;

export const InStyled = styled.div<SpinnerStyleProps>`
  width: 120px;
  height: 120px;
  position: absolute;

  border-width: 0.2rem;
  border-style: solid;
  border-radius: 100%;
  -webkit-animation: spin 1.3s infinite linear;
  animation: spin 1.3s infinite linear;

  &:before {
    top: 0.063rem;
  }

  &:after {
    bottom: 0.063rem;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }

  ${({ color, size }) => css`
    width: ${size ? size : 24}px;
    height: ${size ? size : 24}px;
    border-color: ${color ?? 'gray'} transparent transparent transparent;
  `}
`;
