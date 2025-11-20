import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import TandemLogo from "/Tandem.png";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar${isScrolled ? " scrolled" : ""}`}>
            <div className='nav-container'>
                <NavLink
                    to='/'
                    className='nav-logo'
                >
                    <img src={TandemLogo} alt="logo" /> 
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
