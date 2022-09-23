import './navbar.scss';
import React, { Component } from 'react';
import Cart from './Cart';
import CartProductsContext from '../services/context';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    const { show } = this.state;
    const { products } = this.context;
    return (
      <nav>
        <div className="first-nav">
          <div className="container d-flex justify-content-between w-75 pt-2 align-items-center">
            <div className="logo">
              <img src="/images/hamburger.png" alt="hamburger" className="nav-img" />
              <img src="/images/yeshtery-logo.png" alt="logo" className="nav-img" />
            </div>
            <div>
              <p className="m-0">
                <span className="symbol">&lt;</span>
                {' '}
                Valentine&apos;s Day Offers! Buy Two Get One Free
                {' '}
                <span className="fw-bold text-decoration-underline" role="button">
                  Shop Now
                </span>
                {' '}
                <span className="symbol">&gt;</span>
              </p>
            </div>
            <div className="d-flex gap-4">
              <div>
                <img src="/images/contact.png" alt="phone" className="nav-img" />
                <span className="fw-bold" role="button">
                  Contact Us
                </span>
              </div>
              <div>
                <img src="/images/track.png" alt="phone" className="nav-img" />
                <span className="fw-bold" role="button">
                  Track Order
                </span>
              </div>
              <div>
                <img src="/images/find.png" alt="phone" className="nav-img" />
                <span className="fw-bold" role="button">
                  Find A Store
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="second-nav container d-flex justify-content-between align-items-center">
          <div>
            <input type="text" placeholder="Search" className="search" />
          </div>
          <div>
            <img src="/images/Group 745.svg" alt="cart" className="brand-img" />
          </div>
          <div className="d-flex gap-4 align-items-center">
            <div className="d-flex gap-2">
              <p className="cart">{products.length}</p>
              <img src="/images/Path 772.svg" alt="user" className="nav-img" />
              <button type="button" className="bg-transparent border-0" onClick={this.showModal}>
                Cart
              </button>
            </div>
            <div className="d-flex gap-2">
              <img src="/images/Path 771.svg" alt="user" className="nav-img" />
              <span className="fw-bold" role="button">
                Wishlist
              </span>
            </div>
            <div className="d-flex gap-2">
              <img src="/images/Path 773.svg" alt="user" className="nav-img" />
              <span className="fw-bold" role="button">
                Login
              </span>
            </div>
          </div>
        </div>
        <div className="third-nav bg-dark">
          <div className="container d-flex justify-content-between align-items-center">
            <button type="button" className="text-light border-0 bg-transparent fw-bold">
              Men
            </button>
            <button type="button" className="text-light border-0 bg-transparent fw-bold">
              Women
            </button>
            <button type="button" className="text-light border-0 bg-transparent fw-bold">
              Unisex
            </button>
            <button type="button" className="text-light border-0 bg-transparent fw-bold">
              Kids
            </button>
            <button type="button" className="text-light border-0 bg-transparent fw-bold">
              Best Sellers
            </button>
            <button type="button" className="text-light border-0 bg-transparent fw-bold">
              New Arrivals
            </button>
            <button type="button" className="text-danger border-0 bg-transparent fw-bold">
              Offers
            </button>
          </div>
        </div>
        <div className="fourth-nav">
          <div className="container d-flex justify-content-start align-items-center">
            <span className="text-decoration-underline me-2" role="button">
              Men
            </span>
            /
            <span className="text-decoration-underline mx-2" role="button">
              Clothing
            </span>
            /
            <span className="text-decoration-underline mx-2" role="button">
              Tops
            </span>
            /
            <span className="text-decoration-underline mx-2" role="button">
              Adidas
            </span>
            / Adidas Black T-Shirt
          </div>
        </div>
        <Cart show={show} handleClose={this.hideModal} />
      </nav>
    );
  }
}

Navbar.contextType = CartProductsContext;
