import registrationPic from '../img/header/registr.svg'

function Header() {
  return (
    <header className="header">
        <div className="header-content">
            <div className="header-container">
                <div className="header-block">
                    <nav className="navbar-none"> 
                        <ul className="nav-style">
                                <li className="menu-li"><a href="/SNTM/sorry.html" className="links-menu">Регистрация</a></li>
                                <li className="menu-li"><a href="/SNTM/index.html" className="links-menu">Все сезоны</a></li>
                                <li className="menu-li"><a href="/SNTM/sorry.html" className="links-menu">ТОП-10 серий</a></li>
                                <li className="menu-li"><p className="links-menu" id="randseria">Случайная серия</p></li>
                                <li className="menu-li"><a href="/SNTM/sorry.html" className="links-menu">Персонажи</a></li>
                                <li className="menu-li"><a href="/SNTM/sorry.html" className="links-menu">Все мультсериалы</a></li>                                                            
                        </ul>
                    </nav>

                    <div className="content-top"><a href="#" className="top-link">top-10</a></div>

                    <div className="content-title">
                        <a href="./index.html" className="title-link">
                            <h1 className="link-title">brickleberry</h1>
                        </a>
                    </div>

                    <div className="content-reg"><img src={registrationPic} alt="Регистрация" className="header-reg" /></div>

                    <button className="nav-toggle">
                        <div className="menu-icon-wrapper">
                            <div className="menu-icon"></div>
                        </div>
                    </button>

                </div>
            </div>
        </div>
    </header>
  )
}

export  {Header}