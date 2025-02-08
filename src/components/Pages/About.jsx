import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./aboutStyle.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Cards from "../Cards";
import NewCard from "../NewCard";

function About() {
  return (
    <>
      <>
        <Link to="/">
          <ArrowBackIosIcon
            sx={{ color: "white", padding: "30px", fontSize: "50px" }}
          ></ArrowBackIosIcon>
        </Link>
        <div className="aboutUs-container">
          <h1 className="aboutus-heading">About Us</h1>
        </div>
        <div className="aboutUs-content">
          <img
            src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1"
            alt="advocate"
            className="advocate-image"
          />
          <h1 className="advocate-name">Adv. R.K. Gupta</h1>
          <p className="advocate-bio">
          We started our practice with a mindset to provide value based legal service to the clients and are continuing with this vision.
We, at R.K. Gupta & Associates always believe in a progress which is to evolve as a cognizant body, carrying the significance of societal values, like freedom, justice, equanimity etc., while making a professional recognition in legal arena.
<br></br></p>
<div className="ethics-container">
<ul className="advocate-ethics-ul">
<lable className="advocate-label">The work culture spins around the core of ethics like:</lable>
  <li className="advocate-ethics">Transparency in communications and dealings.</li>
  <li className="advocate-ethics">Honesty, responsibility, good citizenship and cordiality.</li>
  <li className="advocate-ethics">Unbiased views, affirmed stand for truth.</li>
  <li className="advocate-ethics">Strict vigilance on dubious views, undue advantages and any sort of discriminations.</li>
</ul>
</div>

<p className="advocate-bio">Not only we adhere strictly to the factual strategy of working for an equal justice and its prompt deliverance to the needy, but we also look for a chance of better social message through the brought forth justice and its proper prevalence.
</p>
        </div>
        <div className="aboutUs-container">
          <h1 className="aboutus-heading">Our Principles</h1>
            <div className="principles-container">
          <NewCard num="1." desc="Practicing and handling cases independently with a result oriented approach"/>
          <NewCard num="2." desc="With a keen focus on learning and specialised practices"/>
          <NewCard num="3." desc="We keep in touch with the changing environment in which our clients operate"/>
          <NewCard num="4." desc="We are committed to social responsibility"/>
          </div>
        </div>
        <Footer/>
      </>
    </>
  );
}

export default About;
