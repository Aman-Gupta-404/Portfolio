import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";

const renderTags = () => {
  return (
    <div className="tags__container">
      <div className="hero_tag"></div>
    </div>
  );
};

function Hero() {
  return (
    <div className="hero">
      <div className="hero__left">
        <p className="hero__left--text--name font_24 font_black font_light">
          Hi, I am <span className="primaryOne">Aman Gupta</span>
        </p>
        <p className="hero__left--text font_60 font_bold">
          I'm a web developer!
        </p>
        <p className="hero__left--subText font_20 font_offwhite">
          I do web design and fullstack web development
        </p>
        {/* <button className="hero__left--button">

        </button> */}
      </div>
      <div className="hero__right">
        <motion.div
          className="hero__blob"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0 }}
        ></motion.div>
      </div>
    </div>
  );
}

export default Hero;
