import React from 'react'
import "./ThankYou.css"
import { ArrowBackIos } from '@mui/icons-material'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
function ThankYou() {
    const navigate=useNavigate();
    const handleClick = () => {
        navigate("/");
      };
  return (
    <>
        <ArrowBackIos sx={{color:"white",padding:"30px",fontSize:"50px",cursor:"pointer"}} onClick={handleClick}    />
    <div className='main-div'>
        <h1 className='heading'>THANK YOU !</h1>
      <img src="https://cdn.dribbble.com/users/911891/screenshots/4517403/news-letter-thank-you.gif" alt="" className='img-thank'/>
    </div>
    <footer>
        <Footer/>
    </footer>
    </>
  )
}

export default ThankYou
