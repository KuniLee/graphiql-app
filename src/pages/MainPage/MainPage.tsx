import { FC, lazy } from 'react';
import { useAuthState } from '@/modules/Authentication';
import { Navigate } from 'react-router-dom';
import { ERoutes } from '@/router';
import SuspenseSideBar from './components/SuspeseSidebar';
import GraphQl from '@/modules/GraphiQl';

const Docs = lazy(() => import('@/modules/Documentation'));

const MainPage: FC = () => {
  const [user] = useAuthState();

  if (!user) return <Navigate to={'../' + ERoutes.Welcome} />;

  return (
    <>
      <SuspenseSideBar>
        <Docs />
      </SuspenseSideBar>
      <GraphQl />
    </>
  );
};

export default MainPage;
