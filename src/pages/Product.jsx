import React, { Component } from 'react';
import ProductDetails from '../components/ProductDetails';
import { http } from '../services/http';
import './Product.scss';

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    this.setState({ data: await http() });
  }

  render() {
    // const { productId } = this.state;
    const { data } = this.state;
    return (
      <ProductDetails data={data} />
    );
  }
}
