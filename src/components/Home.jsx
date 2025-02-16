import React, { useEffect,useState} from "react";
import "./homeStyle.css";

import BlurText from "./ui/BlurText/BlurText";
import Stack from "./ui/Stack/Stack";
import Footer from "./Footer";
import TiltedCard from "./ui/TiltedCard/TiltedCard";
import RotatingText from "./ui/RotatingText/RotatingText";
import Aurora from "./ui/Aurora/Aurora";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountUp from "react-countup";
import { Card } from "react-bootstrap";
import { Rating } from "@mui/material";
function Home() {
  
gsap.registerPlugin(ScrollTrigger);
  const navigate=useNavigate();
  const getToStart = () => {
    navigate("/contact");
  }
 
  const images = [
    {
      id: 1,
      img: "https://i.postimg.cc/K8wyNpyG/I-couldn-t-be-happier-with-the-service-I-received-from-Mr-R-K-Gupta-and-delivered-exactly-what-I-was.png",
    },
    {
      id: 2,
      img: "https://i.postimg.cc/XqjMJT98/I-couldn-t-be-happier-with-the-service-I-received-from-Mr-R-K-Gupta-and-delivered-exactly-what-I-was.png",
    },
    {
      id: 3,
      img: "https://i.postimg.cc/jqc09Srk/I-couldn-t-be-happier-with-the-service-I-received-from-Mr-R-K-Gupta-and-delivered-exactly-what-I-was.png",
    },
    {
      id: 4,
      img: "https://i.postimg.cc/8cP3DLVX/I-couldn-t-be-happier-with-the-service-I-received-from-Mr-R-K-Gupta-and-delivered-exactly-what-I-was.png",
    },
  ];

  useEffect(() => {
    gsap.to(".lawyer-img",{
      scrollTrigger:{
        trigger:".lawyer-img",
        toggleActions:"play pause resume restart",
        scrub:2,
        // markers:true,
        },
      x:240,
      duration:2,
  
    });
    gsap.to(".person-img",{
      scrollTrigger:{
        trigger:".person-img",
        toggleActions:"play pause resume restart",
        scrub:2,
        },
      translateX:-240,
      duration:2,
      // ease:"none",
  
    });
    gsap.utils.toArray(".firstSection-heading").forEach((heading) => {
      gsap.to(heading, {
        scrollTrigger: {
          trigger: heading,
          toggleActions: "play pause resume stop",
          // start:"center 80%",
          scrollers: ".firstSection-heading",
          scrub: 1,
        },
        scale: 1.1,
        y: -100,
        opacity: 1,
        duration: 2,
      });
    });
    gsap.to(".secondSection-heading", {
      scrollTrigger: {
        trigger: ".secondSection-heading",
        toggleActions: "play pause reverse stop",
        scrollers: ".stack-container",
        scrub: 2,
      },
      scale: 1.15,
      // translateX: -100,
      delay: 1,
      opacity: 1,
      color: "grey",
      duration: 2,
    })

    gsap.to(".para-style",{
      scrollTrigger:{
        trigger:".para-style",
        toggleActions:"play pause resume restart",
        scrub:1,
        },
      opacity:1,
      duration:2,
    })
  }, []);

  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("Accepted") !== "true") {
      document.body.style.overflow = "hidden";
      setShowModal(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("Accepted", "true");
    document.body.style.overflow = "auto";
    setShowModal(false);
  };
  return (
    <>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Disclaimer</h2>
            <p>As per the rules of the Bar Council of India, we are not permitted to solicit work and advertise. By visiting the website, the user acknowledges that the information provided on this website is solely available for informational purposes only sought to be voluntarily gained by him/her and is neither soliciting nor advertisement. Further, the information provided on this website is accessed by the user’s own volition, and any transmission, receipt or use of this information available on this website does not create any liability or any relationship with us.</p>
            <button onClick={handleAccept} className="btn-accept">Accept</button>
          </div>
        </div>
      )}

      <div className="top-container">
      
 <Nav/>
        <div className="video-container">
        <Aurora
  colorStops={["#00D8FF", "#00D8FF", "#00D8FF"]}
  speed={1}
  className="aurora"
