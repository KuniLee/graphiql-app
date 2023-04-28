import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import classes from './Footer.module.scss';

const Footer: FC = () => {
  const { t } = useTranslation(['footer']);

  return (
    <footer className={classes.footer}>
      <div className="container">{t('Title')}</div>
    </footer>
  );
};

export default Footer;
