import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton';
import { Button } from 'primereact/button';
import { ERoutes } from '@/router';
import { useAuthState } from '@/modules/Authentication';
import { useSignOut } from '@/modules/Authentication';
import { useNavigate } from 'react-router-dom';

import Logo from './Logo/Logo';
import styles from './Header.module.scss';

const Header: FC = () => {
  const { t, i18n } = useTranslation(['header']);
  const navigate = useNavigate();
  const [signOut] = useSignOut();

  const [user] = useAuthState();

  const changeLang = ({ value }: SelectButtonChangeEvent) => {
    i18n.changeLanguage(value);
  };

  const buttonClickHandle = async () => {
    if (user) {
      await signOut();
      navigate(ERoutes.Welcome);
    } else navigate(ERoutes.Auth);
  };

  return (
    <header className={styles.header}>
      <Logo />
      <div className="container flex gap-2 justify-content-end align-items-center">
        <SelectButton
          options={[
            { label: 'EN', value: 'en' },
            { label: 'RU', value: 'ru' },
          ]}
          value={i18n.language}
          onChange={changeLang}
        />
        <Button label={t(user ? 'LogOut' : 'SignIn/Up').toString()} onClick={buttonClickHandle} />
      </div>
    </header>
  );
};

export default Header;
