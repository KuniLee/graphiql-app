import React from 'react'
import { ERoutes } from '@/router'
import { Navigate } from 'react-router-dom'
import Auth, { useAuth } from '@/modules/Authentication'

const AuthPage = () => {
  const { isAuth } = useAuth()

  if (isAuth) return <Navigate to={ERoutes.Welcome} />

  return (
    <>
      <span>{String(isAuth)}</span>
      <Auth></Auth>
    </>
  )
}

export default AuthPage
