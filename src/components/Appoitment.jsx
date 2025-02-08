import React,{ useState, useEffect } from "react";
import "./Appointment.css";
import Footer from "./Footer";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
function Appoitment() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  const handleWhatsAppClick = () => {
    window.open("https://api.whatsapp.com/send?phone=919826614675");
  };
    
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate page load completion
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust time as needed

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <>
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      <ArrowBackIosIcon
        sx={{ color: "white", padding: "30px", fontSize: "50px" }}
        onClick={handleClick}
      ></ArrowBackIosIcon>
      <h1 className="appoitment-heading">BOOK A MEET !</h1>
      <div className="form-container">
        <form className="form" action="https://formsubmit.co/hellolucifer007@gmail.com" method="POST">
          <p className="title">Fill up your Details </p>

          <label>
            <input className="input" type="text" placeholder="" required="" name="email" />
            <span>Email</span>
          </label>

          <label>
            <input className="input" type="tel" placeholder="" required="" name="phone"/>
            <span>Phone Number</span>
          </label>
          <label>
            <textarea
              className="input"
              id="message-box"
              type="textarea"
              placeholder=""
              required=""
              name="message"
            />
            <span>Message</span>
          </label>
          <button className="submit" type="submit">Submit</button>
          <input type="hidden" name="_next" value="http://localhost:3000/thank-you"></input>
          <input type="hidden" name="_autoresponse" value="Thank You We will respond you back"></input>
        </form>
      </div>

      <div className="reachout-container" data-aos="fade-up" data-aos-delay="300">
        <h1 className="appoitment-heading">Reach out to us !</h1>
        <div className="reachout-content">
        <h3 className="contact-details">
          <button onClick={handleWhatsAppClick} type="button" className="btn-whatsapp">
          <img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt=""  className="whatsapp-icon"/>
            Connect on WhatsApp
          </button>
          </h3>
          <div className="map-container" lc-helper="gmap-embed">
                <iframe src="https://maps.google.com/maps?q=385%20Goyal%20Vihar%20Near%20Khajrana%20Ganesh%20Temple%2C%20UK&amp;t=m&amp;z=8&amp;output=embed&amp;iwloc=near" style={{borderRadius:'20px'}} className="map-content" title="map"></iframe>
              </div>
          </div>
      </div>
      <br></br>
      <br></br>
      <br></br>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Appoitment;
