import threeSeazon from '../../img/seasons/3season/threeseasonnumber.png';
import twoSeazon from '../../img/seasons/2season/twoseasonnumber.png';
import oneSeazon from '../../img/seasons/1season/oneseasonnumber.png';


function AllSeazons(){
    return(
        <div className="all-seasons">
                            <div className="season-contain">
                                
                                <a href="/threesez">
                                    <div className="season-img"><img src={threeSeazon} alt="3 сезон мультсериала bricklberry картинка 3 сезона" /></div>
                                    <div className="season-text">
                                        <div className="number-season">
                                            <h3 className="number-title">Сезон 3</h3>
                                        </div>
                                        <div className="number-seria">
                                            <p className="number-text">13 серий</p>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="season-contain">
                                <a href="/twosez">
                                    <div className="season-img"><img src={twoSeazon} alt="2 сезон мультсериала bricklberry картинка 2 сезона" /></div>
                                    <div className="season-text">
                                        <div className="number-season">
                                            <h3 className="number-title">Сезон 2</h3>
                                        </div>
                                        <div className="number-seria">
                                            <p className="number-text">13 серий</p>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="season-contain">
                                <a href="/onesez">
                                    <div className="season-img"><img src={oneSeazon} alt="1 сезон мультсериала bricklberry картинка 1 сезона" /></div>
                                    <div className="season-text">
                                        <div className="number-season">
                                            <h3 className="number-title">Сезон 1</h3>
                                        </div>
                                        <div className="number-seria">
                                            <p className="number-text">10 серий</p>
                                        </div>
                                    </div>
                                </a>
                            </div>

        </div>
    )
}

export {AllSeazons};