import React, { useEffect, useState } from "react";
// import { useRef } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTransitionTrue } from "../../redux/features/animationSlice";
import { useLocation } from "react-router-dom";
import { showNav } from "../../redux/features/navigationSlice";

function Navbar({ textColorBlack }) {
  let location = useLocation();

  // const ref = useRef(null);
  const dispatch = useDispatch();
  const [showBurger, setShowBurger] = useState(false);
  const [navState, setNavState] = useState("");

  const handleScroll = () => {
    const position = window.pageYOffset;
    // setScrollPosition(position);
    if (position > 100) {
      setShowBurger(true);
    } else {
      setShowBurger(false);
    }
  };

  useEffect(() => {
    // console.log("location  is: ", location.pathname.slice(1));
    setNavState(location?.pathname?.slice(1));
  }, [location]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const setAnimationState = (e) => {
    console.log(e.target.id);
    dispatch(setTransitionTrue(e.target.id));
  };

  return (
    <div className="navbar">
      {/* {showBurger ? <div className="navbar__burger--float">a</div> : null} */}
      <div className="navbar__left">
        <p className="font_20 font_bold font_black">
          <Link
            className={`navbar__left--logo font_20 ${
              textColorBlack ? "navTextBlack" : "navTextWhite"
            }`}
            // onClick={setAnimationState}
            to="/"
          >
            <span className="navbar__logo--span font_20">{"<"}</span>Aman{" /"}
            <span className="navbar__logo--span font_20">{">"}</span>
          </Link>
        </p>
      </div>
      {/* <div className="navbar__left"></div> */}
      <div className="navbar__right">
        <ul className="navbar__right--items">
          <li className="navbar__right--item">
            {/* ref={ref} */}
            <Link
              className={`${
                textColorBlack
                  ? "navbar__right--item--link--black"
                  : "navbar__right--item--link--white"
              } font_18 
              ${
                navState === "work"
                  ? textColorBlack
                    ? "nav__linkActive--black"
                    : "nav__linkActive--white"
                  : ""
              } `}
              to="/work"
              id="Work"
              onClick={setAnimationState}
            >
              Work
            </Link>
          </li>
          <li className="navbar__right--item">
            <Link
              className={`${
                textColorBlack
                  ? "navbar__right--item--link--black"
                  : "navbar__right--item--link--white"
              } font_18 
              ${
                navState === "about"
                  ? textColorBlack
                    ? "nav__linkActive--black"
                    : "nav__linkActive--white"
                  : ""
              } `}
              to="/about"
              id="about"
              onClick={setAnimationState}
            >
              About
            </Link>
          </li>
          <li className="navbar__right--item">
            <Link
              className={`${
                textColorBlack
                  ? "navbar__right--item--link--black"
                  : "navbar__right--item--link--white"
              } font_18 
              ${
                navState === "contact"
                  ? textColorBlack
                    ? "nav__linkActive--black"
                    : "nav__linkActive--white"
                  : ""
              } `}
              to="/contact"
              id="Contact"
              onClick={setAnimationState}
            >
              Contact
            </Link>
          </li>

          {/* small screen display option */}
          <li className="navbar__right--item-resp">
            <Link
              className={`${
                textColorBlack
                  ? "navbar__right--item--link--black"
                  : "navbar__right--item--link--white"
              } font_18 
              ${
                navState === "contact"
                  ? textColorBlack
                    ? "nav__linkActive--black"
                    : "nav__linkActive--white"
                  : ""
              } `}
              // to="/contact"
              id="navSmallMenu"
              onClick={() => {
                dispatch(showNav());
              }}
            >
              Menu
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
