import { useState } from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from 'react-icons/fa';

// ============================================
// CONTACT INFO - Edit these with your details
// ============================================
const contactInfo = {
  email: 'hiteshzambre9@gmail.com',
  phone: '9356876422',
  github: 'https://github.com/hiteshzambre', // TODO: Add your GitHub profile URL
  linkedin: 'https://www.linkedin.com/in/hitesh-zambre-0749a9396?utm_source=share_via&utm_content=profile&utm_medium=member_android', // TODO: Add your LinkedIn profile URL
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
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email.';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
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
    // ============================================
    // TODO: Integrate with email service
    // Options: EmailJS, Formspree, Netlify Forms
    // Example with Formspree:
    //   fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData),
    //   });
    // ============================================
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="contact">
      <h2 className="section__title">Contact Me</h2>
      <div className="contact__container">
        <div className="contact__info">
          <h3 className="contact__info-title">Get in Touch</h3>
          <p className="contact__info-text">
            Feel free to reach out for collaborations, opportunities, or
            just to say hello!
          </p>
          <div className="contact__details">
            <a
              href={`mailto:${contactInfo.email}`}
              className="contact__detail"
            >
              <FaEnvelope className="contact__detail-icon" />
              <span>{contactInfo.email}</span>
            </a>
            <a
              href={`tel:${contactInfo.phone}`}
              className="contact__detail"
            >
              <FaPhone className="contact__detail-icon" />
              <span>+91 {contactInfo.phone}</span>
            </a>
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
          <div className="contact__field">
            <label htmlFor="name" className="contact__label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`contact__input ${errors.name ? 'contact__input--error' : ''}`}
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <span className="contact__error">{errors.name}</span>
            )}
          </div>
          <div className="contact__field">
            <label htmlFor="email" className="contact__label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`contact__input ${errors.email ? 'contact__input--error' : ''}`}
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className="contact__error">{errors.email}</span>
            )}
          </div>
          <div className="contact__field">
            <label htmlFor="message" className="contact__label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className={`contact__input contact__textarea ${errors.message ? 'contact__input--error' : ''}`}
              placeholder="Your message..."
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <span className="contact__error">{errors.message}</span>
            )}
          </div>
          <button type="submit" className="contact__submit">
            <FaPaperPlane /> Send Message
          </button>
          {submitted && (
            <p className="contact__success">
              Thank you! Your message has been sent.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
