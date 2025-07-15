import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import '../assets/styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form Data:', formData);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Have a project in mind or want to connect? Feel free to reach out!</p>
          <div className="divider"></div>
        </div>

        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-textarea"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  <FaPaperPlane className="btn-icon" />
                  Send Message
                </>
              )}
            </button>
            {submitSuccess && (
              <div className="success-message">
                Thank you! Your message has been sent successfully.
              </div>
            )}
          </form>

          <div className="contact-info">
            <h3 className="info-title">Other Ways to Connect</h3>
            <p className="info-text">
              Prefer to connect through social media or email? Here's where you can find me:
            </p>
            
            <div className="social-links">
              <a 
                href="mailto:peterhope935@gmail.com" 
                className="social-link"
                aria-label="Email"
              >
                <FaEnvelope className="social-icon" />
                <span>Email</span>
              </a>
              <a 
                href="https://github.com/Tesfalegnp/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FaGithub className="social-icon" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/developertesfalegn/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="social-icon" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://x.com/TesfalegnP/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Twitter"
              >
                <FaTwitter className="social-icon" />
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;