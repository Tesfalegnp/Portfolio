import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import scrollToSection from '../utils/scrollToSection';
import logoImage from '../assets/images/logo1.jpeg'; // Update with your actual logo path
import '../assets/styles/header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollClick = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);
    scrollToSection(id);
    setActiveSection(id);
  };

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="header-container">
        <Link 
          to="/" 
          className="logo-container"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
            setActiveSection('hero');
          }}
        >
          <img src={logoImage} alt="Tesfalegn. Logo" className="logo-image" />
          <span className="logo-text">Tesfalegn P.</span>
        </Link>

        <button 
          className={`hamburger ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={activeSection === link.id ? 'active' : ''}
              onClick={(e) => handleScrollClick(e, link.id)}
            >
              {link.label}
              <span className="nav-link-underline"></span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;