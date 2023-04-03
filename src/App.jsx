import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Home } from './Home'

function App() {
  // Fix for React Router's behavior that browser viewport remains in same place after going to another page
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="app" id="app">
      <Home />
    </div>
  )
}

export { App }
