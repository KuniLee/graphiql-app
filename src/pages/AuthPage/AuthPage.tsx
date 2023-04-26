import React from 'react'
import { ERoutes } from '@/router'
import { Navigate } from 'react-router-dom'
import Auth, { useAuthState } from '@/modules/Authentication'

const AuthPage = () => {
  const [user] = useAuthState()

  if (user) return <Navigate to={ERoutes.Welcome} />

  return <Auth></Auth>
}

export default AuthPage
