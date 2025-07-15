import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart, FaCode } from 'react-icons/fa';
import { SiLeetcode, SiReact, SiTailwindcss } from 'react-icons/si';
import { motion } from 'framer-motion';
import logo from '../assets/images/logo1.jpeg'; // Add your logo in assets/images
import '../assets/styles/footer.css';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Tesfalegnp',
      icon: <FaGithub />,
      color: '#333',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/developertesfalegn',
      icon: <FaLinkedin />,
      color: '#0077b5',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/TesfalegnP',
      icon: <FaTwitter />,
      color: '#1DA1F2',
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/yourprofile',
      icon: <SiLeetcode />,
      color: '#FFA116',
    },
    {
      name: 'Email',
      url: 'mailto:peterhope935@gmail.com',
      icon: <FaEnvelope />,
      color: '#D44638',
    },
  ];

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#4e54c8"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#4e54c8"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#4e54c8"></path>
        </svg>
      </div>
      
      <motion.div 
        className="footer-container"
        initial="hidden"
        whileInView="visible"
        variants={footerVariants}
        viewport={{ once: true }}
      >
        <div className="footer-content">
          <motion.div className="footer-brand" variants={itemVariants}>
            <div className="logo-container">
              <img src={logo} alt="Tesfalegn P. Logo" className="footer-logo-img" />
              <span className="footer-logo-text">Tesfalegn P.</span>
            </div>
            <p className="footer-tagline">
              Transforming ideas into digital reality through code and creativity
            </p>
            <div className="tech-stack">
              <span>Tech Stack:</span>
              <div className="tech-icons">
                <SiReact title="React" />
                <SiTailwindcss title="Tailwind CSS" />
                <FaCode title="JavaScript" />
              </div>
            </div>
          </motion.div>

          <div className="footer-links">
            <motion.div className="footer-nav" variants={itemVariants}>
              <h4 className="footer-heading">Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </motion.div>

            <motion.div className="footer-social" variants={itemVariants}>
              <h4 className="footer-heading">Connect With Me</h4>
              <div className="social-icons">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="social-icon"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ color: link.color }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div className="footer-contact" variants={itemVariants}>
              <h4 className="footer-heading">Get In Touch</h4>
              <a href="mailto:peterhope935@gmail.com" className="footer-email">
                peterhope935@gmail.com
              </a>
              <p className="footer-location">
                <span role="img" aria-label="location">📍</span> Addis Ababa, Ethiopia
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div className="footer-bottom" variants={itemVariants}>
          <p className="copyright">
            &copy; {new Date().getFullYear()} Tesfalegn Petros. All rights reserved.
          </p>
          <p className="footer-note">
            Built with <FaHeart className="heart-icon" /> and <SiReact className="react-icon" /> by Tesfalegn
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;