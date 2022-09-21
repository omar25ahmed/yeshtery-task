import React, { Component } from 'react';

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="d-flex justify-content-between">
        <div className="">
          <h1>Product image</h1>
        </div>
        <div className="">
          <img src="/images/Path 771.svg" alt="Adidas" />
          <h2>Product Name</h2>
          <p>Category</p>
          <div>
            <p>Price</p>
          </div>
        </div>
      </div>
    );
  }
}
