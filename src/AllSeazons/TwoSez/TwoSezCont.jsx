

import {MainRight} from '../../Home/MainRight/MainRight';
import {DescriptionBrcklb} from '../../Home/DescrBrckl';
import {TitleTwoSez} from './TitleTwoSez';
import {TwoAllSeries} from './TwoAllSeries';
import {OutLine} from '../../Home/OutLine';
import {TitleDescr} from '../../Home/TitleDescr';

function TwoSezCont(){
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
                            <TitleTwoSez/>

                            {/* <!-- Список серий --> */}
                            <TwoAllSeries/>
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

export {TwoSezCont};