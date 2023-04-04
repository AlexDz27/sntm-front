import { Link } from 'react-router-dom'
import texts from '../jsonStorage/texts.json'
import allSeasons from '../jsonStorage/allSeasonsRenderingData.json'

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
              <p className="sub-title-text">{texts.cartoonDescription}</p>
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
              {allSeasons.map(({ number, episodesCount }) => {
                const thumbnail = require(`../img/seasons/${number}season/season.png`)

                return (
                  <div key={number} className="season-contain">
                    <Link to={`/season/${number}`}>
                      <div className="season-img">
                        <img src={thumbnail} alt="" />
                      </div>
                      <div className="season-text">
                        <div className="number-season">
                          <h3 className="number-title">Сезон {number}</h3>
                        </div>
                        <div className="number-seria">
                          <p className="number-text">
                            {episodesCount} серий
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              })}
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
