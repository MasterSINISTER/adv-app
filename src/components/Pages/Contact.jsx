import React, { useState } from "react";
import "./contactStyle.css";
import emailjs from "emailjs-com";


function Contact() {
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_x5mc1en",
        "template_i2f2fi2",
        formDetails,
        "Xp9-zPSsXom-0cwzT"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setFormDetails({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
   
    </>
  );
}

export default Contact;
