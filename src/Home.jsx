import { Link, Outlet } from 'react-router-dom'
import registrationPic from './img/header/registr.svg'
import titleImg from './img/title-img.jpg'
import futuramaPic from './img/cartoon/futurama.png'
import simpsPic from './img/cartoon/simpsons.png'
import southparkPic from './img/cartoon/southpark.png'

function Home() {
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
                  <li className="menu-li"><Link to="/todo" className="links-menu">Регистрация</Link></li>
                  <li className="menu-li"><Link to="/todo" className="links-menu">Все сезоны</Link></li>
                  <li className="menu-li"><Link to="/todo" className="links-menu">ТОП-10 серий</Link></li>
                  <li className="menu-li"><Link to="/todo" className="links-menu">Случайная серия</Link></li>
                  <li className="menu-li"><Link to="/todo" className="links-menu">Персонажи</Link></li>
                  <li className="menu-li"><Link to="/todo" className="links-menu">Все мультсериалы</Link></li>
                </ul>
              </nav>
              {/* //block nav */}

              {/* ТОП 10 серий */}
              <div className="content-top">
                <Link to="/top-10" className="top-link">top-10</Link>
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
              <Link to="/register"><div className="content-reg"><img src={registrationPic} alt="Регистрация" className="header-reg" /></div></Link>
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

      {/* картинка под шапкой */}
      <div className="img-title">
        <div className="img-title-content">
          <img src={titleImg} alt="" />
        </div>
      </div>
      {/* //картинка под шапкой */}

      {/* Основной контент сайта */}
      <main className="main">
        <div className="main-contents">

          <Outlet />

          {/* Основная правая часть контента */}
          <div className="main-right-content">
            <div className="main-right-content-conteiner">
              {/* Правое верхнее меню */}
              <div className="button-list">
                {/* <div className="button-list-center"> */}
                  <Link to="/">
                    <button className="btn-all-seasons">
                      <p className="btn-link-seasons">Все сезоны</p>
                    </button>
                  </Link>

                  {/* TODO: proper links here */}
                  <Link to="/todo">
                    <button className="btn-top-serias">
                      <p className="btn-link-serias">TOP-10 серий</p>
                    </button>
                  </Link>

                  <Link to="/todo">
                    <button className="btn-all-characters">
                      <p className="btn-link-characters">Персонажи</p>
                    </button>
                  </Link>


                  <Link to="/todo">
                    <button className="random-seria">
                      <p className="random-seria-link">случайная серия</p>
                    </button>
                  </Link>
                  {/* </div> */}

              </div>
              {/* //Правое верхнее меню */}

              {/* Полоска под случайной серией */}
              <div className="out-line-random">
                <div className="line-sub-rand"></div>
              </div>
              {/* //Полоска под случайной серией */}

              {/* Все другие мультики */}
              <div className="all-cartoon ">

                <div className="future-news">
                  <h2 className="future-text">Скоро выйдут новые мультики</h2>
                </div>

                {/* TODO: proper links for other films */}
                {/* Симпсоны */}
                <div className="more-cartoon">
                  <a href="http://google.com">
                    <div className="cartoon-img">
                      <img src={simpsPic} alt="simpsons" />
                    </div>
                    <div className="cartoon-desrc">
                      <div className="cartoon-title">
                        <span className="spsimps titlemlt">simpsons</span>
                      </div>
                      <div className="cartoon-sub-title">
                        <p className="cartoon-text">онлайн</p>
                      </div>
                    </div>
                  </a>
                </div>
                {/* //Симпсоны */}

                {/* south park */}
                <div className="more-cartoon">
                  <a href="http://google.com">
                    <div className="cartoon-img">
                      <img src={southparkPic} alt="south park" />
                    </div>
                    <div className="cartoon-desrc">
                      <div className="cartoon-title">
                        <span className="southpark titlemlt">south park</span>
                      </div>
                      <div className="cartoon-sub-title">
                        <p className="cartoon-text">онлайн</p>
                      </div>
                    </div>
                  </a>
                </div>
                {/* //south park */}

                {/* Futurama */}
                <div className="more-cartoon">
                  <a href="http://google.com">
                    <div className="cartoon-img">
                      <img src={futuramaPic} alt="" />
                    </div>
                    <div className="cartoon-desrc">
                      <div className="cartoon-title">
                        <span className="futurama titlemlt">futurama</span>
                      </div>
                      <div className="cartoon-sub-title">
                        <p className="cartoon-text">онлайн</p>
                      </div>
                    </div>
                  </a>
                </div>
                {/* //Futurama */}


              </div>
              {/* //Все другие мультики */}
            </div>
          </div>
          {/* //Основная правая часть контента */}

        </div>
      </main>
      {/* //Основной контент сайта */}

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

export { Home }
