import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero-content"
      >
        <h1>Hello, I'm <span className="highlight">Tesfalegn Petros</span></h1>
        <p className="subtitle">AI Engineer | Full Stack Web Developer</p>
        <p>Mizan Tepi University | Intern at iCog Labs</p>
        <a href="#contact" className="btn">Get in Touch</a>
      </motion.div>
    </section>
  );
};

export default Hero;