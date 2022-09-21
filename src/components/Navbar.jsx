import './navbar.scss';
import React from 'react';
// import hamurger from '../../public/images/hamburger.png';
// import logo from '../../public/images/logo.png';

const navbar = () => (
  <nav>
    <div className="first-nav">
      <div className="container d-flex justify-content-around w-75 pt-2 align-items-center">
        <div className="logo">
          <img src="images/hamburger.png" alt="hamburger" className="nav-img" />
          <img src="/images/yeshtery-logo.png" alt="logo" className="nav-img" />
        </div>
        <div>
          <p className="m-0">
            <span className="symbol">&lt;</span>
            {' '}
            Valentine&apos;s Day Offers! Buy Two Get One Free
            {' '}
            <span className="fw-bold text-decoration-underline" role="button">Shop Now</span>
            {' '}
            <span className="symbol">&gt;</span>
          </p>
        </div>
        <div className="d-flex gap-4">
          <div>
            <img src="/images/contact.png" alt="phone" className="nav-img" />
            <span className="fw-bold" role="button">Contact Us</span>
          </div>
          <div>
            <img src="/images/track.png" alt="phone" className="nav-img" />
            <span className="fw-bold" role="button">Track Order</span>
          </div>
          <div>
            <img src="/images/find.png" alt="phone" className="nav-img" />
            <span className="fw-bold" role="button">Find A Store</span>
          </div>
        </div>
      </div>
    </div>
  </nav>
);
export default navbar;
