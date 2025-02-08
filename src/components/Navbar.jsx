
import React,{useEffect}from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbarStyle.css";
import { Call } from "@mui/icons-material";
function NavBar() {
  const navigate=useNavigate();
  const handleServicesScroll = () => {
    const percentage = 100; // Change this to the desired percentage
    const windowHeight = window.innerHeight;
    const section = document.querySelector(".services-section");
    const sectionOffsetTop = section.offsetTop;
    const targetScrollPosition =
      sectionOffsetTop - windowHeight * (1 - percentage / 100);

    window.scrollTo({
      top: targetScrollPosition,
      behavior: "smooth",
    });
  };
  const handleTestimonialScroll = () => {
    const percentage = 100; // Change this to the desired percentage
    const windowHeight = window.innerHeight;
    const section = document.querySelector(".our-services");
    const sectionOffsetTop = section.offsetTop;
    const targetScrollPosition =
      sectionOffsetTop - windowHeight * (1 - percentage / 100);

    window.scrollTo({
      top: targetScrollPosition,
      behavior: "smooth",
    });
  };

  const handleHome=() => {
    const percentage = 100; // Change this to the desired percentage
    const windowHeight = window.innerHeight;
    const section = document.querySelector(".top-div");
    const sectionOffsetTop = section.offsetTop;
    const targetScrollPosition =
      sectionOffsetTop - windowHeight * (1 - percentage / 100);

    window.scrollTo({
      top: targetScrollPosition,
      behavior: "smooth",
    });
  }
  useEffect(() => {
    const handleScroll = () => {
        const navbarContainer = document.querySelector(".navbar-container");
        if (navbarContainer) {
            const { scrollY } = window;
            const scale = Math.max(0.9, 1 - scrollY * 0.001);
            navbarContainer.style.transform = `scale(${scale})`;
        }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);
  const handleAppointment=()=>{
    navigate("/contact")
  }
  return (
    <>
  <div className="top-div">
  <img src="https://i.postimg.cc/dtMZ2KtC/Untitled.png" alt="" className="img-logo"/>
  <div className="navbar-container" data-aos="fade-down" data-aos-delay="300">
    
        <ul className="navbar-list" >
          <li className="nav-links">
            <Link to="/" onClick={handleHome}>Home</Link>
          </li>
          <li className="nav-links">
            <Link to="#" onClick={handleServicesScroll}>
              Our Services
            </Link>
          </li>
          <li className="nav-links">
            <Link to="#" onClick={handleTestimonialScroll}>
              Testimonials
            </Link>
          </li>
        </ul>  
      </div>
    <button className="btn-app" onClick={handleAppointment}>
          {/* <img src="https://i.postimg.cc/SKWv3pvW/icons8-call-50-1.png" alt="" className="call-icon"/> */}
          <label className="btn-text">Book an Appointment</label>
          <Call sx ={{fontSize:"30px"}} className="call-icon" />
        </button>
  </div>
   
      
    </>
  );
}

export default NavBar;
