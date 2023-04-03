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
import { Season, loader as episodesLoader } from './Season'
import { Episode } from './Episode'

// TODO: chane App to Root to describe Rootinness of the routes?
// TODO: use placeholder instead of season-1, season-2, ...
// TODO: season-1 inst of season/1
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
        element: <Episode />
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