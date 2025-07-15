import React from 'react';

const ProjectCard = ({ repo }) => {
  const formatProjectName = (name) => {
    return name
      .replace(/-/g, ' ')
      .replace(/_/g, ' ')
      .replace(/(^\w|\s\w)/g, m => m.toUpperCase());
  };

  return (
    <div className="project-card">
      <div className="card-header">
        <h3>
          <a 
            href={repo.html_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
          >
            {formatProjectName(repo.name)}
          </a>
        </h3>
        <div className="repo-meta">
          {repo.language && (
            <span className="language-badge">
              {repo.language}
            </span>
          )}
          <div className="stars-forks">
            <span className="stars">
              ⭐ {repo.stargazers_count}
            </span>
            <span className="forks">
              🍴 {repo.forks_count}
            </span>
          </div>
        </div>
      </div>
      <p className="project-description">
        {repo.description || 'No description provided.'}
      </p>
      <div className="card-footer">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="view-code-btn"
        >
          View Code
        </a>
        {repo.homepage && (
          <a
            href={repo.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="live-demo-btn"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;