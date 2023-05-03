import { FC, lazy } from 'react';
import { useAuthState } from '@/modules/Authentication';
import { Navigate } from 'react-router-dom';
import { ERoutes } from '@/router';
import { Button } from 'primereact/button';
import { useAppDispatch } from '@/hooks/redux';
import { openDocs } from '@/modules/GraphiQl';
import SuspenseSideBar from './components/SuspeseSidebar';

const Docs = lazy(() => import('@/modules/Documentation'));

const MainPage: FC = () => {
  const [user] = useAuthState();
  const dispatch = useAppDispatch();

  if (!user) return <Navigate to={'../' + ERoutes.Welcome} />;

  return (
    <div className="card flex justify-content-center">
      <SuspenseSideBar>
        <Docs />
      </SuspenseSideBar>
      <Button icon="pi pi-arrow-right" onClick={() => dispatch(openDocs())} />
    </div>
  );
};

export default MainPage;
