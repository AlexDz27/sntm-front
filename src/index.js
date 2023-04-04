import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './css/style.scss'
import { App } from './App'
import ErrorPage from './pages/ErrorPage'
import Contact from './pages/Contact'
import { SectionAllSeasons } from './components/SectionAllSeasons'
import { Season, loader as episodesLoader } from './pages/Season'
import { Episode, loader as singleEpisodeLoader } from './pages/Episode'
import { Register } from './pages/Register'
import { Login } from './pages/Login'

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
        loader: singleEpisodeLoader
      }
    ]
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <ErrorPage />
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorPage />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)