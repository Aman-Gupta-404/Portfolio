import React, { useState, useEffect } from "react";
import "./TransitionLoader.css";
import { AnimatePresence, motion } from "framer-motion";

function TransitionLoder({ value }) {
  const [displayText, setDisplayText] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDisplayText(false);
    }, 1000);
  }, []);

  const animationRender = () => {
    return (
      <motion.div
        className="transition"
        initial={{
          // x: 0,
          // y: -50,
          height: 0,
          // width: "100vw",
          // borderBottomLeftRadius: "50vw",
          // borderBottomRightRadius: "50vw",
          top: 0,
        }}
        animate={{
          y: 0,
          height: "100vh",
          borderRadius: 0,
          transition: {
            duration: 0.5,
            // delay: 5,
          },
        }}
        exit={{
          height: 0,
          bottom: 0,
          // borderBottomLeftRadius: "50vw",
          // borderBottomRightRadius: "50vw",
          transition: {
            duration: 0.8,
            // delay: 0.5,
          },
        }}
        // transition={{
        //     duration={}
        // }}
      >
        <AnimatePresence>
          {displayText ? (
            <motion.p
              className="transition__text font_60 font_white"
              initial={{
                opacity: 0,
                y: -100,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.4,
                },
              }}
              exit={{
                opacity: 0,
                y: -50,
              }}
            >
              {value ?? "Aman.tech"}
            </motion.p>
          ) : null}
        </AnimatePresence>
      </motion.div>
    );
  };

  const newAniRender = () => {
    return (
      <div className="transition">
        {/* <motion.p
        className="transition__text font_60"
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.4,
          },
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
      >
        {value ?? "Aman.tech"}
      </motion.p> */}
      </div>
    );
  };

  return (
    // <div className="transition">
    //   <p className="transition__text">Page</p>
    // </div>
    animationRender()
    // newAniRender()
  );
}

export default TransitionLoder;
