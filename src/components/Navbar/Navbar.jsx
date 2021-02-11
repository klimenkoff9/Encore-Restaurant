import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';
import logo from '../../assets/logo.png';


const Navigation = () => {  

    return (
      <nav className="navbar-main">
        <div className="navbar-main-items">

        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
            {/* eslint-disable-next-line */}
            <p role="text">
              Encore Restaurant <br /> Bay Ridge
            </p>
          </Link>
        </div>

          {/* Desktop Navigation */}
          <nav className="NavbarMainLinks">
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contacts">Book A Table</Link>
              </li>
              <li>
                <Link to="/menus">Menus</Link>
              </li>
              <li>
                <Link to="/contribute">Contact</Link>
              </li>
              <li>
                <Link to="/contact">Private Hire</Link>
              </li>
            </ul>
          </nav>
        </div>
       </nav>
    );
};

export default Navigation;