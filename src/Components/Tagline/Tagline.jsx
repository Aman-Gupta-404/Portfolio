import React from "react";
import "./Tagline.css";
import SVG1 from "../SVGs/SVG1";
import brandImage from "../../assets/Services/brand.gif";
import webImage from "../../assets/Services/web.gif";

function Tagline() {
  return (
    <div className="tagline">
      <div className="tagline__div timeline__forward timeline__reverse">
        <div className="tagline__div--left tagline__image__reverse">
          <img className="tagline__image" src={webImage} alt="" />
        </div>
        <div className="tagline__div--right">
          <p className="font_70 font_offblack font_bold tagline__text--right">
            We dont just build{" "}
            <span className="font_blue font_70 font_bold">Websites</span>
          </p>
        </div>
      </div>
      <div className="tagline__div timeline__forward">
        <div className="tagline__div--left tagline__image__forward">
          <img className="tagline__image " src={brandImage} alt="" />
        </div>
        <div className="tagline__div--right">
          <p className="font_70 font_offblack font_bold">
            We build{" "}
            <span className="primaryOne font_70 font_bold">Brand!</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tagline;
