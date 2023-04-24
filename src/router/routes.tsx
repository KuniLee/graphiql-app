import React, { ReactNode } from 'react'
import NotFound from '../pages/NotFound'
import WelcomePage from '@/pages/WelcomePage'
import MainPage from '@/pages/MainPage'
import AuthPage from '@/pages/AuthPage'

export enum ERoutes {
  Welcome = '/',
  Main = 'main',
  Auth = 'auth',
}

type Route = {
  path: string
  element: ReactNode
}

export const routes: Route[] = [
  { path: ERoutes.Welcome, element: <WelcomePage /> },
  { path: ERoutes.Main, element: <MainPage /> },
  { path: ERoutes.Auth, element: <AuthPage /> },
  { path: '*', element: <NotFound /> },
]
