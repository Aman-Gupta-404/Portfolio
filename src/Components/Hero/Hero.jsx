import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";
import hero_image from "../../assets/hero_svg.svg";
import hero_gif from "../../assets/hero_gif.gif";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTransitionTrue } from "../../redux/features/animationSlice";
import Reveal from "../../Elements/Reveal/Reveal";

function Hero() {
  const dispatch = useDispatch();

  return (
    <div className="hero">
      <div className="hero__left">
        {/* <Reveal> */}
        <p className="hero__left--text--name font_24 font_black font_light">
          We build <span className="primaryOne font_24">Websites</span>
        </p>
        {/* </Reveal> */}
        <p className="hero__left--text font_55 ">
          that drive Results and gains Trust!
        </p>
        <p className="hero__left--subText font_20 font_offblack">
          From getting your presence online to boosting it, our websites deliver
          Great Business Impacts.
        </p>
        <Link
          to={"/contact"}
          onClick={() => dispatch(setTransitionTrue("contact"))}
        >
          <button className="hero__left--button">Let's Build a Website!</button>
        </Link>
      </div>
      <div className="hero__right">
        {/* <motion.div
          className="hero__blob"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0 }}
        ></motion.div> */}
        <img src={hero_image} className="hero__image" />
      </div>
    </div>
  );
}

export default Hero;
