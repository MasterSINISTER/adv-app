// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './navbarStyle.css';

function NavBar() {
  return (
    <>
      <div className="image-container">
        <img
          src="https://imagetolink.com/ib/cqoHNW1ZFW.jpg"
          alt="Background"
          className="background-image"
        />
        <div className="image-text">
          <span>RK GUPTA</span>
          <br />
          <span>ASSOCIATES</span>
          <br></br>
          <button className='btn-more-main'>Get Started</button>
        </div>
      </div>
      <div className="nav-links" style={{ marginLeft: '10%' }}>
        <Link to="/">
          <h3 className="nav-sublink" >
          Home 
          </h3>
        </Link>
        <Link to="/about">
          <h3 className="nav-sublink">About Us</h3>
        </Link>
        <Link to="/services">
          <h3 className="nav-sublink">Our Services</h3>
        </Link>
        <h3 className="nav-sublink">Divorce Lawyer</h3>
        <Link to="/contact">
          <h3 className="nav-sublink-contact">Contact Us</h3>
        </Link>
      </div>
    </>
  );
}

export default NavBar;
