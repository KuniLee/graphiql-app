import React from 'react'
import { ERoutes } from '@/router'
import { Navigate } from 'react-router-dom'
import Auth, { useAuth } from '@/modules/Authentication'

const RegisterForm = () => {
  const { isAuth } = useAuth()

  if (isAuth) return <Navigate to={ERoutes.Welcome} />

  return <Auth></Auth>
}

export default RegisterForm
