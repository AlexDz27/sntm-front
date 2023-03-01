


import {MainRight} from '../MainRight/MainRight';
import {DescriptionBrcklb} from '../DescrBrckl';
import {OutLine} from '../OutLine';
import {TitleDescr} from '../TitleDescr';
import {AllSeazons} from './AllSeazons';



import { Routes, Route, Link } from 'react-router-dom';
import { Home } from '../../App';
import { FirstSezz } from '../../AllSeazons/FirstSez/FirstSeazon';
import { TwoSez } from '../../AllSeazons/TwoSez/TwoSeazon';
import { ThreeSez } from '../../AllSeazons/ThreeSez/ThreeSeazon';



function Main() {
    return(
        <>
        <main className="main">
        <div className="main-contents">

    
      

            <div className="main-left-content">
                <div className="left-conteiner">

                    <div className="left-description">

                        <TitleDescr/>

                        <div className="title-line"></div>

                        <DescriptionBrcklb/>
                    </div>


                    <div className="all-season-title">
                        <div className="title-season">
                            <h2 className="season-title-text">Все сезоны <span className="brcklbr spnbrc">brickleberry</span> онлайн</h2>
                        </div>
                        <div className="title-line"></div>

                        <AllSeazons/>

                    </div>

                    <OutLine/>

                </div>
            </div>

            
        {/* Правая часть сайта */}
        <MainRight />
        {/* //Правая часть сайта */}

        </div>
        </main>
        </>
        

        
    )
    
}

export {Main};