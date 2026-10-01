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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <a href="#home" className="navbar__logo">
          <span className="navbar__logo-symbol">&lt;</span>
          Hitesh
          <span className="navbar__logo-symbol">/&gt;</span>
        </a>

        <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}>
          <ul className="navbar__menu">
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

          <div className="navbar__mobile-actions">
            <a
              href="/resume.pdf"
              download
              className="btn btn--primary btn--sm"
              onClick={handleLinkClick}
            >
              <FaDownload /> Resume
            </a>
          </div>
        </nav>

        <div className="navbar__actions">
          <a
            href="/resume.pdf"
            download
            className="btn btn--outline btn--sm navbar__resume-desktop"
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
    </header>
  );
}

export default Navbar;
