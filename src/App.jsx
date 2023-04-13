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
import { AppContext } from './context'

function App({ cookieLogin, cookieIsUserLoggedIn }) {
  const [login, setLogin] = useState(cookieLogin)
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(cookieIsUserLoggedIn)

  const [toasterUserMessage, setToasterUserMessage] = useState(null)
  const [isToasterShown, setIsToasterShown] = useState(false)
  useEffect(() => {
    if (toasterUserMessage?.length > 0) {
      setIsToasterShown(true)
      setTimeout(() => setIsToasterShown(false), 3000)
    }
  }, [toasterUserMessage])

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
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
    <AppContext.Provider value={{auth: {login, isUserLoggedIn}}}>
      <div className="app" id="app">
        <Toaster userMessage={toasterUserMessage} isShown={isToasterShown} />
        <RouterProvider router={router} />
      </div>
    </AppContext.Provider>
  )
}

export { App }
