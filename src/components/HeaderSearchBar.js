import React from "react";
import "./HeaderSearchBar.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const HeaderSearchBar = () => {
    return (
        <div className="section-background">
            <form action="get" className="search-form">
                <input type="search" className="searchbar" placeholder="Enter keyword or item number" />
                <button type="submit"><SearchOutlinedIcon className="searchicon" sx={{ fontSize: 30 }}/></button>
            </form>
        </div>
    );
};

export default HeaderSearchBar;