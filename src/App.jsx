
import {Header} from './Home/Header';
import {PictureUnderHeader} from './Home/PictureUnderHeader';
import {Main} from './Home/Main/Main';
import {Footer} from './Home/Footer';


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import {FirstSez} from './AllSeazons/FirstSez/FirstSeazon';
import {TwoSeazon} from './AllSeazons/TwoSez/TwoSezCont';
import {ThreeSeazon} from './AllSeazons/ThreeSez/ThreeSezCont';


 

function App() {
  return (
      <>
      <Router>

        <Header />
        <PictureUnderHeader />

          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/firstsez" element={<FirstSez/>} />
            <Route path="/twosez" element={<TwoSeazon/>} />
            <Route path="/threesez" element={<ThreeSeazon/>} />
          </Routes>

        {/* <Main /> */}
        <Footer />

      </Router>
         

        
      

   
      </>
    
  )
  }

export {App}
