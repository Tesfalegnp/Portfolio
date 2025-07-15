import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaFileDownload } from 'react-icons/fa';
import developerImage from '../assets/images/developer.jpeg'; // Add your image
import '../assets/styles/hero.css';

const Hero = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/tesflegnp' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/developertesfalegn' },
    { icon: <FaTwitter />, url: 'https://x.com/tesfalgnp' }
  ];

  return (
    <section id="hero" className="hero">
      {/* Animated background elements */}
      <div className="hero-background">
        <div className="code-bg"></div>
        <div className="gradient-overlay"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-text"
          >
            <h6 className="greeting">Hi, my name is</h6>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Tesfalegn Petros<span className="highlight">.</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I build <span className="highlight">AI solutions</span> and <span className="highlight">web experiences</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="hero-description"
            >
              I'm an AI Engineer and Full Stack Developer currently working at iCog Labs, 
              passionate about creating intelligent systems and beautiful interfaces.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="hero-cta"
            >
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
              <a href="/resume.pdf" download className="btn btn-secondary">
                <FaFileDownload /> Download CV
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hero-image"
          >
            <img src={developerImage} alt="Developer illustration" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="hero-social"
        >
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Social link ${index}`}
            >
              {link.icon}
            </a>
          ))}
          <div className="social-line"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
