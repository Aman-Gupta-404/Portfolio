import React from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import { useState, useEffect, useRef } from "react";
import Preloader from "../../Components/Preloader/Preloader";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import Footer from "../../Components/Footer/Footer";
import { BiLinkExternal } from "react-icons/bi";
import Projects from "../../Components/Projects/Projects";
import { Link, useNavigate } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";
import pransiv from "../../assets/pransiv.png";
import laviour from "../../assets/laviour.png";
import marotia from "../../assets/marotia.png";
import Testimonial from "../../Components/Testimonial/Testimonial";
import TransitionLoder from "../../Components/TransitionLoder/TransitionLoder";
import { setTransitionTrue } from "../../redux/features/animationSlice";
import { useDispatch } from "react-redux";
import WorkDisplay from "../../Components/WorkDisplay/WorkDisplay";

const work1 =
  "A landing page for a Steel manufacturing company, which was used by the client to generate more leads for his company. This application is a frontend application built on React.js";
const work2 =
  "A fullstack E-commerce application to help small clothing business.I didn't work on this project from the start yet I made a lot of changes and added features on the front end as well as the backend";
const work3 =
  "A landing page for a Bio-degradable Dishware manufacturing company, which was used by the client to generate more leads for his company. This application is a frontend application built on React.js";

function Home({ loadValue }) {
  console.log("load value is: ", loadValue);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [showPreLoader, setShowPreLoader] = useState(true);
  const [showCustomCursor, setShowCustomCursor] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [workHover, setWorkHover] = useState(false);

  useEffect(() => {
    if (loadValue) {
      setTimeout(() => {
        setShowPreLoader(false);
      }, 3350);
    } else {
      setTimeout(() => {
        setShowPreLoader(false);
      }, 1000);
    }
  }, []);

  useEffect(() => {
    // console.log("y pos id: ", mousePosition.y);
    const mouseMove = (e) => {
      // console.log(e.clientY);
      setMousePosition({
        ...mousePosition,
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.addEventListener("mousemove", mouseMove);
    };
  }, []);

  const homeSection = () => {
    return (
      <motion.div
        initial={{
          y: "100vh",
        }}
        animate={{
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <Navbar textColorBlack={true} />
        <Hero />
      </motion.div>
    );
  };

  const workVariant = {
    default: {
      y: mousePosition.y - 15,
      x: mousePosition.x - 15,
    },
  };

  const displayProj = (image, name, des, link, reverse, job) => {
    return (
      <div
        className="work__card"
        id={`${reverse ? "work__card--reverse" : null}`}
      >
        <div className="work__card--imageContainer">
          <img src={image} alt="image1" className="work__card__img" />
        </div>

        <div
          className="work__card--desContainer"
          id={`${reverse ? "work__card--des--reverse" : null}`}
        >
          <p className="work__card__name primaryOne font_24">{name}</p>
          <p className="work__card__gig font_16 font_offwhite">{job}</p>
          <hr className="work__card--line" />
          <div className="work__card__desCon">
            <p
              className="work__card__des font_black font_20"
              id={`${reverse ? "work__card--des--text--reverse" : null}`}
            >
              {des}
            </p>
          </div>
          {/* <div className="work__card__desCon--footer"> */}
          <Link to={link} target="_blank" className="work__card__button">
            Visit
          </Link>
          {/* </div> */}
        </div>
      </div>
    );
  };

  return (
    <div className="homePage">
      <AnimatePresence>
        {showPreLoader ? (
          loadValue ? (
            <Preloader />
          ) : (
            <TransitionLoder value={"Home"} />
          )
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {showPreLoader ? null : (
          <>
            {homeSection()}
            <div className="hopePage__about">
              <p className="homePage__about--heading font_20 font_offblack">
                About me
              </p>
              <hr className="homePage__about--line" />
              <div className="homePage__about--section">
                <div className="homePage__about--left">
                  <p className="homePage__about--left--text font_22 font_black">
                    I would define myself as a tech and Business Enthusiast. I
                    am a keen learner and through my work, I help clients solve
                    their problems using technology.
                  </p>
                </div>
                <div className="homePage__about--right">
                  <p className="homePage__about--left--text font_18 font_offblack">
                    My passion, skills for technology, and understanding of
                    Business allows me to provide satisfactory services to my
                    clients.
                  </p>
                </div>
              </div>
              <div className="homePage__about--action">
                <Link
                  to="/about"
                  onClick={() => dispatch(setTransitionTrue("About"))}
                >
                  <button className="homePage__about--action--btn">
                    Know more
                  </button>
                </Link>
              </div>
            </div>
            {/* recent work section */}
            <WorkDisplay cursor={true} />
            <div className="projects_home">
              {/* <Projects /> */}
              <Projects />
            </div>
            {/* Testimonials */}
            <Testimonial />
            {/* home contact section */}
            <div className="homePage__contact">
              <p className="homePage__contact--heading  font_blue">
                Let's Get In Touch
              </p>
              <p className="homePage__contact--text font_20 font_offwhite">
                If you have come so far, you must have a project in mind. Let's
                talk and I'll help you translate those amazing ideas to reality!
              </p>
              <div className="homePage__contact--action">
                <hr className="homePage__about--line" />
                <Link
                  to="/contact"
                  onClick={() => dispatch(setTransitionTrue("contact"))}
                >
                  <button
                    className="homePage__btn"
                    // onClick={() => navigate("/contact")}
                  >
                    Contact me
                  </button>
                </Link>
              </div>
            </div>
            {/* footer */}
            <Footer />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Home;
