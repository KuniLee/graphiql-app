import React from 'react';
import { ERoutes } from '@/router';
import { Navigate } from 'react-router-dom';
import Auth, { useAuthState } from '@/modules/Authentication';

const AuthPage = () => {
  const [user] = useAuthState();

  return user ? <Navigate to={ERoutes.Welcome} /> : <Auth />;
};

export default AuthPage;
