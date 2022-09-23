/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SimilarProducts.scss';
import ProductCard from './ProductCard';

export default class SimilarProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { data } = this.props;
    if (data.length === 0) {
      return <div />;
    }
    return (
      <div className="similar-products">
        <div className="container">
          <h1>Similar Products</h1>
          <p>You may like these products also</p>
        </div>
        <div className="d-flex justify-content-center gap-5 container my-5">
          {data.map((product) => (<ProductCard product={product} key={product.id} />))}
        </div>
      </div>
    );
  }
}

SimilarProducts.propTypes = {
  data: PropTypes.shape([]).isRequired,
};
