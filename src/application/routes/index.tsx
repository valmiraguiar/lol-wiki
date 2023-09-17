import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ChampionsRouter from '../flows/home/pages/champions/router';
import ChampionDetailRouter from '../flows/home/pages/champion-detail/router';
import { PATH } from './path';
import { RenderPage } from './register';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        index
        key={ChampionsRouter.path}
        element={RenderPage(ChampionsRouter.Page)}
        path={ChampionsRouter.path}
      />

      <Route
        key={ChampionDetailRouter.path}
        element={RenderPage(ChampionDetailRouter.Page)}
        path={ChampionDetailRouter.path}
      />

      <Route path="/" element={<Navigate to={PATH.CHAMPIONS} />} />
    </Routes>
  );
};

export default AppRoutes;
