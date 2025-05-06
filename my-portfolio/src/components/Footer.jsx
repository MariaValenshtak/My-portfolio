import './Footer.css';
import { FaGithub, FaTelegramPlane } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer">
    <p>Мої соцмережі:</p>
    <div className="social-icons">
      <a href="https://github.com/MariaValenshtak" target="_blank" rel="noopener noreferrer">
        <FaGithub size={28} />
      </a>
      <a href="https://t.me/valenshtakova" target="_blank" rel="noopener noreferrer">
        <FaTelegramPlane size={28} />
      </a>
    </div>
  </footer>
);

export default Footer;