/>
       
          {/* <Spline scene="https://prod.spline.design/akjlNvwd3otKrzNA/scene.splinecode" /> */}
        {/* <img src="https://i.postimg.cc/qvbLWvZs/blk5.jpg" className="image-background" alt="spline"></img> */}
          <div className="heading-container">
            <div>
              <BlurText
                text="RK GUPTA"
                delay={200}
                animateBy="letter"
                direction="top"
                className="heading"
              />
              <BlurText
                text="& ASSOCIATES"
                delay={300}
                animateBy="letter"
                direction="top"
                className="heading-sub"
              />
          
             <div style={{display:"flex",flexDirection:"row"}} className="switcher-div" >
             <h1 className="sub-heading" >We Help You with </h1>
             <RotatingText
                texts={['Legal Matters', 'Disputes', 'Claims', 'Justice!']}
                mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%",opacity: 0 }}
                animate={{ y: 0 ,opacity: 1}}
                exit={{ y: "-100%",opacity: 0 }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                splitBy="characters"
                transition={{ type: "spring", damping: 40, stiffness: 400 }}
                rotationInterval={3500}
                loop={false}
                className="heading-switch"              />
             </div>
              
        <button className="btn-explore" onClick={getToStart}>Get Assistance !</button>
            </div>
          </div>
        </div>
      </div>

      <section className="about-us">
    
        <h1 className="firstSection-heading">
            Legal Assistance at Right Time
          </h1>
      
        <div
          className="firstSection-container"
        >

          <div className="para-container">
          <div
     className="img-container"
>
  <img
    src="https://i.postimg.cc/266fhMyY/2330082.webp"
    alt="lawyerImage"
    className="lawyer-img"
  />

  <img
    src="https://i.postimg.cc/pdkH9R2k/4538053.webp"
    alt="lawyerImage"
    className="person-img"
  />
</div>
            <p className="para-style">
              {/* Advocate R. K. Gupta has been practicing and handling cases
              independently with a result oriented approach, both professionally
              and ethically . He has now acquired many years of professional
              experience in providing legal consultancy and advisory services.
              He provides services in various fields of Divorce Matters, Family
              Matters, Civil Matters, Property Matters, Child Custody Matters
              and drafting and vetting of various agreements and documents.
              Actually Hiring an experienced divorce lawyer is the best way to
              get peace of mind when dealing with matrimonial cases, child
              custody, alimony, and mutual divorce or contested divorce
              proceedings. Consult a top rated divorce lawyer Advocate R.K.Gupta
              for marriage issues to file or defend your mutual divorce
              petition, contested divorce, alimony, domestic violence (DV),
              interim maintenance, 125 CrPC, dowry harassment u/s 498a in High
              Court ,Indore and Indore Family court. Women may consult for any
              other related matters as mentioned above to Advocate R.K.Gupta who
              is enrolled with the Bar Council of Madhya Pradesh in 2000.He has
              been looking matters in M .P. High Court, Indore bench, District
              and Session court and Family court ,Indore and its surrounded
              areas. */}

Legal assistance at the right time can protect your rights, prevent complications, and ensure fair outcomes. Whether it's a criminal case, civil dispute, business matter, or employment issue, timely legal guidance can save you from unnecessary stress and financial loss. Consulting a lawyer before signing contracts, handling disputes, or facing legal action helps you stay compliant with the law and make informed decisions. From protecting businesses to defending individuals, professional legal support ensures justice and peace of mind. Don't wait for problems to escalate—seek legal help when you need it the most.
              <br></br>
              <br></br>
              <br></br>
            </p>
          
          </div>
        </div>
      </section>

      <section className="services-section" >

        <h1 className="firstSection-heading">Our Services</h1>
        {/* <div className="services-container">
        <Spline scene="https://prod.spline.design/HNIw2OUmhoGcqraf/scene.splinecode" />
        </div> */}
        <div
          className="cards-container"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <TiltedCard
            imageSrc="https://www.shutterstock.com/image-vector/legal-advice-lawyer-during-divorce-600nw-2491887577.jpg"
            altText="FAMILY LAWS"
            captionText="Matters Related to Marriage, Divorce, and Inheritance."
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text">FAMILY LAWS</p>
            }
          />
          <TiltedCard
            imageSrc="https://d3jlwjv6gmyigl.cloudfront.net/images/2020/06/boun172.jpg"
            altText="NEGOTIABLE INSTRUMENT ACT"
            captionText="Matters Related to Cheque Bounce."
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text">NEGOTIABLE INSTRUMENT ACT</p>
            }
          />
          <TiltedCard
            imageSrc="https://edzorblaw.com/wp-content/uploads/2024/08/image-300.png"
            altText="ARBITRATION"
            captionText="Matters Related to Dispute Resolution Outside Court."
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text">ARBITRATION</p>
            }
          />
          <TiltedCard
            imageSrc="https://www.shutterstock.com/image-vector/two-men-had-car-accident-600nw-1382994359.jpg"
            altText="MOTOR ACCIDENT CLAIM CASES"
            captionText="Matters Related to Compensation for Road Accidents."
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text">MOTOR ACCIDENT CLAIM CASES</p>
            }
          />
          <TiltedCard
            imageSrc="https://media.istockphoto.com/id/2136024434/vector/consumer-buying-with-legal-protection-consumer-law-protects-customer-with-insurance-concept.jpg?s=612x612&w=0&k=20&c=Bhy5wQwN_4A5cp3mueUI7h3qFKCzjRGragClIxQP-Zg="
            altText="CONSUMER PROTECTION"
            captionText="Matters Related to Rights and Remedies for Consumers."
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text">CONSUMER PROTECTION</p>
            }
          />
          <TiltedCard
            imageSrc="https://www.edgeverve.com/the-edge-quarterly/wp-content/uploads/2020/06/Dept-collection-banner.png"
            altText="MONEY RECOVERY CASES"
            captionText="Matters Related to Legal Recovery of Dues."
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text">MONEY RECOVERY CASES</p>
            }
          />
          <TiltedCard
            imageSrc="https://www.endnowfoundation.org/wp-content/uploads/2021/07/Cyber-Crime--scaled.jpg"
            altText="CYBER LAW AND IT ACT "
            captionText="Matters Related to Digital Crimes and Online Regulations."
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text">CYBER LAW AND IT ACT</p>
            }
          />
          <TiltedCard
            imageSrc="https://media.istockphoto.com/id/1338639446/vector/male-judge-standing-behind-podium-semi-flat-color-vector-character.jpg?s=612x612&w=0&k=20&c=2134bQUVLiMEjxCIIsBLyMDIrhFAEuD_Meg-z-Ep6Ok="
            altText="TRANSFER PETITION IN SUPREME COURT"
            captionText="Matters Related to Shifting Cases Between Courts."
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}

            overlayContent={
              <p className="tilted-card-demo-text">TRANSFER PETITION IN SUPREME COURT</p>
            }
          />
          <TiltedCard
            imageSrc="https://static.vecteezy.com/system/resources/thumbnails/044/292/890/small_2x/tax-evasion-4k-animation-of-frustrated-businessman-ran-with-full-money-from-tax-bills-video.jpg"
            altText="TAX EVASION CASES"
            captionText="Matters Related to Illegal Non-Payment of Taxes."
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text">TAX EVASION CASES</p>
            }
          />
        </div>
      </section>
      <section
        className="our-services"
      >
        <h1 className="firstSection-heading">Testimonials</h1>
        <div style={{ marginTop: "10%" }}>
          <div className="tes-cards-container" data-aos="slide-right" delay={1000}>
            <div className="tes-card">
              <img src="https://assets-v2.lottiefiles.com/a/72d1e8f4-1169-11ee-be4e-f75a6faac104/K5i1Cfk8j5.gif" alt="" className="img-avatar"/>
            <br></br>
            <br></br>
