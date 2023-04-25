import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'

const Layout: FC = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <footer>Футер</footer>
    </>
  )
}

export default Layout
