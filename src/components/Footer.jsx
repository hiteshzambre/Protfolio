import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

// Uses same placeholder links — edit in one place
const footerLinks = {
  github: '#', // TODO: Add your GitHub URL
  linkedin: '#', // TODO: Add your LinkedIn URL
  email: 'mailto:hiteshzambre9@gmail.com',
};

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__name">Hitesh Vijay Zambre</p>
        <p className="footer__tagline">
          Designed & built with <FaHeart className="footer__heart" /> using
          React.
        </p>
        <div className="footer__socials">
          <a
            href={footerLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={footerLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a href={footerLinks.email} aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
        <p className="footer__copy">
          &copy; {year} Hitesh Zambre. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
