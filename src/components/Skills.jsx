import React from 'react';

const Skills = () => {
  const aiSkills = ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV'];
  const webSkills = ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Express'];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3>AI / Machine Learning</h3>
          <ul>
            {aiSkills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="skill-category">
          <h3>Web Development</h3>
          <ul>
            {webSkills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;