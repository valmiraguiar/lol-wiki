import { BrowserRouter } from "react-router-dom";
import { IAppProvider } from "./providers.types";

const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  );
};

export default AppProvider;