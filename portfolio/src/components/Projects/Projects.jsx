import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Bookstore Management System"
          main="This is a Ecommerce website Using Java build a website to manage the bookstore operations"
        />
        <ProjectCard
          title="Myntra Clone"
          main="this is a bloggin website created in ReactJs and used some component library to make a fully functional Myntra clone"
        />
        <ProjectCard
          title="Portfolio Website"
          main="this is a blogging website created this in ReactJs and used some component library to show Case my skills and information about me"
        />
      </div>
    </div>
  );
};

export default Projects;