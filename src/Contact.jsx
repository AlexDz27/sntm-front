export default function Contact() {
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
                Контакт
              </h2>
            </div>
            {/* //Заголовок Описания */}

            {/* Полоска под заголовком */}
            <div className="title-line"></div>
            {/* //Полоска под заголовком */}

            {/* Текст описания мультсериала */}
            <div className="sub-title">
              <p className="sub-title-text">
              Имейл администраторов - sntmadmin@gmail.com
              </p>
            </div>
            {/* //Текст описания мультсериала */}
          </div>
          {/* //Описание мультсериала */}

        </div>
      </div>
      {/* //Основная левая часть контента */}
    </>
  )
}

export { Contact }
