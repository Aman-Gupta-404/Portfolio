import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./WorkDisplay.css";
import pransiv from "../../assets/pransiv.png";
import laviour from "../../assets/laviour.png";
import marotia from "../../assets/marotia.png";

const work1 =
  "A landing page for a Steel manufacturing company, which was used by the client to generate more leads for his company. This application is a frontend application built on React.js";
const work2 =
  "A fullstack E-commerce application to help small clothing business.I didn't work on this project from the start yet I made a lot of changes and added features on the front end as well as the backend";
const work3 =
  "A landing page for a Bio-degradable Dishware manufacturing company, which was used by the client to generate more leads for his company. This application is a frontend application built on React.js";

/**
 * 
 * laviour,
          "Laviour Pvt. Ltd.",
          work2,
          "https://www.laviour.com/",
          true,
          "Updates and management"
 */

const data = [
  {
    image: marotia,
    name: "Marotia Biowares",
    des: work3,
    link: "https://www.marotiabiowares.com/",
    reverse: true,
    job: "Development",
    status: true,
  },
  {
    image: pransiv,
    name: "Pransiv Concret Pvt. Ltd.",
    des: work1,
    link: "http://www.pransivconcret.co.in/",
    reverse: false,
    job: "Design & Development",
    status: false,
  },
  {
    image: laviour,
    name: "Laviour Pvt. Ltd.",
    des: work2,
    // link: "https://www.laviour.com/",
    link: "",
    reverse: true,
    job: "Updates & management",
    status: false,
  },
];

function WorkDisplay({ cursor }) {
  const [showCustomCursor, setShowCustomCursor] = useState(false);
  const [workHover, setWorkHover] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    // console.log("y pos id: ", mousePosition.y);
    const mouseMove = (e) => {
      // console.log(e.clientY);
      setMousePosition({
        ...mousePosition,
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.addEventListener("mousemove", mouseMove);
    };
  }, []);

  const displayProj = (image, name, des, link, reverse, job, status) => {
    return (
      <div
        className="work__card"
        id={`${reverse ? "work__card--reverse" : null}`}
        key={des}
      >
        <div className="work__card--imageContainer">
          <img src={image} alt="image1" className="work__card__img" />
        </div>

        <div
          className="work__card--desContainer"
          id={`${reverse ? "work__card--des--reverse" : null}`}
        >
          <p className="work__card__name primaryOne font_24">{name}</p>
          <p className="work__card__gig font_16 font_offwhite">{job}</p>
          {/* <hr className="work__card--line" /> */}
          <div className="work__card__desCon">
            <p
              className="work__card__des font_black font_20"
              id={`${reverse ? "work__card--des--text--reverse" : null}`}
            >
              {des}
            </p>
          </div>
          {/* <div className="work__card__desCon--footer"> */}
          {status ? (
            <Link
              to={link}
              target="_blank"
              className="work__card__button"
              onMouseEnter={(e) => {
                setShowCustomCursor(false);
              }}
              onMouseLeave={(e) => setShowCustomCursor(true)}
            >
              Visit
            </Link>
          ) : (
            <Link
              to={link}
              //   target="_blank"
              onClick={(e) => e.preventDefault()}
              className="work__card__button--disabled"
              onMouseEnter={(e) => {
                setShowCustomCursor(false);
              }}
              onMouseLeave={(e) => setShowCustomCursor(true)}
            >
              Visit
            </Link>
          )}

          {/* </div> */}
        </div>
      </div>
    );
  };

  return (
    <div
      className="homepage__work"
      onMouseEnter={(e) => {
        setShowCustomCursor(true);
      }}
      onMouseLeave={(e) => setShowCustomCursor(false)}
    >
      {showCustomCursor && cursor ? (
        <div
          className="homePage__work--cursor"
          id={workHover ? "homePage__hover" : null}
          style={{
            left: mousePosition.x - 15 + "px",
            top: mousePosition.y - 15 + "px",
            zIndex: 10,
          }}
        >
          <p className="homePage__work--cursorText font_18 font_white">
            {workHover ? (
              <span className="homePage__work--cursorText--span">
                View <BiLinkExternal id="home_work_icon" />
              </span>
            ) : null}
          </p>
        </div>
      ) : null}
      <p className="homePage__work--heading font_offblack font_20">
        Recent works
      </p>
      <hr className="homePage__work--line" />

      <div className="workDisplay">
        {data.map((proj) =>
          displayProj(
            proj.image,
            proj.name,
            proj.des,
            proj.link,
            proj.reverse,
            proj.job,
            proj.status
          )
        )}
        {/* {displayProj(
          pransiv,
          "Pransiv Concret Pvt. Ltd.",
          work1,
          "http://www.pransivconcret.co.in/",
          false,
          "Design and Development"
        )}
        {displayProj(
          laviour,
          "Laviour Pvt. Ltd.",
          work2,
          "https://www.laviour.com/",
          true,
          "Updates and management"
        )}
        {displayProj(
          marotia,
          "Marotia Biowares",
          work3,
          "https://www.marotiabiowares.com/",
          false,
          "Development"
        )} */}
      </div>
    </div>
  );
}

export default WorkDisplay;
