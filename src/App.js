import React from 'react'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './components/Pages/About';
import Services from './components/Pages/Services';
import Contact from './components/Pages/Contact';



function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        </Router>
        
    </>
  )
}

export default App
