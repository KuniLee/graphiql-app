import React, { FC } from 'react'
import { useAuth } from '@/modules/Authentication'
import { Navigate } from 'react-router-dom'
import { ERoutes } from '@/router'

const MainPage: FC = () => {
  const { isAuth } = useAuth()

  if (!isAuth) return <Navigate to={'../' + ERoutes.Auth} />

  return <div>Main</div>
}

export default MainPage
