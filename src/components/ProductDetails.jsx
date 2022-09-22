import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCarousel from './ProductCarousel';
import ProductDescription from './ProductDescription';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data } = this.props;
    const selectedProduct = data.filter((_product, idx) => idx + 1 === parseInt(window.location.href.split('/')[4], 10));
    return (
      <div className="d-flex justify-content-center product container my-5">
        <div className="w-50">
          <ProductCarousel />
        </div>
        <div className="">
          <ProductDescription data={selectedProduct} />
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};
