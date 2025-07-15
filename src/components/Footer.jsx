import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import '../assets/styles/footer.css'; // We'll create this CSS file

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Tesfalegnp',
      icon: <FaGithub />,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/developertesfalegn',
      icon: <FaLinkedin />,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourhandle',
      icon: <FaTwitter />,
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/yourprofile',
      icon: <SiLeetcode />,
    },
    {
      name: 'Email',
      url: 'mailto:peterhope935@example.com',
      icon: <FaEnvelope />,
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo-section">
            <h3 className="footer-logo">Tesfalegn P.</h3>
            <p className="footer-tagline">
              Full Stack Developer | Problem Solver | Tech Enthusiast
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-social">
              <h4 className="footer-heading">Connect With Me</h4>
              <div className="social-icons">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="social-icon"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-contact">
              <h4 className="footer-heading">Get In Touch</h4>
              <a href="mailto:your.email@example.com" className="footer-email">
                your.email@example.com
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Tesfalegn Petros. All rights reserved.
          </p>
          <p className="footer-note">
            Built with React and ❤️ by yours truly
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;