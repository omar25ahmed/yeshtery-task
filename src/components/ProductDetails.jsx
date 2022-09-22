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
    const selectedProduct = modifiedData.filter((_product, idx) => idx + 1 === parseInt(window.location.href.split('/')[4], 10));
    const similarProduct = modifiedData.filter((_product, idx) => idx + 1 !== parseInt(window.location.href.split('/')[4], 10));
    return (
      <>
        <div className="d-flex justify-content-center product container my-5">
          <div className="w-50">
            <ProductCarousel data={selectedProduct} />
          </div>
          <div className="">
            <ProductDescription data={selectedProduct} />
          </div>
        </div>
        <SimilarProducts data={similarProduct} />
      </>
    );
  }
}

ProductDetails.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};
