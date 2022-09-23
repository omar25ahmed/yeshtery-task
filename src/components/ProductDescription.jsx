import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartProductsContext from '../services/context';
import './ProductDescription.scss';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { addProduct } = this.context;
    const { data } = this.props;
    const product = data[0];
    if (!product) {
      return <div>Please wait...</div>;
    }
    return (
      <div className="description">
        <div className="mb-3">
          <img src="/images/Group 745.svg" alt="product" />
        </div>
        <div className="info">
          <h1 className="fw-bold">{product.title}</h1>
          <p className="text-secondary text-capitalize mb-1">{product.category}</p>
          <div className="rating d-flex align-items-center mb-3">
            <img src={`/images/rating/${Math.floor(product.rating)}-stars.png`} alt="rating" />
            <span className="fw-bold mx-4">
              {product.rating}
              {' '}
              of 5
            </span>
            <span className="fw-bold mx-4 text-secondary">22 ratings</span>
          </div>
          <div className="cost d-flex justify-content-between align-items-center mb-2">
            <div className="pricing fw-bold ">
              {product.price}
              {' '}
              <span className="currency">LE</span>
            </div>
            <span className="fw-bold text-secondary text-decoration-line-through ">
              {Math.floor((product.price * 100) / (100 - product.discountPercentage))}
              {' '}
              LE
            </span>
            <span className="fw-bold  sale">
              {product.discountPercentage}
              % Off
            </span>
          </div>
          <div className="size my-4">
            <h3 className="fw-bold">Size</h3>
            <div className="d-flex justify-content-start gap-2">
              <div className="size-box fw-bold">Small</div>
              <div className="size-box fw-bold">Medium</div>
              <div className="size-box fw-bold selected-size">Large</div>
              <div className="size-box fw-bold">X large</div>
              <div className="size-box fw-bold">XX Large</div>
            </div>
          </div>
          <div className="color my-2">
            <h3 className="fw-bold">Color</h3>
            <div className="d-flex justify-content-start align-items-center gap-3">
              <div className="color-box-yellow" />
              <div className="color-box-blue" />
            </div>
          </div>
          <div className="quantity my-2">
            <h3 className="fw-bold">Quantity</h3>
            <div className="d-flex justify-content-start align-items-center gap-3">
              <button type="button" className="btn btn-light fw-bold btn-">-</button>
              <span className="fw-bold">1</span>
              <button type="button" className="btn btn-light fw-bold btn-plus">+</button>
            </div>
          </div>
          <div className="actions d-flex align-items-center gap-5">
            <button type="button" onClick={() => addProduct(product)} className="add-cart fw-bold">Add to Cart</button>
            <button type="button" className="pick-up fw-bold">Pick up from store</button>
          </div>
        </div>
      </div>
    );
  }
}

ProductDetails.contextType = CartProductsContext;

ProductDetails.propTypes = {
  data: PropTypes.shape([]).isRequired,
};
