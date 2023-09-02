import React from "react";
import "./ProjectCard.css";
import docs_picture from "../../assets/docs.png";
import { AiOutlineLink } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";

function ProjectCard({ projectName, projectDes, link, github, picture }) {
  return (
    <div className="projectCard">
      <div className="image_section">
        <img src={picture} alt={projectName} className="card_image" />
      </div>

      <div className="card__content">
        <div>
          <p className="primaryOne font_20 card_heading">{projectName}</p>
          <p className="font_16 font_offblack card_des">{projectDes}</p>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <Link to={link} className="card_button">
            Demo
            <AiOutlineLink id="card_button--icon" />
          </Link>
          <Link to={github} className="card_button">
            Repo
            <FiGithub id="card_button--icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
