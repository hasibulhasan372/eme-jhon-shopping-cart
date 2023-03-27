import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className='header'>
           <nav className="nav-bar">
           <img src={logo} alt="" />
           <div className='list-items'>
            <a href="/shop">Shop</a>
            <a href="/order">Order Review</a>
            <a href="/inventory">Manage Inventory</a>
            <a href="/login">Login</a>
           </div>
           </nav>
        </div>
    );
};

export default Header;