import { FC } from 'react';
import { ERoutes } from '@/router';
import { Trans, useTranslation } from 'react-i18next';
import { useAuthState } from '@/modules/Authentication';
import './WelcomePage.scss';
import logo from '@/assets/graphql_logo.png';

const WelcomePage: FC = () => {
  const { t } = useTranslation();
  const [user] = useAuthState();

  return (
    <div className="main h-full flex flex-column justify-content-center align-items-center text-center">
      <h2 className="font-light">{t('welcomePage.welcome')}</h2>
      <h1 className="text-5xl mt-2">GraphiQl-app</h1>
      <img className="logo mb-3" src={logo} alt="graphql" />
      {user ? (
        <a className="text-lg" href={'../' + ERoutes.Main}>
          {t('welcomePage.start')}
          <i className="pi pi-arrow-right"></i>
        </a>
      ) : (
        <p>
          <Trans i18nKey="welcomePage.continue" t={t}>
            <a key="link" className="font-bold cursor-pointer underline text-white" href={'../' + ERoutes.Auth}>
              Sign in
            </a>
            to continue
          </Trans>
        </p>
      )}
    </div>
  );
};

export default WelcomePage;
