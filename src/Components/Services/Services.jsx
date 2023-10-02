import React from "react";
import "./Services.css";
import ecomImage from "../../assets/Services/dash.png";
import portfolioImage from "../../assets/Services/portfolio1.png";
import webImage from "../../assets/Services/web.png";
import { BsCheckCircle } from "react-icons/bs";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTransitionTrue } from "../../redux/features/animationSlice";
import { Link } from "react-router-dom";

const servicesData = [
  {
    heading: "Ecommerce Store",
    image: ecomImage,
    description:
      "In the competitive world of ecommerce, create an E-store to convert your visitors to customers.",
    importantDeliveriables: [
      "Mobile Friendly Design",
      "Email Automation",
      "Personalized solution",
    ],
    CTA: "Build your store now!",
  },
  {
    heading: "Portfolio Websites",
    image: portfolioImage,
    description:
      "As a professional, portfolio is your online resume. You need to show yoru work in the best possible way and also provide a good user experience to your users.",
    importantDeliveriables: [
      "Mobile Friendly Design",
      "Customized portfolio solution",
    ],
    CTA: "Build your Portfolio now!",
  },
  {
    heading: "Landing Page",
    image: webImage,
    description:
      "An online presence is a must in today's world and your customers build a perspective about your business through your website. We buld customized websites according to bysiness requirements",
    importantDeliveriables: [
      "Mobile Friendly Design",
      "SEO Optimization",
      "Customized Business solution",
    ],
    CTA: "Build your Website now!",
  },
];

function Services() {
  const ref = useRef(null);
  const dispatch = useDispatch();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.4 1"],
  });

  // useEffect(() => {
  //   console.log("scroll y value is: ", scrollYProgress);
  // });

  const servicesCard = (data, key) => {
    let cardReverseFlag = key % 2 === 0 ? false : true;

    return (
      //   <motion.div ref={ref}>
      <motion.div
        style={{
          scale: scrollYProgress,
          opacity: scrollYProgress,
        }}
        className="services__card"
        id={`${
          !cardReverseFlag
            ? "services__card--reverse"
            : "services__card--normal"
        }`}
        key={data.heading}
      >
        <div
          className="services__card--left"
          id={`${
            !cardReverseFlag
              ? "services__card--data-reverse"
              : "services__card--data-normal"
          }`}
        >
          <h2 className="font_38 font_white">{data.heading}</h2>
          <p className="font_offwhite2 font_20">{data.description}</p>
          <ul>
            {data.importantDeliveriables.map((item, i) => (
              <li className="services__card--list" key={i}>
                <BsCheckCircle id="services__card--icon" />
                <p
                  className="font_offwhite2 font_20 services__card--list--text"
                  key={item}
                >
                  {item}
                </p>
              </li>
            ))}
          </ul>
          <Link
            to={"/contact"}
            onClick={() => dispatch(setTransitionTrue("contact"))}
          >
            <button className="services__card--btn">{data.CTA}</button>
          </Link>
        </div>

        <div className="services__card--right">
          <img
            src={data.image}
            alt={data.heading}
            className="services__card--right--image"
          />
        </div>
      </motion.div>
      //   </motion.div>
    );
  };

  return (
    <div className="services" ref={ref} key={"services"}>
      <p className="services__heading font_20 font_offblack">Our Services</p>
      <hr className="services__line" />

      {/* services card */}
      {servicesData.map((item, index) => (
        <div key={index}>{servicesCard(item, index)}</div>
      ))}
    </div>
  );
}

export default Services;
