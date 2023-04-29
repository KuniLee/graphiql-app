import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/pages/Layout/components/Header/Header';
import Footer from '@/pages/Layout/components/Footer/Footer';
import './Layout.scss';
import { useAuthState } from '@/modules/Authentication';
import { ProgressSpinner } from 'primereact/progressspinner';

const Layout: FC = () => {
  const loading = useAuthState()[1];

  return loading ? (
    <ProgressSpinner />
  ) : (
    <>
      <Header />
      <main className="container h-full">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
