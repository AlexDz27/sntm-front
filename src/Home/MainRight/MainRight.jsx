

import {MainRightBTN} from './MainRightBTN';
import {MainRightOutline} from './MainRightOutline';
import {MainRightAllCart} from './MainRightAllCart';

function MainRight(){
    return(
        <div className="main-right-content">
                <div className="main-right-content-conteiner">
                    
                    <MainRightBTN/>

                    <MainRightOutline/>

                    <MainRightAllCart/>                    
                </div>    
        </div>
    )
}

export {MainRight};