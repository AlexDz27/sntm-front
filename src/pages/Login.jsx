import { isPasswordStrong } from '../functions'
import { useRef, useState } from 'react'
import { BACKEND_URL } from '../env'
import { Header } from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { BAD_PASSWORD_TEXT, GENERIC_SERVER_ERROR_USER_MESSAGE } from '../constants'
import { Loader } from '../components/Loader'

function Login({ isUserLoggedIn, setLogin, setIsUserLoggedIn, setToasterUserMessage }) {
  const loginRef = useRef(null)
  const passwordRef = useRef(null)
  const [isBadPassword, setIsBadPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  function login(e) {
    e.preventDefault()
    setErrors({})
    setIsBadPassword(false)

    const login = loginRef.current.value
    const password = passwordRef.current.value
    // Check if password is strong
    if (!isPasswordStrong(password)) {
      passwordRef.current.classList.add('bad-input')
      setIsBadPassword(true)

      return
    }

    setIsLoading(true)
    // Send request
    fetch(`${BACKEND_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ login, password }),
    })
      .then((response) => response.json())
      .then((response) => {
        // App-specific (user already exists) or server error (regular internal error or case when database is unresponsive - that's also error)
        if (response.status === 'error') {
          setErrors(response.userMessage.errors)
          return
        }

        // All good - user created
        setLogin(response.login)
        setIsUserLoggedIn(true)
        navigate('/')
        setToasterUserMessage(response.userMessage)
      })
      .catch((err) => {
        // Means that server is completely unresponsive or there was error with that particular endpoint
        // The error will be 'TypeError: Failed to fetch'
        setErrors(GENERIC_SERVER_ERROR_USER_MESSAGE)
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <>
      <Header />

      <main className="main">
        <div className="main-contents">
          <div className="main-left-content auth">
            <h1 className="auth-header">Залогиниться</h1>

            <form className="auth-form" onSubmit={login}>
              {errors.login && errors.login.length > 0 && <div className="format-error--bigger">{errors.login.map((e, idx) => (<p key={idx}>{e}</p>))}</div>}
              {errors.password && errors.password.length > 0 && <div className="format-error--bigger">{errors.password.map((e, idx) => (<p key={idx}>{e}</p>))}</div>}

              <div>
                Логин <br />
                <input ref={loginRef} name="login" required minLength={2} />
              </div>
              <div className="mb-small">
                Пароль <br />
                {isBadPassword && <div className="format-error">{BAD_PASSWORD_TEXT}</div>}
                <input
                  ref={passwordRef}
                  type="password"
                  name="password"
                  required
                  onClick={() => passwordRef.current.classList.remove('bad-input')}
                  onFocus={() => passwordRef.current.classList.remove('bad-input')}
                />
              </div>
              <div>
                <button type="submit">Залогиниться!</button>
              </div>

              <div>{isLoading && <Loader />}</div>
            </form>
          </div>
        </div>
      </main>

      {/* Footer сайта */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-container">
            <p className="footer-text">2022, бла бла бла, мы молодцы </p>
          </div>
        </div>
      </footer>
      {/* //Footer сайта */}
    </>
  )
}

export { Login }
