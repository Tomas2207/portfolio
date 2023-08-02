import React from 'react';
import Project from './Project';
import { projectsArray } from '../constants/ProjectArray';

const Projects = () => {
  return (
    <section className="projects__container section__padding" id="projects">
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
              isVideo={project.isVideo}
              animation_delay={0.2}
              key={i}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
