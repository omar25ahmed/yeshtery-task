import React from 'react';
import PropTypes from 'prop-types';

const CartProductsContext = React.createContext();

export class ProductProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  addProduct = (product) => {
    this.setState((prevState) => ({
      products: [...prevState.products, product],
    }));
  }

  removeProduct = (product, i) => {
    this.setState((prevState) => ({
      products: prevState.products.filter((_p, id) => id !== i),
    }));
  }

  render() {
    const { children } = this.props;
    const { products } = this.state;
    const { addProduct, removeProduct } = this;

    return (
      <CartProductsContext.Provider value={{ products, addProduct, removeProduct }}>
        {children}
      </CartProductsContext.Provider>
    );
  }
}

export default CartProductsContext;

ProductProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
