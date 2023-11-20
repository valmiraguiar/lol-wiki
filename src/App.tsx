import AppProvider from './application/providers';
import AppRoutes from './application/routes';

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
