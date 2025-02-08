// src/Navbar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbarStyle.css";

function DynamicNav() {
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate("/about")
  }
  const handleHome=()=>{
    navigate("/")
  }
  return (
    <>
      <div className="navbar-container">

        <ul className="navbar-list" data-aos="fade-down" data-aos-delay="300">
          <li className="nav-links"  onClick={handleHome}>
            Home
          </li>
          <li className="nav-links">
            <Link onClick={handleClick}>About US</Link>
          </li>
          <li className="nav-links">
            <Link onClick={handleClick}></Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default DynamicNav;
