import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Place logo here when ready 
          {/*remeber to put the logo in the public folder, import it, and use <img src={logo} alt="logo" /> */}
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

