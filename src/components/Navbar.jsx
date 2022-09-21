import './navbar.scss';
import React from 'react';
// import hamurger from '../../public/images/hamburger.png';
// import logo from '../../public/images/logo.png';

const navbar = () => (
  <nav>
    <div className="first-nav container d-flex">
      <div className="logo">
        <img src="images/hamburger.png" alt="hamburger" />
        <img src="/images/yeshtery-logo.png" alt="logo" />
      </div>
      <div>
        <p>
          &lt; Valentine&nps;s Day Offers! Buy Two Get One Free
          {' '}
          <span className="font-weight-bold text-decoration-underline">Shop Now</span>
          {' '}
          &gt;
        </p>
      </div>
      <div className="d-flex">
        <div>
          <img src="/images/contact.png" alt="phone" />
          <span>Contact Us</span>
        </div>
        <div>
          <img src="/images/track.png" alt="phone" />
          <span>Track Order</span>
        </div>
        <div>
          <img src="/images/find.png" alt="phone" />
          <span>Find A Store</span>
        </div>
      </div>
    </div>
  </nav>
);
export default navbar;
