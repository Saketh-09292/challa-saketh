import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/resume', label: 'Resume' },
    { path: '/projects', label: 'Projects' },
    { path: '/certifications', label: 'Certifications' },
    { path: '/extracurriculars', label: 'Extra Curriculars' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isVisible ? 'navbar-visible' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className={isVisible ? 'logo-visible' : ''}>
            Challa Saketh
          </span>
        </Link>
        
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          {navItems.map((item, index) => (
            <li 
              key={index}
              className={`nav-item nav-item-${index} ${isVisible ? 'nav-item-visible' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Link 
                to={item.path} 
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
