import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/images/my.jpg'; // Update with your image path
import '../assets/styles/about.css';

const About = () => {
  const skills = [
    { name: 'Python', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'MongoDB', level: 70 },
    { name: 'TensorFlow', level: 75 },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title"
        >
          <span className="section-number">01.</span> About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="about-text"
          >
            <div className="about-description">
              <p>
                Hello! I'm Tesfalegn, a passionate <span className="highlight">Software Engineering</span> student at Mizan Tepi University and an <span className="highlight">AI Research Intern</span> at iCog-Labs, where I work on cutting-edge artificial intelligence solutions.
              </p>
              <p>
                My journey in technology began when I discovered my fascination with how machines can learn and solve complex problems. Since then, I've dedicated myself to mastering both <span className="highlight">AI/ML</span> and <span className="highlight">full-stack development</span> to build intelligent, impactful systems.
              </p>
              <p>
                I've successfully completed <span className="highlight">30+ projects</span> ranging from computer vision models to scalable web applications, each challenging me to grow and innovate.
              </p>
              <p>
                Here are a few technologies I've been working with recently:
              </p>
            </div>

            <div className="skills-container">
              <ul className="skills-list">
                {skills.slice(0, 3).map((skill, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="skill-arrow">▹</span> {skill.name}
                  </motion.li>
                ))}
              </ul>
              <ul className="skills-list">
                {skills.slice(3).map((skill, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="skill-arrow">▹</span> {skill.name}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="about-image"
          >
            <div className="image-wrapper">
              <img src={profileImage} alt="Tesfalegn Petros" className="profile-img" />
              <div className="image-border"></div>
              <div className="image-overlay"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;