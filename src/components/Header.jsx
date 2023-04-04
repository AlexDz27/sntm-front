import { Link } from 'react-router-dom'
import registrationPic from '../img/header/registr.svg'

function Header() {
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
            <Link to="/register">
              <div className="content-reg">
                <img src={registrationPic} alt="Регистрация" className="header-reg" />
              </div>
            </Link>
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
