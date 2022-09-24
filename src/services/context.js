import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      products: [...prevState.products,
        { ...product, cartProductId: Math.random(1000000) }],
    }));
    toast.success('Product added to cart');
  };

  removeProduct = (product, i) => {
    this.setState((prevState) => ({
      products: prevState.products.filter((p) => p.cartProductId !== i),
    }));
    toast.error('Product removed from cart');
  };

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
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
