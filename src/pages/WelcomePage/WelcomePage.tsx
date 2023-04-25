import { FC } from 'react'
import { Button } from 'primereact/button'
import { useNavigate } from 'react-router-dom'
import { ERoutes } from '@/router'

const WelcomePage: FC = () => {
  const navigate = useNavigate()

  return (
    <>
      <Button
        label="Sign In"
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
