import {Header} from './Home/Header';
import {PictureUnderHeader} from './Home/PictureUnderHeader';
import {Main} from './Home/Main/Main';
import {Footer} from './Home/Footer';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import {FirstSezCont} from './AllSeazons/FirstSez/FirsSezCont';
import {TwoSezCont} from './AllSeazons/TwoSez/TwoSezCont';
import {ThreeSezCont} from './AllSeazons/ThreeSez/ThreeSezCont';

function App() {
  return (
      <>
      <Router>

        <Header />
        <PictureUnderHeader />

          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/FirstSezCont" element={<FirstSezCont/>} />
            <Route path="/TwoSezCont" element={<TwoSezCont/>} />
            <Route path="/ThreeSezCont" element={<ThreeSezCont/>} />
          </Routes>
       
        <Footer />

      </Router>
         

        
      

   
      </>
    
  )
  }

export {App}
