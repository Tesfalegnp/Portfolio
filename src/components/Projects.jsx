import React, { useEffect, useState } from 'react';
import { fetchGitHubRepos } from '../utils/fetchGitHubRepos';
import { Link } from 'react-router-dom';
import '../assets/styles/projects.css';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRepos = async () => {
      try {
        const data = await fetchGitHubRepos();
        const sortedRepos = data
          .filter(repo => !repo.fork)
          .sort((a, b) => 
            b.stargazers_count - a.stargazers_count || 
            new Date(b.updated_at) - new Date(a.updated_at)
          );
        setRepos(sortedRepos);
      } catch (error) {
        console.error('Error fetching GitHub repos:', error);
      } finally {
        setLoading(false);
      }
    };
    getRepos();
  }, []);

  const displayedRepos = repos.slice(0, 10);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
          <div className="divider"></div>
        </div>

        {loading ? (
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading projects...</p>
          </div>
        ) : (
          <>
            <div className="projects-grid">
              {displayedRepos.map((repo) => (
                <ProjectCard key={repo.id} repo={repo} />
              ))}
            </div>

            {repos.length > 10 && (
              <div className="view-more-container">
                <Link to="https://github.com/Tesfalegnp" className="view-more-btn">
                  View All Projects ({repos.length})
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

const ProjectCard = ({ repo }) => {
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

const formatProjectName = (name) => {
  return name
    .replace(/-/g, ' ')
    .replace(/_/g, ' ')
    .replace(/(^\w|\s\w)/g, m => m.toUpperCase());
};

export default Projects;