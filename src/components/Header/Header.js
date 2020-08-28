import React from 'react';
import logo from '../../image/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="logo"/>
        </div> 
    );
};

export default Header;