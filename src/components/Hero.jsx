import { useState } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
  FaMapMarkerAlt,
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
          <div className="hero__status">
            <span className="hero__status-dot"></span>
            Available for Internships & Immediate Hire
          </div>

          <h1 className="hero__name">Hitesh Vijay Zambre</h1>
          <h2 className="hero__title">Frontend Developer & Python Enthusiast</h2>

          <p className="hero__bio">
            Third-year BCA student at Modern College, Pune with a 9.27 CGPA.
            Focused on building clean, high-performance web applications and solving real-world challenges through code.
          </p>

          <div className="hero__buttons">
            <a href="#projects" className="btn btn--primary">
              View My Work <FaArrowRight />
            </a>
            <a href="#contact" className="btn btn--secondary">
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              download
              className="btn btn--outline"
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

        <div className="hero__media">
          <div className="hero__photo-card">
            {!imgFailed ? (
              <img
                src="/images/profile.jpeg"
                alt="Hitesh Vijay Zambre"
                className="hero__photo"
                onError={() => setImgFailed(true)}
              />
            ) : (
              <div className="hero__fallback">HZ</div>
            )}
            <div className="hero__photo-badge">
              <FaMapMarkerAlt />
              <span>Pune, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
