import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const footerLinks = {
  github: 'https://github.com/hiteshzambre',
  linkedin: 'https://www.linkedin.com/in/hitesh-zambre-0749a9396?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  email: 'mailto:hiteshzambre9@gmail.com',
};

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__name">Hitesh Vijay Zambre</p>
        
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
      </div>
    </footer>
  );
}

export default Footer;
