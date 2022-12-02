import React from 'react';
import Project from './Project';
import { projectsArray } from '../constants/ProjectArray';

const Projects = () => {
  return (
    <div className="projects__container" id="projects">
      <h2>Projects</h2>
      <div className="projects">
        {projectsArray.map((project, i) => {
          return (
            <Project
              desc={project.desc}
              img_path={project.img_path}
              title={project.title}
              live_url={project.live_url}
              server={project.server}
              code_url={project.code_url}
              images={project.images}
              animation_delay={project.animation_delay}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
