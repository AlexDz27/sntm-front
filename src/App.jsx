
import {Header} from './Home/Header';
import {PictureUnderHeader} from './Home/PictureUnderHeader';
import {Main} from './Home/Main/Main';
import {Footer} from './Home/Footer';



// import FirstSez from './AllSeazons/FirstSez/FirstSeazon';
// import TwoSeazon from './AllSeazons/TwoSez/TwoSeazon';
// import ThreeSeazon from './AllSeazons/ThreeSez/ThreeSeazon';



 

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <PictureUnderHeader />
        <Main />
        <Footer />     
      </>
    </div>
  )
  }

export {App}
