import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import Contact from './pages/Contact'
import { SectionAllSeasons } from './components/SectionAllSeasons'
import { Season, loader as episodesLoader } from './pages/Season'
import { Episode, loader as singleEpisodeLoader } from './pages/Episode'
import { Register } from './pages/Register'
import { Login } from './pages/Login'

// TODO: props, then useContext
function App({ cookieLogin, cookieIsUserLoggedIn }) {
  const [login, setLogin] = useState(cookieLogin)
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(cookieIsUserLoggedIn)
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home login={login} isUserLoggedIn={isUserLoggedIn} />,
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
      element: <Register isUserLoggedIn={isUserLoggedIn} setLogin={(login) => setLogin(login)} setIsUserLoggedIn={(value) => setIsUserLoggedIn(value)} />,
      errorElement: <ErrorPage />
    },
    {
      path: '/login',
      element: <Login isUserLoggedIn={isUserLoggedIn} setLogin={(login) => setLogin(login)} setIsUserLoggedIn={(value) => setIsUserLoggedIn(value)} />,
      errorElement: <ErrorPage />
    },
  ])

  return (
    <div className="app" id="app">
      <RouterProvider router={router} />
    </div>
  )
}

export { App }
