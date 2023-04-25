import React from 'react'
import { Button } from 'primereact/button'
import { ERoutes } from '@/router'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '@/modules/Authentication'
import { useAppDispatch } from '@/hooks/redux'
import { changeAuth } from '@/modules/Authentication/store/authSlice'

const AuthPage = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { isAuth } = useAuth()

  if (isAuth) return <Navigate to={ERoutes.Welcome} />

  return (
    <Button
      label="Sign In"
      onClick={() => {
        dispatch(changeAuth())
        navigate('../' + ERoutes.Main)
      }}
    />
  )
}

export default AuthPage
