import Header from '../../components/layout/header';
import { LayoutProviderProps } from './layout.types';

const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default LayoutProvider;
