import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import octoPicture from "../../assets/octo.png";
import docsPicture from "../../assets/docs.png";
import messengerPicture from "../../assets/messenger.png";

const data = [
  {
    name: "Octo AI (AI SAAS platform)",
    description:
      "A full stack AI SAAS Platform built on Next JS 13. This Saas application uses the Open AI's GPT API's to produce results for the prompts given to the application.",
    picture: octoPicture,
    link: "https://octo-ai-three.vercel.app/",
    github: "https://github.com/Aman-Gupta-404/octo-ai",
  },
  {
    name: "Google Docs Clone",
    description: "A simple google docs clone made using React.js and Node.js",
    picture: docsPicture,
    link: "https://google-docs-clone-hy6f.onrender.com/",
    github: "https://github.com/Aman-Gupta-404/google_docs_clone",
  },
  {
    name: "Full Stack Messenger App",
    description:
      "A Full MERN Stack messenger app, with real time messaging functionality and with email authentication.",
    picture: messengerPicture,
    link: "https://google-docs-clone-hy6f.onrender.com/",
    github: "https://github.com/Aman-Gupta-404/google_docs_clone",
  },
];

function Projects() {
  return (
    <>
      <p className="homePage__work--heading font_offblack font_20">
        Some personal projects
      </p>
      <hr className="homePage__work--line" style={{ marginBottom: "35px" }} />
      <div
        style={{
          marginTop: "20px",
          width: "90%",
          flexWrap: "wrap",
          display: "flex",
          gap: "10px",
          margin: "auto",
          justifyContent: "space-between",
        }}
      >
        {data.map((project) => (
          <ProjectCard
            projectName={project.name}
            projectDes={project.description}
            link={project.link}
            github={project.github}
            picture={project.picture}
          />
        ))}
      </div>
    </>
  );
}

export default Projects;
