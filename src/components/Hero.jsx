import { useState } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
} from 'react-icons/fa';

const socialLinks = {
  github: 'https://github.com/hiteshzambre',
  linkedin: 'https://www.linkedin.com/in/hitesh-zambre-0749a9396?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  email: 'mailto:hiteshzambre9@gmail.com',
};

function Hero() {
  const [imgSrc, setImgSrc] = useState('/images/profile.jpeg');
  const [imgFailed, setImgFailed] = useState(false);

  const handleImageError = () => {
    if (imgSrc === '/images/profile.jpeg') {
      setImgSrc('/images/profile.jpg');
    } else if (imgSrc === '/images/profile.jpg') {
      setImgSrc('/images/profile.png');
    } else {
      setImgFailed(true);
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot"></span>
            <span>Available for Internships & Projects</span>
          </div>

          <p className="hero__greeting">Hello, I'm</p>
          <h1 className="hero__name">Hitesh Vijay Zambre</h1>

          <div className="hero__roles">
            <span className="hero__role-tag">React Developer</span>
            <span className="hero__role-tag">Python & Data Science</span>
            <span className="hero__role-tag">BCA (9.27 CGPA)</span>
          </div>

          <p className="hero__subtext">
            Motivated third-year BCA student at Modern College, Pune, passionate about
            crafting responsive, high-performance web applications and solving real-world
            problems with modern programming and data science tools.
          </p>

          <div className="hero__buttons">
            <a href="#projects" className="hero__btn hero__btn--primary">
              View My Projects <FaArrowRight className="hero__btn-icon" />
            </a>
            <a href="#contact" className="hero__btn hero__btn--secondary">
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              download
              className="hero__btn hero__btn--outline"
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
              title="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="LinkedIn"
              title="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a
              href={socialLinks.email}
              className="hero__social-link"
              aria-label="Email"
              title="Send an Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="hero__image-wrapper">
          {!imgFailed ? (
            <div className="hero__image-frame">
              <img
                src={imgSrc}
                alt="Hitesh Vijay Zambre"
                className="hero__image"
                onError={handleImageError}
              />
              <div className="hero__image-indicator" title="Actively Seeking Opportunities">
                <span className="hero__indicator-dot"></span>
                <span>Open to Work</span>
              </div>
            </div>
          ) : (
            <div className="hero__image-fallback">
              <span>HZ</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
