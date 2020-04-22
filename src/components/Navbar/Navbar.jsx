import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav className="shop">
        <NavLink exact to="/" activeClassName="nav-active" className="nav-item">
          SHOP
        </NavLink>
        <NavLink to="wine-club" activeClassName="nav-active" className="nav-item">
          WINE CLUB
        </NavLink>
        <NavLink to="about" activeClassName="nav-active" className="nav-item">
          ABOUT
        </NavLink>
        <NavLink
          to="stockists" activeClassName="nav-active" className="nav-item">
          STOCKISTS
        </NavLink>
        <NavLink to="rtds" activeClassName="nav-active" className="nav-item">
          RTDS
        </NavLink>
        <NavLink to="account" activeClassName="nav-active" className="nav-item">
          ACCOUNT
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
