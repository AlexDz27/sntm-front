import { Link } from 'react-router-dom'
import registrationPic from '../img/header/registr.svg'
import { useOutsideClick } from '../functions'

function Header({ login, isUserLoggedIn }) {
  const {isShown: isAuthMenuShown, setIsShown: setIsAuthMenuShown, componentRef: authMenuRef} = useOutsideClick()

  const wLP = window.location.pathname

  return (
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
            <div className={`content-top ${(wLP === '/register' || wLP === '/login') && 'hidden'}`}>
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
            <div onClick={() => setIsAuthMenuShown(!isAuthMenuShown)} className="content-reg">
              <div>
                {login && <span className="hi-username">Привет, {login}</span>}
                <img src={registrationPic} alt="Регистрация" className="header-reg" />
              </div>
              {isAuthMenuShown && (
                <div ref={authMenuRef} className={`auth-menu ${!isUserLoggedIn && 'auth-menu--not-logged-in'}`}>
                  {isUserLoggedIn ? (
                    <>
                      <div className="auth-menu__bar"><Link to="/logout">Выйти из профиля</Link></div>
                      <div className="auth-menu__bar"><Link to="/login">Залогиниться в другой профиль</Link></div>
                    </>
                  ) : (
                    <>
                      <div className="auth-menu__bar"><Link to="/register">Зарегистрироваться</Link></div>
                      <div className="auth-menu__bar"><Link to="/login">Залогиниться</Link></div>
                    </>
                  )}
                </div>
              )}
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
  )
}

export { Header }
