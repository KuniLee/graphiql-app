import React, { FC } from 'react';
import LoginForm from '@/modules/Authentication/components/LoginForm';
import { TabView, TabPanel } from 'primereact/tabview';
import RegisterForm from '@/modules/Authentication/components/RegisterForm';
import { useTranslation } from 'react-i18next';

const Auth: FC = () => {
  const { t } = useTranslation(['auth']);

  return (
    <div className="flex my-4 align-items-center justify-content-center">
      <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <TabView>
          <TabPanel header={t('tabMenu.login')}>
            <LoginForm />
          </TabPanel>
          <TabPanel header={t('tabMenu.register')}>
            <RegisterForm />
          </TabPanel>
        </TabView>
      </div>
    </div>
  );
};

export default Auth;
