import React from 'react'
import "./comingSoon.css"
import { ArrowBack } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
function ComingSoon() {
    const navigate=useNavigate();
  return (
    <>
    <ArrowBack sx={{color:"white",padding:"30px",fontSize:"50px",cursor:"pointer"}} 
    onClick={()=>navigate("/")}/>
    <div className='coming-background'>

    </div>
    </>
  )
}

export default ComingSoon
