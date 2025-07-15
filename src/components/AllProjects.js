import React from 'react';
import { useLocation } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import '../assets/styles/projects.css';

const AllProjects = () => {
  const location = useLocation();
  const repos = location.state?.repos || [];

  return (
    <section id="all-project" className="projects-sectio all-projects-pag">
        <div className="projects-gr">
          {repos.map((repo) => (
            <ProjectCard key={repo.id} repo={repo} />
          ))}
        </div>
    </section>
  );
};

export default AllProjects;