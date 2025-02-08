import React from 'react'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './components/Pages/About';
import Services from './components/Pages/Services';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Appoitment from './components/Appoitment';
import ThankYou from './components/ThankYou';



function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/contact' element={<Appoitment/>}/>
            <Route path='/thank-you' element={<ThankYou/>}/>
          </Routes>
        </Router>
        
    </>
  )
}

export default App
