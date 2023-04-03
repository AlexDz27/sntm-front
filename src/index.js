import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './css/style.scss'
import { App } from './App'
import ErrorPage from './ErrorPage'
import Contact from './Contact'
import { SectionAllSeasons } from './SectionAllSeasons'
import { Season, loader as episodesLoader } from './Season'
import { Episode, loader as episodeLoader } from './Episode'

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
        path: '/season/:seasonNumber',
        element: <Season />,
        loader: episodesLoader
      },

      {
        path: '/season/:seasonNumber/episode/:episodeNumber',
        element: <Episode />,
        loader: episodeLoader
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