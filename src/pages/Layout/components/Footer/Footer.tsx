import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import classes from './Footer.module.scss'

const Footer: FC = () => {
  const { t } = useTranslation(['footer'])

  return <footer className={classes.footer}>{t('Title')}</footer>
}

export default Footer
