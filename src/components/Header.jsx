import React from 'react';
import { Link } from 'react-router-dom';
import scrollToSection from '../utils/scrollToSection';

const Header = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <header className="header">
      <div className="logo">Tesfalegn P.</div>
      <button className="hamburger" onClick={() => document.querySelector('.nav-links').classList.toggle('active')}>
        ☰
      </button>
      <nav className="nav-links">
        <a href="#about" onClick={(e) => handleScroll(e, 'about')}>About</a>
        <a href="#skills" onClick={(e) => handleScroll(e, 'skills')}>Skills</a>
        <a href="#projects" onClick={(e) => handleScroll(e, 'projects')}>Projects</a>
        <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;