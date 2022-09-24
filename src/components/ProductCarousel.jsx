import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';

export default class ProductCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesCounter: [...Array(4).keys()],
    };
  }

  render() {
    const { data } = this.props;
    const { imagesCounter } = this.state;
    if (data.length === 0) {
      return <div />;
    }
    return (
      <Carousel>
        {imagesCounter.map((image, idx) => (
          <div key={image}>
            <img src={`./images/${data[0].imgFolder}/${idx + 1}.jpg`} alt="product" />
          </div>
        ))}
      </Carousel>
    );
  }
}

ProductCarousel.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};
