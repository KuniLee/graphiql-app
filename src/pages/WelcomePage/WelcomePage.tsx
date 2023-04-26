import { FC } from 'react'
import { Button } from 'primereact/button'
import { useNavigate } from 'react-router-dom'
import { ERoutes } from '@/router'
import { useTranslation } from 'react-i18next'

const WelcomePage: FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <>
      <Button
        label={t('SignIn').toString()}
        onClick={() => {
          navigate(ERoutes.Auth)
        }}
      />
      <Button
        label="To Main"
        onClick={() => {
          navigate(ERoutes.Main)
        }}
      />
    </>
  )
}

export default WelcomePage
