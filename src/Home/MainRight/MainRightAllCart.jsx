import FuturamaCat from '../../img/cartoon/futurama.png';
import SimpsCat from '../../img/cartoon/simpsons.png';
import SouthparkCat from '../../img/cartoon/southpark.png';


function MainRightAllCart(){
    return (
        <div className="all-cartoon ">

                        <div className="future-news">
                            <h2 className="future-text">Скоро выйдут новые мультики</h2>
                        </div>

                        <div className="more-cartoon">
                            <a href="#">
                            <div className="cartoon-img">
                                <img src={SimpsCat} alt="simpsons" />
                            </div>
                            <div className="cartoon-desrc">
                                <div className="cartoon-title">
                                    <span className="spsimps titlemlt">simpsons</span>
                                </div>
                                <div className="cartoon-sub-title">
                                    <p className="cartoon-text">онлайн</p>
                                </div>
                            </div>
                            </a>
                        </div>

                        <div className="more-cartoon">
                            <a href="#">
                            <div className="cartoon-img">
                                <img src={SouthparkCat} alt="south park" />
                            </div>
                            <div className="cartoon-desrc">
                                <div className="cartoon-title">
                                    <span className="southpark titlemlt">south park</span>
                                </div>
                                <div className="cartoon-sub-title">
                                    <p className="cartoon-text">онлайн</p>
                                </div>
                            </div>
                            </a>
                        </div>

                        <div className="more-cartoon">
                            <a href="#">
                            <div className="cartoon-img">
                                <img src={FuturamaCat} alt="" />
                            </div>
                            <div className="cartoon-desrc">
                                <div className="cartoon-title">
                                    <span className="futurama titlemlt">futurama</span>
                                </div>
                                <div className="cartoon-sub-title">
                                    <p className="cartoon-text">онлайн</p>
                                </div>
                            </div>
                            </a>
                        </div>

 
        </div>
    )
}

export {MainRightAllCart}