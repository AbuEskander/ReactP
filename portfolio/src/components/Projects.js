import React from "react";
import PROJECTS from "../data/projects";
const imageStyle = {
  width: "250px",
  height: "150px",
};
const Projects = () => {
  return (
    <div>
      <h2>مشاريعي</h2>
      <div>
        {PROJECTS.map((value) => (
          <Project key={Project.id} Project={value} />
        ))}
      </div>
    </div>
  );
};

const Project = ({ Project }) => {
  return (
    <div className="card">
      <img src={Project.image} style={imageStyle} alt="My Blog Project" />
      <h3 style={{ color: "gray", fontSize: 20 }}>{Project.title}</h3>
      <p> {Project.desc}</p>
      <button>GitRepo</button>
    </div>
  );
};
export default Projects;
