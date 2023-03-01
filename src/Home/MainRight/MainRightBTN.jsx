


function MainRightBTN(){
    return(
        <div className="button-list">
                        {/* <div className="button-list-center"> */}
                         
                        <a href="./index.html">
                        <button className="btn-all-seasons">
                            <p className="btn-link-seasons">Все сезоны</p>
                        </button>
                        </a>

                        <a href="#">
                        <button className="btn-top-serias">
                            <p className="btn-link-serias">TOP-10 серий</p>
                        </button>
                        </a>

                        <a href="#">
                        <button className="btn-all-characters">
                            <p className="btn-link-characters">Персонажи</p>
                        </button>
                        </a>

                        
                        <button className="random-seria">
                            <p className="random-seria-link">случайная серия</p>
                        </button>
                        {/* </div> */}

                    </div>
    )
}

export {MainRightBTN};