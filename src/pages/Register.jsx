import { isPasswordStrong } from '../functions'
import { useRef, useState } from 'react'
import { BACKEND_URL } from '../env'
import { Header } from '../components/Header'

function Register() {
  const loginRef = useRef(null)
  const passwordRef = useRef(null)
  const [isBadPassword, setIsBadPassword] = useState(false)
  const badPasswordText =
    'Пароль должен содержать минимум 8 букв, хотя бы одну большую букву, хотя бы один из символов (+!@#$%^&*_-) и хотя бы одну цифру'

  function register(e) {
    e.preventDefault()

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
      body: JSON.stringify({ login, password }),
    })
      .then((response) => response.json())
      .then((response) => console.log(response))
  }

  return (
    <>
      <Header />

      <main className="main">
        <div className="main-contents">
          <div className="main-left-content auth">
            <h1 className="auth-header">Регистрация</h1>

            <form className="auth-form" onSubmit={register}>
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
