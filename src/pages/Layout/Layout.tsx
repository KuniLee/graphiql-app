import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@/pages/Layout/components/Header/Header'
import Footer from '@/pages/Layout/components/Footer/Footer'

const Layout: FC = () => {
  return (
    <>
      <Header />
      <main style={{ flexGrow: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
