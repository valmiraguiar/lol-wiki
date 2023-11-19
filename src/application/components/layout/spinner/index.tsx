import React from 'react';
import { SpinnerContainer, InStyled, SpinnerStyled } from './styles';

const Spinner: React.FC = () => {
  return (
    <SpinnerContainer>
      <SpinnerStyled size={24}>
        <InStyled color="#FFFFFF" size={24} />
      </SpinnerStyled>
    </SpinnerContainer>
  );
};

export default Spinner;
