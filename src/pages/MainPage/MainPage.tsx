import React, { FC, lazy, useState } from 'react';
import { useAuthState } from '@/modules/Authentication';
import { Navigate } from 'react-router-dom';
import { ERoutes } from '@/router';
import { Button } from 'primereact/button';
import { SuspenseSideBar } from '@/pages/MainPage/hoc/SuspeseSidebar';

const Docs = lazy(() => import('@/modules/Documentation'));

const MainPage: FC = () => {
  const [user] = useAuthState();
  const [visible, setVisible] = useState(false);

  if (!user) return <Navigate to={'../' + ERoutes.Welcome} />;

  return (
    <div className="card flex justify-content-center">
      <SuspenseSideBar
        visible={visible}
        onHide={() => {
          setVisible(false);
        }}>
        <Docs />
      </SuspenseSideBar>
      <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} />
    </div>
  );
};

export default MainPage;
