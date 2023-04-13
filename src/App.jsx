import { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import Contact from './pages/Contact'
import { SectionAllSeasons } from './components/SectionAllSeasons'
import { Season, loader as episodesLoader } from './pages/Season'
import { Episode, loader as singleEpisodeLoader } from './pages/Episode'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { Logout } from './pages/Logout'
import { Toaster } from './components/Toaster'

// TODO: props, then useContext
function App({ cookieLogin, cookieIsUserLoggedIn }) {
  const [login, setLogin] = useState(cookieLogin)
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(cookieIsUserLoggedIn)

  const [toasterUserMessage, setToasterUserMessage] = useState(null)
  const [isToasterShown, setIsToasterShown] = useState(false)
  useEffect(() => {
    if (toasterUserMessage?.length > 0) {
      setIsToasterShown(true)
      setTimeout(() => {
        setIsToasterShown(false)
      }, 3000)
    }
  }, [toasterUserMessage])

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home login={login} isUserLoggedIn={isUserLoggedIn} />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <SectionAllSeasons />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },

        {
          path: '/season/:seasonNumber',
          element: <Season />,
          loader: episodesLoader,
        },

        {
          path: '/season/:seasonNumber/episode/:episodeNumber',
          element: <Episode />,
          loader: singleEpisodeLoader,
        },
      ],
    },
    {
      path: '/register',
      element: (
        <Register
          isUserLoggedIn={isUserLoggedIn}
          setLogin={(login) => setLogin(login)}
          setIsUserLoggedIn={(value) => setIsUserLoggedIn(value)}
          setToasterUserMessage={(userMessage) => setToasterUserMessage(userMessage)}
        />
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: '/login',
      element: (
        <Login
          isUserLoggedIn={isUserLoggedIn}
          setLogin={(login) => setLogin(login)}
          setIsUserLoggedIn={(value) => setIsUserLoggedIn(value)}
          setToasterUserMessage={(userMessage) => setToasterUserMessage(userMessage)}
        />
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: '/logout',
      element: (
        <Logout
          logOut={() => {
            setLogin(null)
            setIsUserLoggedIn(false)
          }}
        />
      ),
      errorElement: <ErrorPage />,
    },
  ])

  return (
    <div className="app" id="app">
      <Toaster userMessage={toasterUserMessage} isShown={isToasterShown} />
      <RouterProvider router={router} />
    </div>
  )
}

export { App }
