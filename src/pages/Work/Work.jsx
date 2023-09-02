import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { motion } from "framer-motion";
import "./Work.css";
import pransiv from "../../assets/pransiv.png";
import laviour from "../../assets/laviour.png";
import marotia from "../../assets/marotia.png";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Testimonial from "../../Components/Testimonial/Testimonial";
import { useDispatch } from "react-redux";
import { setTransitionTrue } from "../../redux/features/animationSlice";
import Projects from "../../Components/Projects/Projects";

const work1 =
  "A landing page for a Steel manufacturing company, which was used by the client to generate more leads for his company. This application is a frontend application built on React.js";
const work2 =
  "A fullstack E-commerce application to help small clothing business.I didn't work on this project from the start yet I made a lot of changes and added features on the front end as well as the backend";
const work3 =
  "A landing page for a Bio-degradable Dishware manufacturing company, which was used by the client to generate more leads for his company. This application is a frontend application built on React.js";

function Work() {
  const dispatch = useDispatch();
  const [showCustomCursor, setShowCustomCursor] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [workHover, setWorkHover] = useState(false);
  // animation variant
  const pageTransitionVariant = {
    pageInitial: {
      y: "100vh",
    },
    pageEnter: {
      y: 0,
      transition: {
        delay: 1,
        duration: 0.7,
      },
    },
    pageExit: {
      y: 0,
      transition: {
        delay: 0,
        duration: 1,
      },
    },
  };

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
    <motion.div
      className="work"
      variants={pageTransitionVariant}
      initial="pageInitial"
      animate="pageEnter"
      exit="pageExit"
    >
      <Navbar textColorBlack={true} />
      <div className="work__section">
        <p className="work__section--heading font_60 font_black">Work</p>
        <p className="work__section--subHeading font_18 font_offblack">
          Over the past one year I have helped clients with my{" "}
          <span className="work__section--subHeading--span font_18">
            design
          </span>
          ,{" "}
          <span className="work__section--subHeading--span font_18">
            frontend developemnt
          </span>{" "}
          and{" "}
          <span className="work__section--subHeading--span font_18">
            backend developemnt
          </span>
          .
        </p>

        <p className="work__section__header font_offblack">Client works</p>
        <hr className="work__section__header--line" />
        <div className="workDisplay">
          {displayProj(
            pransiv,
            "Pransiv Concret Pvt. Ltd.",
            work1,
            "http://www.pransivconcret.co.in/",
            false,
            "Design and Development"
          )}
          {displayProj(
            laviour,
            "Laviour Pvt. Ltd.",
            work2,
            "https://www.laviour.com/",
            true,
            "Updates and management"
          )}
          {displayProj(
            marotia,
            "Marotia Biowares",
            work3,
            "https://www.marotiabiowares.com/",
            false,
            "Development"
          )}
        </div>
      </div>

      {/* <Projects /> */}
      <div className="projects_home">
        <Projects />
      </div>
      {/* testimonial */}
      <div className="work__testimonial">
        <Testimonial />
      </div>

      {/* home contact section */}
      <div className="homePage__contact">
        <p className="homePage__contact--heading  font_blue">
          Let's Get In Touch
        </p>
        <p className="homePage__contact--text font_20 font_offwhite">
          If you have come so far, you must have a project in mind. Let's talk
          and I'll help you translate those amazing ideas to reality!
        </p>
        <div className="homePage__contact--action">
          <hr className="homePage__about--line" />
          <Link
            to="/contact"
            onClick={() => dispatch(setTransitionTrue("contact"))}
          >
            <button className="homePage__btn">Contact me</button>
          </Link>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </motion.div>
  );
}

export default Work;
