import React from "react";
import Navbar from "./Navbar";
import Cards from "./Cards";
import TypeIt from "typeit-react";
import "./homeStyle.css";
import Review from "./Review";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";
import CountUp from "react-countup";
function Home() {
  AOS.init();
  return (
    <>
      <Navbar />
      <section className="home-expertise">
        <TypeIt>
          <h1 style={{ textAlign: "center", fontSize: "3rem" }}>EXPERTISE</h1>
        </TypeIt>
        <div
          data-aos="fade-up"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          <Cards
            imgsrc="https://cdn.iconscout.com/icon/premium/png-512-thumb/lawyer-35-841710.png?f=webp&w=256"
            title="Marriage Counsellor"
            desc="Marriage counselling is a kind of psychotherapy that helps resolve conflicts between couples and improves their relationship. It is often offered by family and marriage therapists to enable a couple to make decisions about rebuilding their relationship or going their own separate ways"
          />
          <Cards
            imgsrc="https://cdn.iconscout.com/icon/premium/png-512-thumb/lawyer-35-841710.png?f=webp&w=256"
            title="Marriage Counsellor"
            desc="Marriage counselling is a kind of psychotherapy that helps resolve conflicts between couples and improves their relationship. It is often offered by family and marriage therapists to enable a couple to make decisions about rebuilding their relationship or going their own separate ways"
          />
          <Cards
            imgsrc="https://cdn.iconscout.com/icon/premium/png-512-thumb/lawyer-35-841710.png?f=webp&w=256"
            title="Marriage Counsellor"
            desc="Marriage counselling is a kind of psychotherapy that helps resolve conflicts between couples and improves their relationship. It is often offered by family and marriage therapists to enable a couple to make decisions about rebuilding their relationship or going their own separate ways"
          />
          <Cards
            imgsrc="https://cdn.iconscout.com/icon/premium/png-512-thumb/lawyer-35-841710.png?f=webp&w=256"
            title="Marriage Counsellor"
            desc="Marriage counselling is a kind of psychotherapy that helps resolve conflicts between couples and improves their relationship. It is often offered by family and marriage therapists to enable a couple to make decisions about rebuilding their relationship or going their own separate ways"
          />
          <Cards
            imgsrc="https://cdn.iconscout.com/icon/premium/png-512-thumb/lawyer-35-841710.png?f=webp&w=256"
            title="Marriage Counsellor"
            desc="Marriage counselling is a kind of psychotherapy that helps resolve conflicts between couples and improves their relationship. It is often offered by family and marriage therapists to enable a couple to make decisions about rebuilding their relationship or going their own separate ways"
          />
          <Cards
            imgsrc="https://cdn-icons-png.freepik.com/512/8306/8306669.png"
            title="Income Tax Advisor"
            desc="A Income Tax Advisor is an individual who is a financial expert holding specialized tax accounting, tax law knowledge, and know-how. In complicated financial cases, the services of a tax advisor are typically retained to reduce the tax payable while staying compliant with the law."
          />
        </div>
        <button className="btn-more">More</button>
      </section>
      <section style={{ height: "auto", width: "auto" }}>
        <h1 style={{ textAlign: "center", fontSize: "3rem" }}>PROGRESS</h1>
        <div
          className="home-counter"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
          }}
          data-aos="zoom-in"
        >
          <CountUp
            style={{
              fontSize: "2rem",
              fontWeight: "800",
              border: "7px solid green",
              padding: "2rem",
              borderRadius: "500rem",
            }}
            start={0}
            end={4025}
            duration={20}
          ></CountUp>
          <h3
            className="subheading-counter"
            style={{ marginTop: "4rem", fontSize: "1.3rem" }}
          >
            Successfull Cases
          </h3>
          <CountUp
            style={{
              fontSize: "2rem",
              fontWeight: "800",
              border: "7px solid Brown",
              padding: "2rem",
              borderRadius: "500rem",
            }}
            start={0}
            end={3270}
            duration={20}
          ></CountUp>
          <h3
            className="subheading-counter"
            style={{ marginTop: "4rem", fontSize: "1.3rem" }}
          >
            Trusted Client
          </h3>
          <CountUp
            style={{
              fontSize: "2rem",
              fontWeight: "800",
              border: "7px solid Skyblue",
              padding: "2rem",
              borderRadius: "500rem",
            }}
            start={0}
            end={6349}
            duration={20}
          ></CountUp>
          <h3
            className="subheading-counter"
            style={{ marginTop: "4rem", fontSize: "1.3rem" }}
          >
            Case Studies
          </h3>
          <CountUp
            style={{
              fontSize: "2rem",
              fontWeight: "800",
              border: "7px solid orange",
              padding: "2rem",
              borderRadius: "500rem",
            }}
            start={0}
            end={851}
            duration={10}
          ></CountUp>
          <h3
            className="subheading-counter"
            style={{ marginTop: "4rem", fontSize: "1.3rem" }}
          >
            Registerd Cases
          </h3>
        </div>
      </section>
      <section className="home-review">
        <div>
          <h1 style={{ textAlign: "center", fontSize: "3rem" }}>RATING</h1>
          <Review />
        </div>
      </section>

      <section className="home-footer">
        <Footer />
      </section>
    </>
  );
}

export default Home;
