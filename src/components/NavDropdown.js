import React from "react";
import "./NavDropdown.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const NavDropdown = props => {
    return (
        <div className="navdropdown">
            <p className="titlemessage">{ props.titlemessage }</p>
            <KeyboardArrowDownIcon className="dropdown-icon" />
        </div>
    );
};

export default NavDropdown;