import React from 'react';
import { Container, StyledText } from './styles';
import { useNavigate } from 'react-router-dom';
import ChampionsRouter from '../../../flows/home/pages/champions/router';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleTextClick = () => {
    navigate(ChampionsRouter.path);
  };

  return (
    <Container>
      <StyledText onClick={handleTextClick}>League of Legends Wiki</StyledText>
    </Container>
  );
};

export default Header;
