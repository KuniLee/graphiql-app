import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthPage from '@/pages/AuthPage';
import WelcomePage from '@/pages/WelcomePage';
import MainPage from '@/pages/MainPage';
import NotFound from '@/pages/NotFound';
import Layout from '@/pages/Layout';

export enum ERoutes {
  Welcome = '/',
  Main = 'grahiql',
  Auth = 'auth',
}

const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ERoutes.Welcome} element={<Layout />}>
          <Route index element={<WelcomePage />} />
          <Route path={ERoutes.Auth} element={<AuthPage />} />
          <Route path={ERoutes.Main} element={<MainPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
