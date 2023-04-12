import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BACKEND_URL } from '../env'
import { Loader } from '../components/Loader'
import { GENERIC_SERVER_ERROR_USER_MESSAGE } from '../constants'

function Logout({ logOut }) {
  const [errorText, setErrorText] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`${BACKEND_URL}/logout`, {credentials: 'include'})
      .then((response) => {
        logOut()
        navigate('/')
      })
      .catch((err) => {
        // Means that server is completely unresponsive or there was error with that particular endpoint
        // The error will be 'TypeError: Failed to fetch'
        setErrorText(GENERIC_SERVER_ERROR_USER_MESSAGE)
      })
  }, [])

  if (errorText) {
    return (
      <main>
        <div>
          <Loader />
        </div>
        <div>
          {errorText}
        </div>
      </main>
    )
  }

  return <Loader />
}

export { Logout }
