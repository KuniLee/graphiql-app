import { FC } from 'react';
import { useAuthState } from '@/modules/Authentication';
import { Navigate } from 'react-router-dom';
import { ERoutes } from '@/router';

const MainPage: FC = () => {
  const [user] = useAuthState();

  if (!user) return <Navigate to={'../' + ERoutes.Welcome} />;

  return <div>Main</div>;
};

export default MainPage;
