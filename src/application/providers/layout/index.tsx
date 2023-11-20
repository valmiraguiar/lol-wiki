import Header from '../../components/layout/header';
import { LayoutProviderProps } from './layout.types';
import { Container } from './styles';

const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

export default LayoutProvider;
