import React, { useState, useEffect } from "react";
import "./NavBurger.css";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function NavBurger({ stopScroll, enableScroll }) {
  const dispatch = useDispatch();
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (navOpen) {
      console.log("checking nav otpion to true");
      stopScroll();
    } else {
      enableScroll();
    }
  }, [navOpen]);

  const onButtonCLick = () => {
    console.log("clicked");
    setNavOpen(!navOpen);
  };

  const navSectionVariant = {
    initial: {
      borderTopLeftRadius: "150vh",
      borderBottomLeftRadius: "150vh",
      x: "100%",
      // height: 0,
    },
    animate: {
      borderBottomLeftRadius: 0,
      borderTopLeftRadius: 0,
      x: 0,
      // height: "300vh",
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      borderTopLeftRadius: "50vh",
      borderBottomLeftRadius: "50vh",
      x: "100%",
    },
  };

  const linkVariants = {
    initial: {
      x: 100,
      opacity: 0,
    },
  };

  const setAnimationState = (e) => {
    console.log(e.target.id);
    dispatch(setTransitionTrue(e.target.id));
  };

  return (
    <>
      {/* the burger icon */}
      <motion.button
        onClick={onButtonCLick}
        className="navBurger"
        id={`${navOpen ? "navBurger--open" : null}`}
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          // backgroundColor: "#1c1d20",
        }}
        // whileHover={{
        //   backgroundColor: "rgb(97, 131, 228)",
        //   transition: {
        //     type: "spring",
        //     bounce: 0,
        //     duration: 0.3,
        //   },
        // }}
      >
        <div
          className="divBurger--line"
          id={`${navOpen ? "burgerline--cross--top" : null}`}
        ></div>
        <div
          className="divBurger--line"
          id={`${navOpen ? "burgerline--cross--bottom" : null}`}
        ></div>
      </motion.button>

      {/* the nav section */}
      <div className="navSection" id={`${navOpen ? "navSection--open" : null}`}>
        <div className="navSection__black">
          <p className="navSection--heading font_16 font_offblack">
            NAVIGATION
          </p>
          <hr className="navSection__br" />
          <div className="navSection__links">
            <AnimatePresence>
              {navOpen ? (
                <Link
                  to="/"
                  className="navSection__link font_50 font_white"
                  onClick={setAnimationState}
                  id="home"
                >
                  <motion.p
                    key="link1"
                    className="navSection__link--item"
                    // key={1}
                    variants={linkVariants}
                    initial="initial"
                    animate={{
                      x: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.4,
                      },
                    }}
                    exit={{
                      x: 100,
                      opacity: 0,
                      duration: 0.3,
                    }}
                  >
                    Home
                  </motion.p>
                </Link>
              ) : null}
            </AnimatePresence>

            <AnimatePresence>
              {navOpen ? (
                <Link
                  to="/work"
                  className="navSection__link font_50 font_white"
                  onClick={setAnimationState}
                  id="Work"
                >
                  <motion.p
                    key="link1"
                    className="navSection__link--item"
                    // key={1}
                    variants={linkVariants}
                    initial="initial"
                    animate={{
                      x: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.45,
                      },
                    }}
                    exit={{
                      x: 100,
                      opacity: 0,
                      duration: 0.33,
                    }}
                  >
                    Work
                  </motion.p>
                </Link>
              ) : null}
            </AnimatePresence>
            <AnimatePresence>
              {navOpen ? (
                <Link
                  to="/work"
                  className="navSection__link font_50 font_white"
                  onClick={setAnimationState}
                  id="about"
                >
                  <motion.p
                    key="link1"
                    className="navSection__link--item"
                    // key={1}
                    variants={linkVariants}
                    initial="initial"
                    animate={{
                      x: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.5,
                      },
                    }}
                    exit={{
                      x: 100,
                      opacity: 0,
                      duration: 0.39,
                    }}
                  >
                    About
                  </motion.p>
                </Link>
              ) : null}
            </AnimatePresence>
            <AnimatePresence>
              {navOpen ? (
                <Link
                  to="/contact"
                  className="navSection__link font_50 font_white"
                  onClick={setAnimationState}
                  id="contact"
                >
                  <motion.p
                    key="link1"
                    className="navSection__link--item"
                    // key={1}
                    variants={linkVariants}
                    initial="initial"
                    animate={{
                      x: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.55,
                      },
                    }}
                    exit={{
                      x: 100,
                      opacity: 0,
                      duration: 0.42,
                    }}
                  >
                    Contact
                  </motion.p>
                </Link>
              ) : null}
            </AnimatePresence>
          </div>
          {/* <hr className="navSection__br" /> */}

          <div className="navSection__footer">
            <p className="navSection__footer--heading font_14 font_offwhite">
              SOCIALS
            </p>
            <Link
              to={"https://linkedin.com/in/amangupta3"}
              target="_blank"
              className="navSection__footer--link font_white font_18"
            >
              Linkedin
            </Link>
            <Link
              to={"https://github.com/Aman-Gupta-404"}
              target="_blank"
              className="navSection__footer--link font_white font_18"
            >
              Github
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBurger;
