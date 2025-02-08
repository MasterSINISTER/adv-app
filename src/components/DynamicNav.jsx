// src/Navbar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbarStyle.css";

function DynamicNav() {
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate("/about")
  }
  return (
    <>
      <div className="navbar-container">
        <button className="btn-more">Book an Appoitment</button>

        <ul className="navbar-list" data-aos="fade-down" data-aos-delay="300">
          <li className="nav-links"  onClick={handleClick}>
            About Us
          </li>
          <li className="nav-links">
            <Link to="/services">Our Services</Link>
          </li>
          <li className="nav-links">
            Testimonials
          </li>
        </ul>
      </div>
    </>
  );
}

export default DynamicNav;
