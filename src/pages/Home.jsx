import { Link, Outlet, ScrollRestoration } from 'react-router-dom'
import titleImg from '../img/title-img.jpg'
import futuramaPic from '../img/cartoon/futurama.png'
import simpsPic from '../img/cartoon/simpsons.png'
import southparkPic from '../img/cartoon/southpark.png'
import { Header } from '../components/Header'

function Home() {
  return (
    <>
      <Header />

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

      <ScrollRestoration />
    </>
  )
}

export { Home }