<Rating name="size-small" defaultValue={5}  readOnly size="Medium" sx={{ color: "white" }}/>
              <h2 className="tes-heading">
              Akanksha
              </h2>
              <h3 className="tes-content">
              Consultation was nice. I am satisfied with it.              </h3>
              </div>
              <div className="tes-card">
              <img src="https://assets-v2.lottiefiles.com/a/82411e66-1184-11ee-8cfa-d707e53cae38/bccvxj7Ogv.gif" alt="" />
              <br></br>
            <br></br>
<Rating name="size-small" defaultValue={5}  readOnly size="Medium" sx={{ color: "white" }}/>
              <h2 className="tes-heading">
              Nitin
              </h2>
              <h3 className="tes-content">
              The advise provided by advocate was very helpful.</h3>
              </div>
              <div className="tes-card">
              
              <img src="https://cdn.dribbble.com/users/456158/screenshots/6305721/care-bot.gif" alt="" />
              <br></br>
            <br></br>
<Rating name="size-small" defaultValue={5} readOnly size="Medium" sx={{ color: "white" }}/>
              <h2 className="tes-heading">
              Anindita 
              </h2>
              <h3 className="tes-content">
              Thanks for recommending Advocate Gupta. A genuine expert, with impressive knowledge and experience. He helped us solve our problem in a warm and unassuming manner.              </h3>
              </div>
          </div>
          {/* <div className="stack-container" data-aos="fade-in">
          <Stack
            randomRotation={true}
            sensitivity={180}
            sendToBackOnClick={false}
            cardDimensions={{ width: 200, height: 200 }}
            cardsData={images}
          />
         
          </div> */}
          <div className="stats-container" data-aos="fade-in">
            <div>
            <CountUp
              to={4025}
              start={0}
              end={4025}
              duration={40}
              separator=","
              startWhen={true}
            />
            <br>
            </br>
            <label>Successful Cases</label>
            </div>
            
            <div>
            <CountUp
              to={3270}
              start={0}
              end={3270}
              duration={40}
              separator=","
              startWhen={true}
            />
            <br>
            </br>
            <label>Trusted Clients</label>
            </div>
            <div>
            <CountUp
              to={6349}
              start={0}
              end={6349}
              duration={40}
              separator=","
              startWhen={true}
            />
            <br>
            </br>
            <label>Case Studies</label>
            </div>
            <div>
            <CountUp
              to={851}
              start={0}
              end={851}
              duration={40}
              separator=","
              startWhen={true}
            />
            <br>
            </br>
            <label>Registered Case</label>
            </div>
            
            
          </div>
         
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Home;
