import React from "react";
import "./feedback.css";
import { motion } from "framer-motion";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";

function Feedback() {
  const navigate = useNavigate();
  return (
    <>
      <ArrowBack
        sx={{
          color: "white",
          padding: "30px",
          fontSize: "50px",
          cursor: "pointer",
          position: "absolute",
          zIndex: "9999",
        }}
        onClick={() => navigate("/")}
      />
      <div className="main-container">
        <motion.h1
          className="feedback-heading"
          initial={{ opacity: 0 }}
          animate={{ y: ["0px", "20px"], opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          FEEDBACK !
        </motion.h1>
        <motion.div
          className="form-container"
          initial={{ opacity: 0 }}
          animate={{ x: ["0px", "20px"], opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <form
            action="https://formsubmit.co/hellolucifer007@gmail.com"
            method="POST"
            className="form-outer"
          >
            <h3 className="form-heading">Send a Feedback</h3>
            <input
              type="hidden"
              name="_next"
              value="http://localhost:3000/"
            ></input>
            <input
              type="text"
              className="get-name"
              placeholder="Enter the Name"
              required
              name="name"
            />
            <input
              type="email"
              name="email"
              className="get-email"
              placeholder="Enter the Email"
              required
              style={{ position: "relative", top: "20px" }}
            />
            <textarea
              name="message"
              id=""
              required
              className="message"
              placeholder="Enter the Message !"
              style={{ resize: "none", position: "relative", top: "50px" }}
            ></textarea>
            <input
              type="hidden"
              name="_autoresponse"
              value="Thank You For Your Feedback !"
            ></input>
            <div className="rating-container">
              <span className="rating-label">Rate Us :</span>
              <Rating
                name="rating-value"
                defaultValue={3}
                size="large"
                className="rating-star"
                sx={{
                  color: "black",
                  outline: "1px solid white",
                  padding: "5px",
                  backgroundColor: "white",
                  borderRadius: "80px",
                }}
              />
            </div>
            <button
              className="btn-send-feedback"
              onClick={() => alert("Feedback Submitted Successfully !")}
            >
              Send
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
}

export default Feedback;
