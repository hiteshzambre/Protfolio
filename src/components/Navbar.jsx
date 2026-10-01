import { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes, FaDownload } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

function Navbar({ darkMode, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar__container">
        <a href="#home" className="navbar__logo">
          Hitesh<span className="navbar__logo-dot">.</span>
        </a>

        <ul className={`navbar__menu ${menuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.name} className="navbar__item">
              <a
                href={link.href}
                className="navbar__link"
                onClick={handleLinkClick}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="navbar__item navbar__item--mobile">
            <a
              href="/resume.pdf"
              download
              className="navbar__resume-btn"
              onClick={handleLinkClick}
            >
              <FaDownload /> Resume
            </a>
          </li>
        </ul>

        <div className="navbar__actions">
          <a
            href="/resume.pdf"
            download
            className="navbar__resume-btn navbar__resume-btn--desktop"
          >
            <FaDownload /> Resume
          </a>

          <button
            className="navbar__theme-btn"
            onClick={toggleDarkMode}
            aria-label="Toggle Theme"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
