import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SimilarProducts.scss';

export default class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { product } = this.props;
    if (!product) {
      return <div />;
    }
    return (
      <div
        className="card shadow-sm"
        style={{ width: '18rem' }}
        key={product.id}
      >
        <img
          src={`./images/${product.imgFolder}/1.jpg`}
          className="card-img-top"
          style={{ height: '300px' }}
          alt="..."
        />
        <div className="card-body">
          <a href={`./#/product/${product.imgFolder}`} className="card-title h3 text-decoration-none text-dark">{product.title}</a>
          <div className="card-info d-flex justify-content-between align-items-center">
            <div>
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
            <img src="./images/Group 745.svg" className="brand-logo" alt="product" />
          </div>
          <div className="d-flex justify-content-center align-items-center gap-2 mt-4">
            <img src={`./images/rating/${Math.floor(product.rating)}-stars.png`} alt="rating" className="rating" />
            <p className="fw-bold">
              {product.rating}
              {' '}
              of 5
            </p>
          </div>
          <div>
            <p className="fw-bold text-center mt-3">from Egypt</p>
          </div>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    price: PropTypes.number,
    discountPercentage: PropTypes.number,
    rating: PropTypes.number,
    imgFolder: PropTypes.number,
  }).isRequired,
};
