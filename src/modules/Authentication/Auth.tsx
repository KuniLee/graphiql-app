import React, { FC, useRef } from 'react';
import LoginForm from '@/modules/Authentication/components/LoginForm';
import { TabView, TabPanel } from 'primereact/tabview';
import RegisterForm from '@/modules/Authentication/components/RegisterForm';
import { useTranslation } from 'react-i18next';
import { Toast } from 'primereact/toast';

const Auth: FC = () => {
  const { t } = useTranslation(['auth']);
  const toast = useRef<Toast>(null);

  return (
    <div className="flex my-4 align-items-center justify-content-center">
      <div className="surface-card md:p-4 py-1 shadow-2 border-round w-full lg:w-6">
        <TabView>
          <TabPanel header={t('tabMenu.login')}>
            <LoginForm errToast={toast} />
          </TabPanel>
          <TabPanel header={t('tabMenu.register')}>
            <RegisterForm errToast={toast} />
          </TabPanel>
        </TabView>
        <Toast ref={toast} />
      </div>
    </div>
  );
};

export default Auth;
