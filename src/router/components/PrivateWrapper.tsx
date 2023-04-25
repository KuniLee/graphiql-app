import React, { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { ERoutes } from '@/router'

type ProtectedRouteProps = {
  isAllowed: boolean
  redirectRoute?: ERoutes
}

const PrivateWrapper: FC<ProtectedRouteProps> = ({ isAllowed, redirectRoute = ERoutes.Welcome }) => {
  return isAllowed ? <Outlet /> : <Navigate to={redirectRoute} />
}

export default PrivateWrapper
