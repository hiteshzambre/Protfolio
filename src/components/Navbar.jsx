import { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

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
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar__container">
        <a href="#home" className="navbar__logo">
          Hitesh
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
        </ul>

        <div className="navbar__actions">
          <a
            href="/resume.pdf"
            download
            className="navbar__resume-btn"
          >
            Resume
          </a>
          <button
            className="navbar__theme-btn"
            onClick={toggleDarkMode}
            aria-label="Toggle theme"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
