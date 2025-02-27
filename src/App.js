import React from 'react'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './components/Pages/About';
import Services from './components/Pages/Services';
import Appoitment from './components/Appoitment';
import ThankYou from './components/ThankYou';
import ComingSoon from './components/ComingSoon';
import Feedback from './components/Feedback';



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
            <Route path='/coming-soon' element={<ComingSoon/>}/>
            <Route path='/feedback' element={<Feedback/>}/>
          </Routes>
        </Router>
        
    </>
  )
}

export default App
