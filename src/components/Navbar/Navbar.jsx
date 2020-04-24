import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">MASTERS</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            SHOP
        </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">ALL WINE</a>
            <a class="dropdown-item" href="#">ROSE</a>
            <a class="dropdown-item" href="#">RED WINE</a>
            <a class="dropdown-item" href="#">SPARKLING WINE</a>
            <a class="dropdown-item" href="#">RTD'S</a>
            <a class="dropdown-item" href="#">GIFT VOUCHERS</a>
          </div>

        </li>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            {/* <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a> */}
            <NavLink exact to="/" activeClassName="" className="nav-link">
              WINE CLUB
            </NavLink>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="/about">About</a> */}
            <NavLink exact to="/about" activeClassName="" className="nav-link">
              ABOUT
            </NavLink>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="/about">About</a> */}
            <NavLink exact to="/about" activeClassName="" className="nav-link">
              STOCKISTS
            </NavLink>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="/about">About</a> */}
            <NavLink exact to="/about" activeClassName="" className="nav-link">
              ACCOUNT
            </NavLink>

          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
