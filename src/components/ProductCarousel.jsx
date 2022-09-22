import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class ProductCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesCounter: [...Array(4).keys()],
    };
  }

  render() {
    const id = parseInt(window.location.href.split('/')[4], 10);
    const { imagesCounter } = this.state;
    return (
      <Carousel>
        {imagesCounter.map((image, idx) => (
          <div key={image}>
            <img src={`/images/${id}/${idx + 1}.jpg`} alt="product" />
          </div>
        ))}
      </Carousel>
    );
  }
}
