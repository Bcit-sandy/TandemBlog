import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Here is where the logo goes when we have one :)
        </Link>
        
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/about" className="nav-link">
              Team
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

