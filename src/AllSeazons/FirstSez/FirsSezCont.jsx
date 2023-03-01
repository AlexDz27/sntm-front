
import {MainRight} from '../../Home/MainRight/MainRight';
import {DescriptionBrcklb} from '../../Home/DescrBrckl';
import {TitleFirstSez} from './TitleFirsSez';
import {FirstAllSeries} from './FirstAllSeries';
import {OutLine} from '../../Home/OutLine';
import {TitleDescr} from '../../Home/TitleDescr';

function FirstSezCont(){
    return(
        <>
        <main class="main">
        <div class="main-contents">
            <div class="main-left-content">
                    <div class="left-conteiner">

                        {/* <!-- Описание мультсериала --> */}
                        <div class="left-description">

                            {/* <!-- Заголовок Описания --> */}
                            <TitleDescr/>
                            {/* <!-- //Заголовок Описания --> */}

                            {/* <!-- Полоска под заголовком --> */}
                            <div class="title-line"></div>
                            {/* <!-- //Полоска под заголовком --> */}

                            {/* <!-- Текст описания мультсериала --> */}
                            <DescriptionBrcklb/>
                            {/* <!-- //Текст описания мультсериала --> */}
                        </div>
                        {/* <!-- //Описание мультсериала --> */}


                        {/* <!-- Все серии Bricklberry --> */}
                        <div class="all-season-title">
                            <TitleFirstSez/>

                            {/* <!-- Список серий --> */}
                            <FirstAllSeries/>
                            {/* <!-- //Список серий --> */}

                        </div>
                        {/* <!-- //Все серии Bricklberry --> */}

                        {/* <!-- Нижняя полоска под сезонами/сериями --> */}
                        <OutLine/>
                        {/* <!-- //Нижняя полоска под сезонами/сериями --> */}

                    </div>
                    
            </div>
            <MainRight/>
            </div>
            </main>
            
        </>
        
    )
}

export {FirstSezCont};