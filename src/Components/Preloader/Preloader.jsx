import React, { useState, useEffect } from "react";
import "./Preloader.css";
import { motion, AnimatePresence, animate, easeInOut } from "framer-motion";

function Preloader({ hideLoader }) {
  const [displayState, setDisplayState] = useState(1);
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    show: {
      opacity: 1,
      y: 0,
    },
    hide: {
      opacity: 0,
      y: -200,
    },
  };

  const boxVariant = {
    start: {
      opacity: 0,
      y: "-70vh",
      width: "20px",
      height: "20px",
      borderRadius: "50%",
    },
    show: {
      opacity: 1,
      y: [-600, 0, -50, 0, -50, 0],
      transition: {
        // type: "spring",
        duration: 1,
        delay: 2,
      },
    },
  };

  useEffect(() => {
    if (displayState === 4) {
      hideLoader();
    }

    // if (setDisplayState < 4) {
    setTimeout(() => {
      setDisplayState(0);
      setTimeout(() => {
        setDisplayState(2);
        setTimeout(() => {
          setDisplayState(0);
          setTimeout(() => {
            setDisplayState(3);
            setTimeout(() => {
              setDisplayState(4);
            }, 800);
          }, 400);
        }, 800);
      }, 400);
    }, 800);
    // }
  }, []);

  const preloaderClose = {
    initial: {
      height: "100vh",
      width: "100vw",
      bottom: 0,
    },
    close: {
      height: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    show: {
      height: "100vh",
      width: "100vw",
    },
  };

  const renderText = () => {
    if (displayState === 1) {
      return (
        <motion.div
          key={displayState}
          className="preloader__container"
          initial={{
            opacity: 0,
            // y: -200,
            transition: {
              delay: 0,
            },
          }}
          animate={{
            opacity: 1,
            // y: 0,
            transition: {
              duration: 0.2,
            },
          }}
          exit={{
            opacity: 0,
            // y: 200,
            transition: {
              delay: 0,
              duration: 0.3,
            },
          }}
        >
          <p
            className="preloader__text font_60 font_white"
            // initial="hidden"
            // animate="visible"
          >
            Design.
          </p>
        </motion.div>
      );
    } else if (displayState === 2) {
      return (
        <motion.div
          key={displayState}
          className="preloader__container"
          initial={{
            opacity: 0,
            // y: -200,
            transition: {
              delay: 0,
            },
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.2,
              duration: 0.3,
            },
          }}
          exit={{
            opacity: 0,
            // y: 200,
            transition: {
              delay: 0,
              duration: 0.3,
            },
          }}
        >
          <p
            className="preloader__text font_60 font_white"
            // initial="hidden"
            // animate="visible"
          >
            Development.
          </p>
        </motion.div>
      );
    } else if (displayState === 3) {
      return (
        <motion.div
          key={displayState}
          className="preloader__container"
          initial={{
            opacity: 0,
            // y: -200,
            transition: {
              delay: 0,
            },
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0,
              duration: 0.2,
            },
          }}
          exit={{
            opacity: 0,
            // y: 200,
            transition: {
              delay: 0,
              duration: 0.3,
            },
          }}
        >
          <p
            className="preloader__text font_60 font_white"
            // initial="hidden"
            // animate="visible"
          >
            Business.
          </p>
        </motion.div>
      );
    } else if (displayState === 4) {
      return null;
    } else return null;
  };

  return (
    <motion.div
      variants={preloaderClose}
      initial="initial"
      animate="show"
      exit="close"
      key="preloader__container"
      className="preloader"
    >
      <AnimatePresence>{renderText()}</AnimatePresence>
    </motion.div>
  );
}

export default Preloader;
