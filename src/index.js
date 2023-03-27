import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './css/style.scss'
import { App } from './App'
import ErrorPage from './ErrorPage'
import Contact from './Contact'
import { SectionAllSeasons } from './SectionAllSeasons'
import { Season1 } from './Seasons/Season1'
import { Season1Episode1 } from './Season1Episode1'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <SectionAllSeasons />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/season-1',
        element: <Season1 />
      },
      {
        path: '/season-1/episode-1',
        element: <Season1Episode1 />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)