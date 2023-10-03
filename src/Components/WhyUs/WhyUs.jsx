import React from "react";
import "./WhyUs.css";
import Typewriter from "typewriter-effect";
import performanceIcon from "../../assets/cards/performance.png";
import responsiveIcon from "../../assets/cards/responsive.png";
import seoIcon from "../../assets/cards/seo.png";
import Reveal from "../../Elements/Reveal/Reveal";
import { Link } from "react-router-dom";
import { setTransitionTrue } from "../../redux/features/animationSlice";
import { useDispatch } from "react-redux";

const data = [
  {
    heading: "High performance",
    description:
      "We devlier high performance websites which is lightning fast the garuntee results ans has flawless functionlaity",
    icon: performanceIcon,
  },
  {
    heading: "Responsive Design",
    description:
      "We create responsive web designs with immersive user experience across all devices, guaranteeing maximum user experience",
    icon: responsiveIcon,
  },
  {
    heading: "SEO Optimized",
    description:
      "We build SEO Optimized content for the website ensuring maximum traffic to the website, empowring you to stay ahead of the compition",
    icon: seoIcon,
  },
];

function WhyUs() {
  const dispatch = useDispatch();

  return (
    <div className="whyus">
      {/* the first is the the text with typewriting effect */}
      <div className="whyus__top">
        <div className="whyus__top__container">
          {/* <Reveal> */}
          <p className="whyus__top--text font_24 font_black font_light">
            Every essential element you need
          </p>
          {/* </Reveal> */}
          <p className="whyus__top--subText font_60">
            For crafting a top-tier{" "}
            <span className="primaryOne font_60">
              <Typewriter
                options={{
                  strings: [" Website.", " Brand."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </p>
        </div>
        <div>
          <Link
            to={"/contact"}
            onClick={() => dispatch(setTransitionTrue("contact"))}
          >
            <button className="whyus__contact--btn">Lets work together!</button>
          </Link>
        </div>
      </div>
      {/* The second is the website with the cards of deliverables */}
      <div className="whyus__bottom">
        {data.map((data, i) => (
          <div className="whyus__card" key={i}>
            <div className="whyus__card--top">
              <div className="whyus__card--container--icon">
                <img src={data.icon} className="whyus__card--icon" />
              </div>
            </div>
            <div className="whyus__card--bottom">
              <p className="whyus__card--heading font_black font_22 font_bold">
                {data.heading}
              </p>
              <p className="whyus__card--content font_offblack font_18">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyUs;
