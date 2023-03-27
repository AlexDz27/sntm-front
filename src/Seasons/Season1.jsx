// TODO: implement dynamic via for loop or t
import { Link } from 'react-router-dom'
import s01s01Pic from '../img/seasons/1season/s01s01.png'

function Season1() {
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

          {/* Все серии Bricklberry */}
          <div class="all-season-title">
            <div class="title-season">
              <h2 class="season-title-text">все серии 1 сезона<span class="brcklbr spnbrc">brickleberry</span></h2>
            </div>
            <div class="title-line"></div>

            {/* Список серий */}
            <div class="all-series">
              {/* Серия 1 */}
              <div class="seria-contain">
                <Link to="episode-1">
                  <div class="seria-img">
                    <img src={s01s01Pic} alt="1 серий 1 сезона" />
                      <div class="hover-text-seria-descr">
                        <p class="text-seria-descr">Тупоголовый  Стив боится что Этель заберёт его никому не нужную награду «Рейнджер месяца» и неудачно пытается подставить её. Тем временем любовь Маллоя к сладостям приводит его через долгий путь к БДСМ педофилу.</p>
                      </div>
                    </div>
                    <div class="seria-text">
                      <div class="number-sub-seria">
                        <p class="number-text-seria">серия 1</p>
                      </div>
                    </div>
                </Link>
              </div>
              {/* //Серия 1 */}

              {/* Серия 2 */}
              <div class="seria-contain">
                <Link to="episode-2">
                  <div class="seria-img">
                    <img src="./imgsez1/s01s02.png" alt="2 серий 1 сезона" />
                      <div class="hover-text-seria-descr">
                        <p class="text-seria-descr">Стив настолько сильно себя любит , что из-за своего «эго» не понял как снял проститутку и заболел «Ракоспидифилисом». Узнав что Стив умирает, Вуди приходится искать нового низкооплачиваемого сотрудника.</p>
                      </div>
                    </div>
                    <div class="seria-text">
                      <div class="number-sub-seria">
                        <p class="number-text-seria">серия 2</p>
                      </div>
                    </div>
                </Link>
              </div>
              {/* //Серия 2 */}

              {/* Серия 3 */}
              <div class="seria-contain">
                <a href="./series1/s01s03.html">
                  <div class="seria-img">
                    <img src="./imgsez1/s01s03.png" alt="3 серий 1 сезона" />
                      <div class="hover-text-seria-descr">
                        <p class="text-seria-descr">В Бриклберри поселились вонючие хиппи и Вуди дал задание Стиву и Дензелу их убрать, Тем временем они вступили в русскую мафию. Малое кастрировали и его яички используют как стероид для марихуаны.</p>
                      </div>
                    </div>
                    <div class="seria-text">
                      <div class="number-sub-seria">
                        <p class="number-text-seria">серия 3</p>
                      </div>
                    </div>
                </a>
              </div>
              {/* //Серия 3 */}

              {/* Серия 4 */}
              <div class="seria-contain">
                <a href="./series1/s01s04.html">
                  <div class="seria-img">
                    <img src="./imgsez1/s01s04.png" alt="4 серий 1 сезона" />
                      <div class="hover-text-seria-descr">
                        <p class="text-seria-descr">qweqweqwe</p>
                      </div>
                    </div>
                    <div class="seria-text">
                      <div class="number-sub-seria">
                        <p class="number-text-seria">серия 4</p>
                      </div>
                    </div>
                </a>
              </div>
              {/* //Серия 4 */}

              {/* Серия 5 */}
              <div class="seria-contain">
                <a href="./series1/s01s05.html">
                  <div class="seria-img">
                    <img src="./imgsez1/s01s05.png" alt="5 серий 1 сезона" />
                      <div class="hover-text-seria-descr">
                        <p class="text-seria-descr">qweqweqwe</p>
                      </div>
                    </div>
                    <div class="seria-text">
                      <div class="number-sub-seria">
                        <p class="number-text-seria">серия 5</p>
                      </div>
                    </div>
                </a>
              </div>
              {/* //Серия 5 */}
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

export { Season1 }
