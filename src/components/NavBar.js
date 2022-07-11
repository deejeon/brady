import React from 'react';
import "./NavBar.css";
import NavDropdown from './NavDropdown';

function NavBar() {
    return (
        <div className="navbar">
            <NavDropdown />
            <NavDropdown />
            <NavDropdown />
            <NavDropdown />
        </div>
    );
};

export default NavBar;