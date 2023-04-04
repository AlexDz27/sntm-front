import { isPasswordStrong } from '../functions'
import { useRef, useState } from 'react'
import { BACKEND_URL } from '../env'
import { Header } from '../components/Header'
import { GENERIC_SERVER_ERROR_USER_MESSAGE } from '../constants'

function Register() {
  const loginRef = useRef(null)
  const passwordRef = useRef(null)
  const [isBadPassword, setIsBadPassword] = useState(false)
  const badPasswordText =
    'Пароль должен содержать минимум 8 букв, хотя бы одну большую букву, хотя бы один из символов (+!@#$%^&*_-) и хотя бы одну цифру'
  const [errorText, setErrorText] = useState(null)

  function register(e) {
    e.preventDefault()
    setErrorText(null)
    setIsBadPassword(false)

    const login = loginRef.current.value
    const password = passwordRef.current.value
    // Check if password is strong
    if (!isPasswordStrong(password)) {
      passwordRef.current.classList.add('bad-input')
      setIsBadPassword(true)

      return
    }

    // Send request
    fetch(`${BACKEND_URL}/register`, {
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
          setErrorText(response.userMessage)
          return
        }

        // 3. all good - user created -> here i should redirect probably and then display username on homepage
        // ...
      })
      .catch((err) => {
        // Means that server is completely unresponsive or there was error with that particular endpoint
        if (err.toString() === 'TypeError: Failed to fetch') {
          setErrorText(GENERIC_SERVER_ERROR_USER_MESSAGE)
        }
      })
  }

  return (
    <>
      <Header />

      <main className="main">
        <div className="main-contents">
          <div className="main-left-content auth">
            <h1 className="auth-header">Регистрация</h1>

            <form className="auth-form" onSubmit={register}>
              {
                errorText && (
                  <div className="format-error--bigger">
                    {errorText}
                  </div>
                )
              }
              
              <div>
                Логин <br />
                <input ref={loginRef} name="login" required minLength={2} />
              </div>
              <div className="mb-small">
                Пароль <br />
                {isBadPassword && (
                  <div className="format-error">{badPasswordText}</div>
                )}
                <input
                  ref={passwordRef}
                  type="password"
                  name="password"
                  required
                  onClick={() =>
                    passwordRef.current.classList.remove('bad-input')
                  }
                  onFocus={() =>
                    passwordRef.current.classList.remove('bad-input')
                  }
                />
              </div>
              <div>
                <button type="submit">Зарегистрироваться!</button>
              </div>
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

export { Register }
