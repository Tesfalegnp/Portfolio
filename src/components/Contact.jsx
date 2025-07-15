import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just alert the message
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    console.log('Form Data:', formData);
    // In the future, we'll send this to backend
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="social-links">
        <a href="mailto:peterhope935@gmail.com">Email</a> |
        <a href="https://github.com/Tesfalegnp/ " target="_blank" rel="noopener noreferrer">GitHub</a> |
        <a href="https://linkedin.com/in/developertesfalegn/ " target="_blank" rel="noopener noreferrer">LinkedIn</a> |
        <a href="https://x.com/TesfalegnP " target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </section>
  );
};

export default Contact;