import React from 'react';
import '../assets/styles/Skills.css';


const Skills = () => {
  const skillsData = [
    {
      category: 'AI / Machine Learning',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'TensorFlow', level: 85 },
        { name: 'PyTorch', level: 80 },
        { name: 'Scikit-learn', level: 85 },
        { name: 'OpenCV', level: 75 },
        { name: 'NLP', level: 70 }
      ],
      icon: '🧠'
    },
    {
      category: 'Web Development',
      skills: [
        { name: 'JavaScript', level: 95 },
        { name: 'React', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Express', level: 75 },
        { name: 'CSS3', level: 85 }
      ],
      icon: '🌐'
    },
    {
      category: 'DevOps & Tools',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'CI/CD', level: 65 },
        { name: 'Linux', level: 80 }
      ],
      icon: '🛠️'
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">Technologies I work with</p>
          <div className="divider"></div>
        </div>

        <div className="skills-container">
          {skillsData.map((category, index) => (
            <div key={index} className="skill-category-card">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.category}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${skill.level}%` }}
                        data-level={skill.level}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;