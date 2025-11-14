import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2 className="footer-brand">Tandem</h2>
          <p className="copyright">
            © {currentYear} Tandem Blog. All rights reserved.
          </p>
        </div>
        <nav className="footer-nav">
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/blog" className="footer-link">Blog</Link>
          <Link to="/about" className="footer-link">Team</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
