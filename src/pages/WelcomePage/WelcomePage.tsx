import { FC } from 'react';
import { ERoutes } from '@/router';
import { Trans, useTranslation } from 'react-i18next';
import { useAuthState } from '@/modules/Authentication';
import classes from './WelcomePage.module.scss';
import logo from '@/assets/graphql_logo.png';
import { Link } from 'react-router-dom';

const WelcomePage: FC = () => {
  const { t } = useTranslation();
  const [user] = useAuthState();

  return (
    <div className="flex w-full m-2 flex-column justify-content-center align-items-center text-center">
      <h2 className="font-light">{t('welcomePage.welcome')}</h2>
      <h1 className="text-3xl md:text-5xl mt-2">GraphiQl-app</h1>
      <img className={classes.logo + ' rotation mb-3'} src={logo} alt="graphql" />
      {user ? (
        <Link className="text-lg" to={'../' + ERoutes.Main}>
          {t('welcomePage.start')}
          <i className={classes.arrow + ' pi pi-arrow-right'}></i>
        </Link>
      ) : (
        <p>
          <Trans i18nKey="welcomePage.continue" t={t}>
            <Link className={classes.link + ' font-bold cursor-pointer underline text-white'} to={'../' + ERoutes.Auth}>
              Sign in
            </Link>
            to continue
          </Trans>
        </p>
      )}
    </div>
  );
};

export default WelcomePage;
