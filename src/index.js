import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/style.scss'
import { App } from './App'
import { getCookie } from './functions'

const cookieLogin = getCookie('login')
const cookieIsUserLoggedIn = cookieLogin ? true : false

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App cookieLogin={cookieLogin} cookieIsUserLoggedIn={cookieIsUserLoggedIn} />
  </React.StrictMode>
)