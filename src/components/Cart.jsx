import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartProductsContext from '../services/context';
import './Cart.scss';

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { handleClose, show } = this.props;
    const { products, removeProduct } = this.context;
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
    const cartProducts = () => (
      <div className="cart-products">
        {products.map((product) => (
          <div className="d-flex justify-content-start border p-2 my-2" key={Math.random(10000)}>
            <div className="cart-img w-25">
              <img className="cart-img" src={`./images/${product.imgFolder}/1.jpg`} alt="product" />
            </div>
            <div className="cart-info w-75">
              <h5>{product.title}</h5>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p>Quantity: 1</p>
                  <div className="pricing fw-bold mt-2">
                    {product.price}
                    {' '}
                    <span className="currency">LE</span>
                  </div>
                </div>
                <button className="remove px-4 py-3" onClick={() => removeProduct(product, product.cartProductId)} type="button">Remove</button>
              </div>
            </div>
          </div>
        ))}
        <div className="total text-center">
          <h5 className="fw-bold">
            Total:
            {' '}
            {products.reduce((n, { price }) => n + price, 0)}
            {' '}
            LE
          </h5>
        </div>
        <div className="actions d-flex align-items-center gap-5">
          <button type="button" className="add-cart fw-bold">Review Cart</button>
          <button type="button" className="pick-up fw-bold">Complete Checkout</button>
        </div>
      </div>
    );
    const emptyCart = () => (
      <div className="empty-cart">
        <p>Looks like you haven&apos;t added anything to your cart yet</p>
      </div>
    );
    return (
      <div className={`${showHideClassName}`}>
        <section className="modal-main">
          <button className="bg-transparent border-0 h1 exit" type="button" onClick={handleClose}>
            &times;
          </button>
          <div className="container">
            <h1 className="fw-bold text-center my-5">My Cart</h1>
            <div className="container">
              <p className="fw-bold h5">Cart Summary</p>
              {products.length > 0 ? cartProducts() : emptyCart()}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

Cart.contextType = CartProductsContext;

Cart.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
