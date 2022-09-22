import React, { Component } from 'react';
import './Cart.scss';
import PropTypes from 'prop-types';

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { handleClose, show } = this.props;
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
    return (
      <div className={`${showHideClassName}`}>
        <section className="modal-main">
          Hello world!
          <button className="bg-transparent border-0 h1 exit" type="button" onClick={handleClose}>
            &times;
          </button>
        </section>
      </div>
    );
  }
}

Cart.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
