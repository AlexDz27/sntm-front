import { useLoaderData } from 'react-router-dom'
import { getEpisode } from './functions'
import poster from './img/seasons/1season/s01s01.png'
import strelka from './img/seasons/player/strelka.svg'
// TODO: import video from './...' and ability to click prev/next episode buttons

export function loader({ params: { seasonNumber, episodeNumber } }) {
  // const { seasonNumber, episodeNumber } = params
  const episode = getEpisode(seasonNumber, episodeNumber)
  
  return {episode, seasonNumber}
}

function Episode() {
  const { episode, seasonNumber } = useLoaderData()

  const { hasPrevEpisode, hasNextEpisode } = episode.rendering
  return (
    <>
      {/* Основная левая часть контента */}
      <div className="main-left-content">
        <div className="left-conteiner">
          {/* Плеер с контентом */}
          <section className="left-description">
            {/* Заголовок серии */}
            <div className="description-title">
              <h2 className="title-descr"><span className="brcklbr">{episode.title}</span></h2>
            </div>
            {/* //Заголовок серии */}

            {/* Полоска под заголовком */}
            <div className="title-line"></div>
            {/* //Полоска под заголовком */}

            {/* Описание на анг и номер серии */}
            <div className="sub-title-descr">
              <div className="left-title-an">
                <h2 className="title-angl">{episode.titleEng}</h2>
              </div>
              <div className="right-title-numb">
                <h2 className="title-number">{episode.episode} серия {seasonNumber} сезон</h2>
              </div>
            </div>
            {/* //Описание на анг и номер серии */}

            {/* Выбор озвучки */}
            <div className="choice-oz">
              <h3 className="ozvychka">{episode.voiceover}</h3>
            </div>
            {/* //Выбор озвучки */}

            {/* Плеер */}
            <div className="seria-video">                          
              <video id="my-video" className="see-video" controls poster={poster}>
                <source src="../videosez1/ss101.mp4" type="video/mp4" />
              </video>
            </div>
            {/* //Плеер */}

            {/* Просмотры,комментарии,лайк,дизлайк */}
            <div className="pkld player-info">
              <div className="info-left">
                <div className="info-prosmotrov"><img src="/SNTM/img/seasons/player/prosmotr.svg" alt="количество просмотров" /></div>
                <div className="inf-comments"><img src="/SNTM/img/seasons/player/comment.svg" alt="кнопка комментариев" /></div>
              </div>
              <div className="right-info">
                <div className="info-like"><img src="/SNTM/img/seasons/player/like.svg" alt="кнопка лайка" /></div>
                <div className="info-dislike"><img src="/SNTM/img/seasons/player/dislike.svg" alt="кнопка дизлайка" /></div>
              </div>
            </div>
            {/* //Просмотры,комментарии,лайк,дизлайк */}

            {/* Следующая и предыдущая серия */}
            <div className="nex-past-series">
              {hasPrevEpisode && 
                <div className="past-seria fl-ser">
                  <button className="seria-link-btn">
                    <a href="#">
                    <div className="bg-strelka">
                      <img src={strelka} alt="стрелка предыдущей серии" />
                    </div>
                    <div className="pust-text">
                      <h3 className="pust-text-strelka st-text-str">Предыдущая серия</h3>
                    </div>
                    </a>
                  </button>
                </div>
              }
              
              {hasNextEpisode && 
                <div className="next-seria fl-ser">
                  <button className="seria-link-btn">
                    <a href="#">
                    <div className="next-text">
                      <h3 className="next-text-strelka st-text-str">Следующая серия</h3>
                    </div>
                    <div className="bg-strelka deg-img">
                      <img src={strelka} alt="стрелка предыдущей серии" />
                    </div>
                    </a>
                  </button>
                </div>
              }
            </div>
            {/* //Следующая и предыдущая серия */}
          

            {/* Описание что будет в серии */}
            <div className="description-block-seres">
              <div className="title-description-ser">
                <h3 className="title-descr-ser-top">
                  <span className="brcklbr">что будет</span> в этой серии</h3>
              </div>
              <div className="title-line"></div>
              <div className="sub-title-descr-ser">
                <p className="text-sub-title-ser">{episode.description}</p>
              </div>
            </div>
            {/* //Описание что будет в серии */}

            {/* Блок с показом комментариев */}
            <div className="comment-text">
              <h3 className="text-com">Тут будут ваши комментарии</h3>
            </div>
            <div className="title-line mr"></div>
            {/* //Блок с показом комментариев */}
          {/* //Плеер с контентом */}
          </section>
        </div>
      </div>
      {/* //Основная левая часть контента */}
    </>
  )
}

export { Episode }
