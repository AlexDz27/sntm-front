import { Link } from 'react-router-dom'
import season3 from './img/seasons/3season/threeseasonnumber.png'
import season2 from './img/seasons/2season/twoseasonnumber.png'
import season1 from './img/seasons/1season/oneseasonnumber.png'

function SectionAllSeasons() {
  return (
    <>
      {/* Основная левая часть контента */}
      <div className="main-left-content">
        <div className="left-conteiner">
          {/* Описание мультсериала */}
          <div className="left-description">
            {/* Заголовок Описания */}
            <div className="description-title">
              <h2 className="title-descr">
                о сериале <span className="brcklbr spnbrc">Brickleberry</span>
              </h2>
            </div>
            {/* //Заголовок Описания */}

            {/* Полоска под заголовком */}
            <div className="title-line"></div>
            {/* //Полоска под заголовком */}

            {/* Текст описания мультсериала */}
            <div className="sub-title">
              <p className="sub-title-text">
                Бриклберри - это эксцентричный мультсериал с кучей расистских
                шуток. Этот сериал можно спокойно добавить в топ самых по
                черному юмору. Чего только стоят данные персонажи, один лучше
                другого. Тупоголовый Стив, у которого еле-еле работает последняя
                извилина. Дензел - настоящий черный в их команде, был нанят
                только для того, чтобы повысить рейтинг парка. Кони - ну это
                просто мусоровоз с сиськами, способная одним только своим
                выменем разрушить пол-вселенной. Этель здесь мисс-шкура парка,
                которая мечтает найти богатого папика. Вуди - толстяк с большой
                душой, который любит набить свои карманы. Ну и Маллой - просто
                говорящий медведь, который ненавидит людей, но живёт среди них и
                тратит все деньги Вуди. Этот сериал вообще можно было посвятить
                всем тупостям Стива, но тут и 40 сезонов не хватило бы.
              </p>
            </div>
            {/* //Текст описания мультсериала */}
          </div>
          {/* //Описание мультсериала */}

          {/* Все сезоны Bricklberry */}
          <div className="all-season-title">
            <div className="title-season">
              <h2 className="season-title-text">
                Все сезоны <span className="brcklbr spnbrc">brickleberry</span>{' '}
                онлайн
              </h2>
            </div>
            <div className="title-line"></div>

            {/* Список сезонов */}
            <div className="all-seasons">
              {/* Сезон 3 */}
              <div className="season-contain">
                <Link to="/season-3">
                  <div className="season-img">
                    <img src={season3} alt="" />
                  </div>
                  <div className="season-text">
                    <div className="number-season">
                      <h3 className="number-title">Сезон 3</h3>
                    </div>
                    <div className="number-seria">
                      <p className="number-text">13 серий</p>
                    </div>
                  </div>
                </Link>
              </div>
              {/* //Сезон 3 */}

              {/* Сезон 2 */}
              <div className="season-contain">
                <Link to="/season-2">
                  <div className="season-img">
                    <img src={season2} alt="" />
                  </div>
                  <div className="season-text">
                    <div className="number-season">
                      <h3 className="number-title">Сезон 2</h3>
                    </div>
                    <div className="number-seria">
                      <p className="number-text">13 серий</p>
                    </div>
                  </div>
                </Link>
              </div>
              {/* //Сезон 2 */}

              {/* Сезон 1 */}
              <div className="season-contain">
                <Link to="/season-1">
                  <div className="season-img">
                    <img src={season1} alt="" />
                  </div>
                  <div className="season-text">
                    <div className="number-season">
                      <h3 className="number-title">Сезон 1</h3>
                    </div>
                    <div className="number-seria">
                      <p className="number-text">10 серий</p>
                    </div>
                  </div>
                </Link>
              </div>
              {/* //Сезон 1 */}
            </div>
            {/* //Список сезонов */}
          </div>
          {/* //Все сезоны Bricklberry */}

          {/* Нижняя полоска под сезонами/сериями */}
          <div className="out-line-bottom">
            <div className="title-line"></div>
          </div>
          {/* //Нижняя полоска под сезонами/сериями */}
        </div>
      </div>
      {/* //Основная левая часть контента */}
    </>
  )
}

export { SectionAllSeasons }
