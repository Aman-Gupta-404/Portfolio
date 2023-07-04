import React from "react";
import "./Anitest.css";
import { motion } from "framer-motion";

function Anitest() {
  return (
    <div
      className="animate"
      //   initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
    >
      <motion.div
        className="motion"
        initial={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
        }}
        animate={{
          width: "max-content",
        }}
        transition={{ duration: 3 }}
      >
        <p className="font_42 font_white">tesxt</p>
      </motion.div>
    </div>
  );
}

export default Anitest;
