import React, { useEffect, useState } from 'react';
import { fetchGitHubRepos } from '../utils/fetchGitHubRepos';

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const getRepos = async () => {
      const data = await fetchGitHubRepos();
      setRepos(data);
    };
    getRepos();
  }, []);

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="repo-list">
        {repos.length > 0 ? (
          repos.map((repo) => (
            <div key={repo.id} className="repo-card">
              <h3>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              </h3>
              <p>{repo.description || 'No description provided.'}</p>
            </div>
          ))
        ) : (
          <p>Loading projects...</p>
        )}
      </div>
    </section>
  );
};

export default Projects;