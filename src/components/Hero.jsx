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
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section id="home" className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <p className="hero__greeting">Hello, I'm</p>
          <h1 className="hero__name">Hitesh Vijay Zambre</h1>

          <div className="hero__roles">
            <span className="hero__role-tag">React Developer</span>
            <span className="hero__role-tag">Python & Data Science</span>
            <span className="hero__role-tag">BCA (9.27 CGPA)</span>
          </div>

          <p className="hero__subtext">
            Motivated third-year BCA student at Modern College, Pune, passionate about
            crafting responsive, user-friendly web applications and solving problems with
            modern programming and data science tools.
          </p>

          <div className="hero__buttons">
            <a href="#projects" className="hero__btn hero__btn--primary">
              View My Projects <FaArrowRight />
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
          {!imgFailed ? (
            <img
              src="/images/profile.jpeg"
              alt="Hitesh Vijay Zambre"
              className="hero__image"
              onError={() => setImgFailed(true)}
            />
          ) : (
            <div className="hero__image-fallback">HZ</div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
