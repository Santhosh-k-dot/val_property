import React from 'react';
import '../styles/Navbar.css';
import logo from '../assets/reecologo.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top">
            <a className="navbar-brand" href="/"> {/* Set href to "/" to navigate to the home page */}
                <img src={logo} alt="Logo" />
            </a>
        </nav>
    );
};

export default Navbar;
