import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './css/style.scss'
import { App } from './App'
import ErrorPage from './ErrorPage'
import Contact from './Contact'
import { SectionAllSeasons } from './SectionAllSeasons'
import season1episodes from './jsonStorage/season1episodes.json'
import season2episodes from './jsonStorage/season2episodes.json'
import season3episodes from './jsonStorage/season3episodes.json'
import { Season } from './Season'
import { Season1Episode1 } from './Season1Episode1'

// TODO: chane App to Root to describe Rootinness of the routes?
// TODO: use placeholder instead of season-1, season-2, ...
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
        element: <Season number={1} episodes={season1episodes} />
      },
      {
        path: '/season-2',
        element: <Season number={2} episodes={season2episodes} />
      },
      {
        path: '/season-3',
        element: <Season number={3} episodes={season3episodes} />
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