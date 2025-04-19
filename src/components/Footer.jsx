import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Challa Saketh</h3>
            <p>Aspiring business professional with a passion for entrepreneurship and digital marketing.</p>
          </div>
          
          <div className="footer-section">
            <h3>Contact</h3>
            <div className="contact-info">
              <p><FaEnvelope /> challasaketh123@gmail.com</p>
              <p><FaPhone /> 8247738585</p>
            </div>
          </div>
          
          {/* <div className="footer-section">
            <h3>Connect</h3>
            <div className="social-icons">
              <a href="#" aria-label="GitHub profile">
                <FaGithub size={24} />
              </a>
              <a href="mailto:challasaketh123@gmail.com" aria-label="Email">
                <FaEnvelope size={24} />
              </a>
            </div>
          </div> */}
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Challa Saketh. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
