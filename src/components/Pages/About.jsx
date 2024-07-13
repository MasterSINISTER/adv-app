import React from "react";
import Navbar from "../NavBar";
import DynamicNav from "../DynamicNav";
import "./aboutStyle.css";
import Footer from "../Footer";

function About() {
  return (
    <>
      <div about-main-container>
        <div className="nav-container">
          <DynamicNav />
        </div>
        <h1
          style={{
            textAlign: "center",
            fontSize: "3rem",
            marginTop: "10%",
            textTransform: "uppercase",
            fontFamily: 'Fira Sans", sans-serif',
            fontWeight: "500",
            padding: "10px",
          }}
          className="about-heading"
        >
          About RK Gupta and Associates
        </h1>
        <div
          style={{
            width: "50%",
            textAlign: "center",
            margin: "auto",
          }}
        >
          <p
            style={{
              textAlign: "center",
            }}
            className="info-para"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
            unde quae nihil. Dicta, vel exercitationem libero vitae obcaecati
            magni ullam fugit. Illum sapiente necessitatibus accusantium
            consectetur ab repellat libero alias at! Quibusdam non repellendus
            eius ducimus eveniet optio delectus minus at, labore aperiam ullam
            dolore quasi veniam, tempora sit maxime ut, quia vero? Harum quo
            sint nemo corporis ad saepe amet neque, deleniti voluptas dolor
            architecto dolorum nostrum ducimus magni quaerat fugiat, ipsa error
            rem tenetur consequatur distinctio inventore temporibus numquam?
            Voluptate deserunt consequuntur repellat, alias fuga cum. Magnam
            saepe voluptatum cum animi quidem fugit. Maxime sint modi ratione
            sapiente!
          </p>
        </div>
        <div>
        <h1
          style={{
            textAlign: "center",
            fontSize: "3rem",
            marginTop: "10%",
            textTransform: "uppercase",
            fontFamily: 'Fira Sans", sans-serif',
            fontWeight: "500",
            padding: "10px",
          }}
          className="about-heading"
        >
          Our Advocates
        </h1>
        <div style={{ display: "flex", gap: "2rem", padding: "10px" }}>
          <img
            src="https://superlawyer.in/wp-content/uploads/2023/05/Raghav-Sabharwal-Photo-1-1450x1536.jpg" className="info-para"
            style={{ width: "30%", height: "30%", borderRadius: "20px" }}
          ></img>
          <h3
            className="info-para"
            style={{ textAlign: "center", fontWeight: "400" }}
          >
            <h2  className="title-aboutus">RK GUPTA</h2>
            <p className="adv-info"> ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            nisi iure voluptatibus laboriosam fugiat tempora natus dolore,
            provident voluptate, explicabo illo sit ea possimus doloribus
            repellendus, rerum eaque laborum quaerat cupiditate. Numquam ipsum
            neque, perspiciatis repellendus minus exercitationem eius totam
            commodi sapiente optio inventore error, ducimus excepturi expedita
            corporis fuga soluta provident, nesciunt quo! Incidunt delectus
            commodi, dolores accusantium in magnam quibusdam eligendi
            perspiciatis animi atque aut illo modi, nobis dolorem itaque, veniam
            tempora. Repellat hic odit quo facilis autem quae eveniet ducimus id
            nostrum cupiditate? Fuga repellendus minima accusantium.</p>
          </h3>
        </div>
        <div style={{ display: "flex", gap: "2rem", padding: "10px" }}>
          <img
            src="https://superlawyer.in/wp-content/uploads/2023/05/Raghav-Sabharwal-Photo-1-1450x1536.jpg" className="info-para"
            style={{ width: "30%", height: "auto", borderRadius: "20px" }}
          ></img>
          <h3 style={{ textAlign: "center", fontWeight: "400" }} className="info-para">
            <h2 className="title-aboutus">AISHWARYA GUPTA </h2>
            <p className="adv-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            omnis, dolores voluptas corrupti quisquam asperiores ea quas veniam
            nihil molestias magnam officia sed modi! Ea a maiores quo architecto
            laudantium dicta, recusandae similique atque adipisci consequuntur
            quos aspernatur in quaerat eum eveniet minima tempore excepturi est
            fugiat ipsam delectus maxime. Eius perspiciatis, nostrum corporis
            architecto voluptas amet exercitationem. Dignissimos quisquam, sed,
            voluptatibus recusandae consequuntur laboriosam aliquam error omnis
            repudiandae eaque architecto facilis mollitia dolorem ipsam ipsum
            soluta, illo delectus vitae.</p>
          </h3>
        </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default About;
