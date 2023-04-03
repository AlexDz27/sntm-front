import { Link, useLoaderData } from 'react-router-dom'
import { getEpisodes } from './functions'
import texts from './jsonStorage/texts.json'

export function loader({ params }) {
  const episodes = getEpisodes(params.seasonNumber)
  
  return {number: params.seasonNumber, episodes}
}

function Season() {
  const { number, episodes } = useLoaderData()

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
                {texts.cartoonDescription}
              </p>
            </div>
            {/* //Текст описания мультсериала */}
          </div>
          {/* //Описание мультсериала */}

          {/* Все серии Bricklberry */}
          <div className="all-season-title">
            <div className="title-season">
              <h2 className="season-title-text">
                все серии {number} сезона
                <span className="brcklbr spnbrc">brickleberry</span>
              </h2>
            </div>
            <div className="title-line"></div>

            {/* Список серий */}
            <div className="all-series">
              {episodes.map(({ episode, img, thumbnailDescription }) => {
                const imgPath = require(`./img/seasons/${number}season/${img}`)

                return (
                  <div key={episode} className="seria-contain">
                    <Link to={`episode-${episode}`}>
                      <div className="seria-img">
                        <img src={imgPath} alt={`${episode} серий ${number} сезона`} />
                        <div className="hover-text-seria-descr">
                          <p className="text-seria-descr">
                            {thumbnailDescription}
                          </p>
                        </div>
                      </div>
                      <div className="seria-text">
                        <div className="number-sub-seria">
                          <p className="number-text-seria">серия {episode}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              })}
            </div>
            {/* //Список серий */}
          </div>
          {/* //Все серии Bricklberry */}

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

export { Season }
