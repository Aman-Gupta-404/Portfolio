import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { motion } from "framer-motion";
import PictureAnimation from "../../Components/PictureAnimation/PictureAnimation";
import "./About.css";
import image from "../../assets/about2.jpg";
// icons
import { FaLaptopCode, FaDatabase } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import Footer from "../../Components/Footer/Footer";
import { useDispatch } from "react-redux";
import { setTransitionTrue } from "../../redux/features/animationSlice";
import { Link } from "react-router-dom";

function About() {
  const dispatch = useDispatch();

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

  return (
    <motion.div
      className="about"
      variants={pageTransitionVariant}
      initial="pageInitial"
      animate="pageEnter"
      exit="pageExit"
    >
      <Navbar textColorBlack={true} />
      <div className="about__section">
        <div className="about__header">
          {/* <p className="about__heading font_60 font_black">Lorem ipsum</p>
          <p className="about__subheading font_60 font_black">Lorem Ipsum</p> */}

          {/* <div className="about__sectionHeader">
            <p className="about__sectionHeading font_offwhite font_18">
              Who am I?
            </p>
            <hr className="about__sectionHeader--line" />
          </div> */}

          <div className="about__content--bi">
            <div className="about__content--left">
              <p className="about__sectionHeading font_offwhite font_18">
                Who am I?
              </p>
              <hr className="about__sectionHeader--line" />
              <p className="about__section--text font_22 font_offblack">
                Hi, I am Aman Gupta, a fullstack Developer from India. For the
                past 1 year I have helped my clients get their presence online
                and generate more leads and provide a greater user experience to
                their customers.
              </p>
            </div>
            <div className="about__content--right">
              <div className="about__Content--image--bg about__image--two"></div>
              <div className="about__Content--image--bg about__image--one"></div>
              <img
                src={image}
                alt="Aman's picture"
                className="about__content--right--image"
              />
            </div>
          </div>

          <div className="about_services">
            <p className="about__sectionHeading font_offwhite font_18">
              My services
            </p>
            <hr className="about__sectionHeader--line" />

            <div className="about__services--section">
              {/* first card */}
              <div className="about__section--card">
                <div className="about__card--iconHead">
                  <FaLaptopCode id="about__card--icon" />
                </div>
                <div className="about__service--name">
                  <p className="about__service--name--text font_18 font_blue">
                    Frontend Development
                  </p>
                </div>
                <div className="about__services--description">
                  <p className="about__services--description--text font_16 font_black">
                    I provide front-end Development services, all the way from
                    designing the website to developing the the website which is
                    adaptable to all the devices and screens.
                  </p>
                </div>

                <div className="about__services--points">
                  <p className="about__services--point font_black font_18">
                    HTML
                  </p>
                  {/* <hr className="about__services--line" /> */}
                  <p className="about__services--point font_black font_20">
                    Javascript
                  </p>
                  <p className="about__services--point font_black font_20">
                    CSS
                  </p>
                  <p className="about__services--point font_black font_20">
                    React.js
                  </p>
                  <p className="about__services--point font_black font_20">
                    Figma
                  </p>
                </div>
              </div>
              {/* second card */}
              <div className="about__section--card">
                <div className="about__card--iconHead">
                  <FaDatabase id="about__card--icon" />
                </div>
                <div className="about__service--name">
                  <p className="about__service--name--text font_18 font_blue">
                    Backend Development
                  </p>
                </div>
                <div className="about__services--description">
                  <p className="about__services--description--text font_16 font_black">
                    I provide backend development services, where I build
                    complex backend for the projects along with a data base, and
                    create API's for the frontend to access it.
                  </p>
                </div>

                <div className="about__services--points">
                  <p className="about__services--point font_black font_18">
                    Node.Js
                  </p>
                  {/* <hr className="about__services--line" /> */}
                  <p className="about__services--point font_black font_20">
                    Javascript
                  </p>
                  <p className="about__services--point font_black font_20">
                    Express.Js
                  </p>
                  <p className="about__services--point font_black font_20">
                    Rest API
                  </p>
                  <p className="about__services--point font_black font_20">
                    Mongo DB
                  </p>
                </div>
              </div>
              {/* third card */}
              <div className="about__section--card">
                <div className="about__card--iconHead">
                  <FaGears id="about__card--icon" />
                </div>
                <div className="about__service--name">
                  <p className="about__service--name--text font_18 font_blue">
                    Full Package
                  </p>
                </div>
                <div className="about__services--description">
                  <p className="about__services--description--text font_16 font_black">
                    I provide full stack development solution, from creating the
                    architecture of the website to having a fully functional
                    website hosted on the web.
                  </p>
                </div>

                <div className="about__services--points">
                  <p className="about__services--point font_black font_18">
                    Node.Js
                  </p>
                  {/* <hr className="about__services--line" /> */}
                  <p className="about__services--point font_black font_20">
                    Mongo Db
                  </p>
                  <p className="about__services--point font_black font_20">
                    Express.Js
                  </p>
                  <p className="about__services--point font_black font_20">
                    React.Js
                  </p>
                  <p className="about__services--point font_black font_20">
                    Redux
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* footer */}
        </div>
      </div>
      {/* contact page */}
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
      <Footer />
      {/* <PictureAnimation /> */}
    </motion.div>
  );
}

export default About;
