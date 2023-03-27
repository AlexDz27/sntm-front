import poster from './img/seasons/1season/s01s01.png'
import strelka from './img/seasons/player/strelka.svg'
// import video from './...'

// TODO: ofc this should be a separate dynamic component
function Season1Episode1() {
  return (
    <>
      {/* Основная левая часть контента */}
      <div className="main-left-content">
        <div className="left-conteiner">
          {/* Плеер с контентом */}
          <section class="left-description">
            {/* Заголовок серии */}
            <div class="description-title">
              <h2 class="title-descr"><span class="brcklbr">Заголовок серии!</span></h2>
            </div>
            {/* //Заголовок серии */}

            {/* Полоска под заголовком */}
            <div class="title-line"></div>
            {/* //Полоска под заголовком */}

            {/* Описание на анг и номер серии */}
            <div class="sub-title-descr">
              <div class="left-title-an">
                <h2 class="title-angl">Welcome to Brickleberry</h2>
              </div>
              <div class="right-title-numb">
                <h2 class="title-number">1 серия 1 сезон</h2>
              </div>
            </div>
            {/* //Описание на анг и номер серии */}

            {/* Выбор озвучки */}
            <div class="choice-oz">
              <h3 class="ozvychka">NewStudio</h3>
            </div>
            {/* //Выбор озвучки */}

            {/* Плеер */}
            <div class="seria-video">                          
              <video id="my-video" class="see-video" controls poster={poster}>
                <source src="../videosez1/ss101.mp4" type="video/mp4" />
              </video>
            </div>
            {/* //Плеер */}

            {/* Просмотры,комментарии,лайк,дизлайк */}
            <div class="pkld player-info">
              <div class="info-left">
                <div class="info-prosmotrov"><img src="/SNTM/img/seasons/player/prosmotr.svg" alt="количество просмотров" /></div>
                <div class="inf-comments"><img src="/SNTM/img/seasons/player/comment.svg" alt="кнопка комментариев" /></div>
              </div>
              <div class="right-info">
                <div class="info-like"><img src="/SNTM/img/seasons/player/like.svg" alt="кнопка лайка" /></div>
                <div class="info-dislike"><img src="/SNTM/img/seasons/player/dislike.svg" alt="кнопка дизлайка" /></div>
              </div>
            </div>
            {/* //Просмотры,комментарии,лайк,дизлайк */}

            {/* Следующая и предыдущая серия */}
            <div class="nex-past-series poz-right">
              <div class="past-seria fl-ser non-str">
                <button class="seria-link-btn">
                  <a href="#">
                  <div class="bg-strelka">
                    <img src={strelka} alt="стрелка предыдущей серии" />
                  </div>
                  <div class="pust-text">
                    <h3 class="pust-text-strelka st-text-str">Предыдущая серия</h3>
                  </div>
                  </a>
                </button>
              </div>
              
              <div class="next-seria fl-ser ">
                <button class="seria-link-btn">
                  <a href="./s01s02.html">
                  <div class="next-text">
                    <h3 class="next-text-strelka st-text-str">Следующая серия</h3>
                  </div>
                  <div class="bg-strelka deg-img">
                    <img src={strelka} alt="стрелка предыдущей серии" />
                  </div>
                  </a>
                </button>
              </div>
            </div>
            {/* //Следующая и предыдущая серия */}
          

            {/* Описание что будет в серии */}
            <div class="description-block-seres">
              <div class="title-description-ser">
                <h3 class="title-descr-ser-top">
                  <span class="brcklbr">что будет</span> в этой серии</h3>
              </div>
              <div class="title-line"></div>
              <div class="sub-title-descr-ser">
                <p class="text-sub-title-ser">Тупоголовый Стив боится, что Этель заберёт его никому не нужную награду «Рейнджер месяца», и неудачно пытается подставить её. Тем временем, любовь Маллоя к сладостям приводит его через долгий путь к БДСМ педофилу.</p>
              </div>
            </div>
            {/* //Описание что будет в серии */}

            {/* Блок с показом комментариев */}
            <div class="comment-text">
              <h3 class="text-com">Тут будут ваши комментарии</h3>
            </div>
            <div class="title-line mr"></div>
            {/* //Блок с показом комментариев */}
          {/* //Плеер с контентом */}
          </section>
        </div>
      </div>
      {/* //Основная левая часть контента */}
    </>
  )
}

export { Season1Episode1 }
