import React, { useState, useEffect } from "react";
import "./NavBurger.css";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { hideNav, showNav } from "../../redux/features/navigationSlice";

function NavBurger({ stopScroll, enableScroll }) {
  const dispatch = useDispatch();
  const navStat = useSelector((state) => state.navigationState.navDisplay);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    console.log("the height is: ", window.innerHeight);
    if (navStat) {
      console.log("checking nav otpion to true");
      stopScroll();
    } else {
      enableScroll();
    }
  }, [navOpen, navStat]);

  const onButtonCLick = () => {
    console.log("clicked");
    setNavOpen(!navOpen);
    if (navStat) {
      dispatch(hideNav());
    } else {
      dispatch(showNav());
    }
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

  const sectiom = () => {
    return (
      <div className="navSection" id={`${navStat ? "navSection--open" : null}`}>
        <div className="navSection__black">
          <p className="navSection--heading font_16 font_offblack">
            NAVIGATION
          </p>
          <hr className="navSection__br" />
          <div className="navSection__links">
            <AnimatePresence>
              {navStat ? (
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
              {navStat ? (
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
              {navStat ? (
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
              {navStat ? (
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
    );
  };

  return (
    <>
      {/* the burger icon */}
      <motion.button
        onClick={onButtonCLick}
        className="navBurger"
        id={`${navStat ? "navBurger--open" : null}`}
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
          id={`${navStat ? "burgerline--cross--top" : null}`}
        ></div>
        <div
          className="divBurger--line"
          id={`${navStat ? "burgerline--cross--bottom" : null}`}
        ></div>
      </motion.button>

      {/* the nav section */}
    </>
  );
}

export default NavBurger;
