import React from 'react'
import './dynamicNavStyle.css'
import {Link} from 'react-router-dom'
function DynamicNav() {
  return (
    <>
         <div className="nav-links" style={{marginLeft:'10%'}}>
         <Link to='/'> <h3 className='dynamic-nav-sublink' style={{marginLeft:'10%'}}>
            Home
          </h3>
          </Link>
          <Link to='/about'><h3 className='dynamic-nav-sublink'>
            About Us
          </h3>
          </Link>
          <Link to='/services'><h3 className='dynamic-nav-sublink'>
            Our Services
          </h3>
          </Link>
          <h3 className='dynamic-nav-sublink'>
            Divorce Lawyer
          </h3>
          <Link to='/contact'><h3 className='dynamic-nav-sublink-contact'>
            Contact Us
          </h3>
          </Link>
          </div>
    </>
  )
}

export default DynamicNav
