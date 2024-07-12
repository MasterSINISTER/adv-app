import React from 'react'
import './dynamicNavStyle.css'
import {Link} from 'react-router-dom'
function DynamicNav() {
  return (
    <>
         <div className="nav-links">
         <Link to='/'> <h3 className='nav-sublink' style={{marginLeft:'10%'}}>
            Home
          </h3>
          </Link>
          <Link to='/about'><h3 className='nav-sublink'>
            About Us
          </h3>
          </Link>
          <Link to='/services'><h3 className='nav-sublink'>
            Our Services
          </h3>
          </Link>
          <h3 className='nav-sublink'>
            Divorce Lawyer
          </h3>
          <Link to='/contact'><h3 className='nav-sublink-contact'>
            Contact Us
          </h3>
          </Link>
          </div>
    </>
  )
}

export default DynamicNav
