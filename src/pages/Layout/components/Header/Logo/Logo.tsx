import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Logo.module.scss';
import logo from '@/assets/graphql_logo.png';

const Logo: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.logo} onClick={() => navigate('/')}>
      <img className={styles.logo__image} alt="logo" src={logo} />
      <p className={styles.logo__text}>Graphql</p>
    </div>
  );
};

export default Logo;
