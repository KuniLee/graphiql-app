import './index.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from '@/router'
import { Provider } from 'react-redux'
import { setupStore } from '@/store'

const store = setupStore()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
)
