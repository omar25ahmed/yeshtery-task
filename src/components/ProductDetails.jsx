import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCarousel from './ProductCarousel';
import ProductDescription from './ProductDescription';
import SimilarProducts from './SimilarProducts';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { data } = this.props;
    const modifiedData = data.map((product, idx) => ({ ...product, imgFolder: idx + 1 }));
    const selectedProduct = modifiedData.filter((_product, idx) => idx + 1 === parseInt(window.location.href.split('/').pop(), 10));
    const similarProduct = modifiedData.filter((_product, idx) => idx + 1 !== parseInt(window.location.href.split('/').pop(), 10));
    return (
      <>
        <div className="d-flex flex-column flex-lg-row justify-content-center product container my-5">
          <ProductCarousel data={selectedProduct} />
          <ProductDescription data={selectedProduct} />
        </div>
        <SimilarProducts data={similarProduct} />
      </>
    );
  }
}

ProductDetails.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};
