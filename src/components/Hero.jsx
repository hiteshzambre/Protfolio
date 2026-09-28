import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';

// ============================================
// SOCIAL LINKS - Edit these with your actual URLs
// ============================================
const socialLinks = {
  github: '#', // TODO: Add your GitHub profile URL
  linkedin: '#', // TODO: Add your LinkedIn profile URL
  email: 'mailto:hiteshzambre9@gmail.com',
};

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <p className="hero__greeting">Hi, I'm</p>
          <h1 className="hero__name">Hitesh Vijay Zambre</h1>
          <h2 className="hero__headline">
            Building Modern Digital Experiences with Code
          </h2>
          <p className="hero__subtext">
            Third-year BCA student passionate about software development,
            React, Python, and data science.
          </p>

          <div className="hero__buttons">
            <a href="#projects" className="hero__btn hero__btn--primary">
              View My Projects
            </a>
            <a href="#contact" className="hero__btn hero__btn--secondary">
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              download
              className="hero__btn hero__btn--secondary"
            >
              <FaDownload /> Resume
            </a>
          </div>

          <div className="hero__socials">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href={socialLinks.email}
              className="hero__social-link"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="hero__image-wrapper">
          {/* TODO: Replace with your actual photo */}
          {/* <img src="/images/profile.jpg" alt="Hitesh Zambre" className="hero__image" /> */}
          <div className="hero__image-fallback">HZ</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
