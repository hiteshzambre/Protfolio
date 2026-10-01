import { useState } from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from 'react-icons/fa';

const contactInfo = {
  email: 'hiteshzambre9@gmail.com',
  phone: '9356876422',
  location: 'Pune, Maharashtra, India',
  github: 'https://github.com/hiteshzambre',
  linkedin: 'https://www.linkedin.com/in/hitesh-zambre-0749a9396?utm_source=share_via&utm_content=profile&utm_medium=member_android',
};

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) newErrors.message = 'Please enter your message.';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section">
      <div className="section__header">
        <span className="section__eyebrow">Contact</span>
        <h2 className="section__title">Get In Touch</h2>
      </div>

      <div className="contact__layout">
        <div className="contact__info">
          <p className="contact__lead">
            I am available for internships, junior developer roles, and project collaborations.
            Feel free to contact me via email or phone.
          </p>

          <div className="contact__cards">
            <a href={`mailto:${contactInfo.email}`} className="contact__item">
              <span className="contact__item-icon">
                <FaEnvelope />
              </span>
              <div>
                <span className="contact__item-label">Email</span>
                <span className="contact__item-value">{contactInfo.email}</span>
              </div>
            </a>

            <a href={`tel:${contactInfo.phone}`} className="contact__item">
              <span className="contact__item-icon">
                <FaPhone />
              </span>
              <div>
                <span className="contact__item-label">Phone</span>
                <span className="contact__item-value">+91 {contactInfo.phone}</span>
              </div>
            </a>

            <div className="contact__item">
              <span className="contact__item-icon">
                <FaMapMarkerAlt />
              </span>
              <div>
                <span className="contact__item-label">Location</span>
                <span className="contact__item-value">{contactInfo.location}</span>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="contact__social-link"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`form-input ${errors.name ? 'form-input--error' : ''}`}
              placeholder="e.g. John Doe"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="form-error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`form-input ${errors.email ? 'form-input--error' : ''}`}
              placeholder="e.g. john@example.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className={`form-input form-textarea ${errors.message ? 'form-input--error' : ''}`}
              placeholder="Your message..."
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <span className="form-error">{errors.message}</span>
            )}
          </div>

          <button type="submit" className="btn btn--primary btn--full">
            <FaPaperPlane /> Send Message
          </button>

          {submitted && (
            <div className="form-success">
              Thank you! Your message has been sent successfully.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
