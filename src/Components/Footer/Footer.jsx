import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <p className="footer__heading font_16 font_offblack">Version</p>
        <p className="footer__subheading--left font_18 font_white">
          2023 &#169; Edition
        </p>
      </div>
      <div className="footer__right">
        <p className="footer__heading font_16 font_offblack">Socials</p>
        <p className="footer__subheading--right font_16 font_offblack">
          <Link
            to="https://linkedin.com/in/amangupta3"
            target="_blank"
            className="footer__links"
          >
            Linkedin
          </Link>
          {/* <Link className="footer__links">Instagram</Link> */}
          <Link
            to="https://github.com/Aman-Gupta-404"
            target="_blank"
            className="footer__links"
          >
            Github
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
