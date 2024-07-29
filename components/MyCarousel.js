import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyCarousel = () => {
  return (
    <div className="flex items-center justify-center">
      <Carousel>
      <Carousel.Item>
          <img
            className="my-10 opacity-75"
            width={1000}
            src="pics/cards.png"
            alt="First slide"
            style={{'height': '350px'}}

          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="my-10 opacity-75"
            width={1000}
            src="pics/hdfc.png"
            alt="First slide"
            style={{'height': '350px'}}

          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="my-10 opacity-75"
            width={1000}
            src="pics/upi.jpg"
            alt="First slide"
            style={{'height': '350px'}}

          />
        </Carousel.Item>
    </Carousel>
    </div>
    
  );
}

export default MyCarousel;
