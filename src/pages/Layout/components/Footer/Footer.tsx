import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '@/assets/logo_rs.png';

import classes from './Footer.module.scss';

const Footer: FC = () => {
  const { t } = useTranslation(['footer']);

  return (
    <footer className={classes.footer}>
      <p className={classes.footer__year}>© 2023</p>
      <div className={classes.footer__content}>
        <a href="https://github.com/KuniLee" target="_blank" rel="noreferrer">
          {t('Yura')}
        </a>
        <p>|</p>
        <a href="https://github.com/valr0lipsk" target="_blank" rel="noreferrer">
          {t('Lera')}
        </a>
        <p>|</p>
        <a href="https://github.com/LoginovskyMax" target="_blank" rel="noreferrer">
          {t('Max')}
        </a>
      </div>
      <a href="https://rs.school/react/" target="_blank" rel="noreferrer">
        <img src={logo} alt="logo" className={classes.footer__logo} />
      </a>
    </footer>
  );
};

export default Footer;
