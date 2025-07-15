// src/utils/fetchGitHubRepos.js
export const fetchGitHubRepos = async () => {
  try {
    const res = await fetch('https://api.github.com/users/Tesfalegnp/repos ');
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('Error fetching GitHub repos:', err);
    return [];
  }
};