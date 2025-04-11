import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';

import sliderOne from '../assets/sliderOne.png';
import sliderTwo from '../assets/sliderTwo.png';
import sliderThree from '../assets/sliderThree.png';

const Slider = () => {
  return (
    <Carousel>
      {/* Slide 1 */}
      <Carousel.Item>
        <div className="overlay"></div>
        <img className="d-block w-100" src={sliderOne} alt="First slide" />
        <Carousel.Caption>
          <Form>
            <div className="input-wrapper">
              <Form.Control type="text" placeholder="First Input" className="slider-input" />
              <Form.Control type="text" placeholder="Second Input" className="slider-input" />
            </div>
          </Form>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <div className="overlay"></div>
        <img className="d-block w-100" src={sliderTwo} alt="Second slide" />
        <Carousel.Caption>
          <Form>
            <div className="input-wrapper">
              <Form.Control type="text" placeholder="First Input" className="slider-input" />
              <Form.Control type="text" placeholder="Second Input" className="slider-input" />
            </div>
          </Form>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <div className="overlay"></div>
        <img className="d-block w-100" src={sliderThree} alt="Third slide" />
        <Carousel.Caption>
          <Form>
            <div className="input-wrapper">
              <Form.Control type="text" placeholder="First Input" className="slider-input" />
              <Form.Control type="text" placeholder="Second Input" className="slider-input" />
            </div>
          </Form>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
