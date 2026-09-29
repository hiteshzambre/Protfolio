import { useState, useEffect } from 'react';
import {
  FaSun,
  FaMoon,
  FaBars,
  FaTimes,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa';

const navLinks = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Education', href: '#education', id: 'education' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

function Navbar({ darkMode, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar__container">
          <a href="#home" className="navbar__logo" onClick={handleLinkClick}>
            <span className="navbar__logo-badge">H</span>
            <span className="navbar__logo-text">
              Hitesh<span className="navbar__logo-dot">.</span>
            </span>
          </a>

          <ul className="navbar__menu-desktop">
            {navLinks.map((link) => (
              <li key={link.name} className="navbar__item">
                <a
                  href={link.href}
                  className={`navbar__link ${activeSection === link.id ? 'active' : ''}`}
                >
                  {link.name}
                  {activeSection === link.id && <span className="navbar__link-dot" />}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar__actions">
            <a
              href="/resume.pdf"
              download
              className="navbar__resume-btn"
              title="Download Resume PDF"
            >
              <FaDownload className="navbar__resume-icon" /> Resume
            </a>

            <button
              className="navbar__theme-btn"
              onClick={toggleDarkMode}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <FaSun className="theme-icon-sun" /> : <FaMoon className="theme-icon-moon" />}
            </button>

            <button
              className="navbar__hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`navbar__backdrop ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <div className={`navbar__drawer ${menuOpen ? 'active' : ''}`}>
        <div className="navbar__drawer-header">
          <a href="#home" className="navbar__logo" onClick={handleLinkClick}>
            <span className="navbar__logo-badge">H</span>
            <span className="navbar__logo-text">
              Hitesh<span className="navbar__logo-dot">.</span>
            </span>
          </a>
          <button
            className="navbar__drawer-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        <ul className="navbar__drawer-links">
          {navLinks.map((link, idx) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`navbar__drawer-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={handleLinkClick}
              >
                <span className="navbar__drawer-num">0{idx + 1}</span>
                <span className="navbar__drawer-name">{link.name}</span>
                {activeSection === link.id && <span className="navbar__drawer-indicator">Active</span>}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__drawer-footer">
          <a
            href="/resume.pdf"
            download
            className="navbar__drawer-resume"
            onClick={handleLinkClick}
          >
            <FaDownload /> Download Resume
          </a>

          <div className="navbar__drawer-socials">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:hiteshzambre9@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
