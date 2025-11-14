import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='nav-container'>
                <NavLink
                    to='/'
                    className='nav-logo'
                >
                    LOGO
                    {/*remeber to put the logo in the public folder, import it, and use <img src={logo} alt="logo" /> */}
                </NavLink>

                <ul className='nav-menu'>
                    <li className='nav-item'>
                        <NavLink
                            to='/'
                            end
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            Home
                        </NavLink>
                    </li>

                    <li className='nav-item'>
                        <NavLink
                            to='/blog'
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            Blog
                        </NavLink>
                    </li>

                    <li className='nav-item'>
                        <NavLink
                            to='/about'
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            Team
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
