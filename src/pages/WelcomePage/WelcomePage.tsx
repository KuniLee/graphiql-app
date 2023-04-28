import { FC } from 'react';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { ERoutes } from '@/router';
import { useTranslation } from 'react-i18next';
import { useAuthState } from '@/modules/Authentication';

const WelcomePage: FC = () => {
  const { t } = useTranslation();
  const [user] = useAuthState();
  const navigate = useNavigate();

  return (
    <div className="pt-5 text-center">
      <h1>{t('Welcome')}</h1>
      {user ? (
        <Button
          label={t('ToMain').toString()}
          onClick={() => {
            navigate(ERoutes.Main);
          }}
        />
      ) : (
        <Button
          label={t('SignIn').toString()}
          onClick={() => {
            navigate(ERoutes.Auth);
          }}
        />
      )}
    </div>
  );
};

export default WelcomePage;
