import React from 'react';
import "./NavBar.css";
import NavDropdown from './NavDropdown';

function NavBar() {
    return (
        <div className="navbar">
            <NavDropdown titlemessage="Shop By Product" />
            <NavDropdown titlemessage="About Us" />
            <NavDropdown titlemessage="Services" />
            <NavDropdown titlemessage="Locations" />
        </div>
    );
};

export default NavBar;