import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

// Uses same placeholder links — edit in one place
const footerLinks = {
  github: 'https://github.com/hiteshzambre', // TODO: Add your GitHub URL
  linkedin: 'https://www.linkedin.com/in/hitesh-zambre-0749a9396?utm_source=share_via&utm_content=profile&utm_medium=member_android', // TODO: Add your LinkedIn URL
  email: 'mailto:hiteshzambre9@gmail.com',
};

function Footer() {
  const year = new Date().getFullYear();

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
