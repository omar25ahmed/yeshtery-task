import './navbar.scss';
import React from 'react';
import hamurger from '../../public/images/hamburger.png';
import logo from '../../public/images/logo.png';

const navbar = () => (
  <nav>
    <div className="first-nav container">
      <div className="logo">
        <img src={hamurger} alt="hamburger" />
        <img src={logo} alt="logo" />
      </div>
    </div>
  </nav>
);
export default navbar;
