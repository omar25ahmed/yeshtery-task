import React, { Component } from 'react';
import './Footer.scss';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer className="pb-3">
        <div className="container flex-column flex-lg-row d-flex w-100 footer gap-5 gap-md-0">
          <div className="footer-left">
            <img src="./images/footer-logo.svg" alt="footer-logo" className="mb-4" />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
              diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>
            <br />
            <p>
              Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
              suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem
              vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
              vel illum dolore eu feugiat nulla. Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit, sed
            </p>
            <br />
            <p>
              m nonummy nibh euismod tincidunt ut laoreet
              dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
              quis
            </p>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center align-items-lg-stretch footer-right">
            <p className="mb-2 subscribe">Subscribe to our newsletter</p>
            <div className="d-flex flex-column">
              <input type="text" placeholder="Enter Your Mail" className="search" />
              <input type="button" className="button d-none d-lg-block" value="Subscribe" />
            </div>
            <div className="d-flex w-100 flex-column flex-lg-row">
              <div className="w-50 d-flex flex-column align-items-center align-items-lg-start company-info">
                <button type="button" className="bg-transparent border-0 text-light fw-bold mb-3 mt-4">About Us</button>
                <button type="button" className="bg-transparent border-0 text-light fw-bold mb-3">Contact Us</button>
                <button type="button" className="bg-transparent border-0 text-light fw-bold mb-3">Track Order</button>
                <button type="button" className="bg-transparent border-0 text-light fw-bold mb-3">Terms & Conditions</button>
                <button type="button" className="bg-transparent border-0 text-light fw-bold mb-3">Privacy Policy</button>
                <button type="button" className="bg-transparent border-0 text-light fw-bold mb-3">Sell With Us</button>
                <button type="button" className="bg-transparent border-0 text-light fw-bold">Shipping And Returns</button>
              </div>
              <div className="social">
                <div className="d-flex gap-2 mb-3 align-items-center">
                  <img src="./images/facebook.svg" alt="facebook" className="social-img" />
                  <p>/YESHTERY</p>
                </div>
                <div className="d-flex gap-2 mb-3 align-items-center">
                  <img src="./images/linkedin.svg" alt="linkedin" className="social-img" />
                  <p>/YESHTERY</p>
                </div>
                <div className="d-flex gap-2 mb-3 align-items-center">
                  <img src="./images/instagram.svg" alt="instagram" className="social-img" />
                  <p>/YESHTERY</p>
                </div>
                <div className="d-flex gap-2 align-items-center">
                  <img src="./images/twitter.svg" alt="twitter" className="social-img" />
                  <p>/YESHTERY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-lg-row justify-content-between container align-items-center">
          <p className="my-1">© 2021 Yeshtery. All Rights Reserved</p>
          <div className="d-flex my-1 gap-3">
            <img src="./images/cash.png" alt="Cash" className="card" />
            <img src="./images/visa.png" alt="Visa" className="card" />
            <img src="./images/mastercard.png" alt="Mastercard" className="card" />
          </div>
          <div className="d-flex my-1 gap-2 align-items-center">
            <p>Powered by</p>
            <img src="./images/nasnav.svg" alt="nasnav" className="nasnav" />
          </div>
        </div>
      </footer>
    );
  }
}
