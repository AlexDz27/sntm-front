import { Link } from 'react-router-dom'
import registrationPic from './img/header/registr.svg'
import { isPasswordStrong } from './functions'
import { useRef, useState } from 'react'
import { BACKEND_URL } from './env'

function Login() {
  const loginRef = useRef(null)
  const passwordRef = useRef(null)
  const [isBadPassword, setIsBadPassword] = useState(false)
  const badPasswordText =
    'Пароль должен содержать минимум 8 букв, хотя бы одну большую букву, хотя бы один из символов (+!@#$%^&*_-) и хотя бы одну цифру'

  function login(e) {
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
    // fetch(`${BACKEND_URL}/login`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ login, password }),
    // })
    //   .then((response) => response.json())
    //   .then((response) => console.log(response))
  }

  return (
    <>
      <header className="header">
        <div className="header-content">
          <div className="header-container">
            <div className="header-block">
              {/* block nav */}
              <nav className="navbar-none">
                <ul className="nav-style">
                  {/* TODO: proper links for this mobile menu */}
                  <li className="menu-li">
                    <Link to="/todo" className="links-menu">
                      Регистрация
                    </Link>
                  </li>
                  <li className="menu-li">
                    <Link to="/todo" className="links-menu">
                      Все сезоны
                    </Link>
                  </li>
                  <li className="menu-li">
                    <Link to="/todo" className="links-menu">
                      ТОП-10 серий
                    </Link>
                  </li>
                  <li className="menu-li">
                    <Link to="/todo" className="links-menu">
                      Случайная серия
                    </Link>
                  </li>
                  <li className="menu-li">
                    <Link to="/todo" className="links-menu">
                      Персонажи
                    </Link>
                  </li>
                  <li className="menu-li">
                    <Link to="/todo" className="links-menu">
                      Все мультсериалы
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* //block nav */}

              {/* ТОП 10 серий */}
              <div className="content-top hidden">
                <Link to="/top-10" className="top-link">
                  top-10
                </Link>
              </div>
              {/* //ТОП 10 серий */}

              {/* Заголовок сайта */}
              <div className="content-title">
                <Link to="/" className="title-link">
                  <h1 className="link-title">brickleberry</h1>
                </Link>
              </div>
              {/* //Заголовок сайта */}

              {/* Регистрация */}
              <div className="content-reg">
                <img src={registrationPic} alt="Регистрация" className="header-reg" />
              </div>
              {/* //Регистрация */}

              {/* Навигация для моб версии */}
              <button className="nav-toggle">
                <div className="menu-icon-wrapper">
                  <div className="menu-icon"></div>
                </div>
              </button>
              {/* //Навигация для моб версии */}
            </div>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="main-contents">
          <div className="main-left-content auth">
            <h1 className="auth-header">Залогиниться</h1>

            <form className="auth-form" onSubmit={login}>
              <div>
                Логин <br />
                <input ref={loginRef} name="login" required minLength={2} />
              </div>
              <div className="mb-small">
                Пароль <br />
                {isBadPassword && <div className="format-error">{badPasswordText}</div>}
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
