import React from 'react'
import TypeIt from "typeit-react";
import {Link} from 'react-router-dom'
import './navbarStyle.css'
function Navbar() {
  return (
    <>
      <img src='https://wallpapers.com/images/high/empty-lawyer-classroom-wte2m2f9zjywlt1c.webp'></img>
        <div className="nav-links">
          <Link to='/'><h3 className='nav-sublink' style={{marginLeft:'10%'}}>
            Home
          </h3>
          </Link>
          <Link to='/about'><h3 className='nav-sublink'>
            About Us
          </h3>
          </Link>
          <Link to='/services'><h3 className='nav-sublink'>
            Our Services
          </h3></Link>
          
          <h3 className='nav-sublink'>
            Divorce Lawyer
          </h3>
          <Link to='/contact'><h3 className='nav-sublink-contact'>
            Contact Us
          </h3>
          </Link>
          <h1 className='title-header'>
            Advocate RK Gupta
          </h1>
        </div>
    
    </>
  )
}

export default Navbar
