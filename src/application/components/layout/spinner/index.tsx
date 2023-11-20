import React from 'react';
import { SpinnerContainer, InStyled, SpinnerStyled } from './styles';
import { SpinnerProps } from './spinner.types';

const Spinner: React.FC<SpinnerProps> = ({
  lineColor,
  indicatorColor,
  size,
}) => {
  return (
    <SpinnerContainer>
      <SpinnerStyled color={lineColor} size={size ?? 24}>
        <InStyled color={indicatorColor} size={size ?? 24} />
      </SpinnerStyled>
    </SpinnerContainer>
  );
};

export default Spinner;
