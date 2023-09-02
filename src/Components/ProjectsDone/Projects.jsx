import React from "react";
import "./Projects.css";
import img from "../../assets/work_a_1.png";

function Projects() {
  return (
    <div className="projects">
      <p className="projects__head font_20 font_offblack">Personal Projects</p>
      <hr className="projjects_hr" />

      <div className="projects__section">
        <div className="projects__card">
          <img src={img} alt="" className="projects__card__img" />
        </div>
      </div>
    </div>
  );
}

// export default Projects;
