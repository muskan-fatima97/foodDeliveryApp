import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';
import sliderOne from '../assets/sliderOne.png';
import sliderTwo from '../assets/food_13.png';
import sliderThree from '../assets/food_17.png';

const Slider = () => {
  return (
    <Carousel>
      
      <Carousel.Item>
        <div className="overlay"></div>
        <img className="d-block w-100" src={sliderOne} alt="First slide" />
        <Carousel.Caption className="crousel-details">
          <Form>
            <div className="input-wrapper">
              <Form.Control type="text" placeholder="Enter Area" className="slider-input" />
              <Form.Control type="text" placeholder="Enter City" className="slider-input" />
            </div>
          </Form>
          <h2>Savor Every Bite</h2>
          <p>Experience dishes crafted with passion, delivered with care. Your cravings deserve the finest flavors.</p>
        </Carousel.Caption>
      </Carousel.Item>

     
      <Carousel.Item>
        <div className="overlay"></div>
        <img className="d-block w-100" src={sliderTwo} alt="Second slide" />
        <Carousel.Caption className="crousel-details">
          <Form>
            <div className="input-wrapper">
              <Form.Control type="text" placeholder="First Input" className="slider-input" />
              <Form.Control type="text" placeholder="Second Input" className="slider-input" />
            </div>
          </Form>
          <h2>Fast, Fresh & Flavorful</h2>
          <p>rom our kitchen to your doorstep—hot meals, healthy ingredients, and zero compromises on taste.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="overlay"></div>
        <img className="d-block w-100" src={sliderThree} alt="Third slide" />
        <Carousel.Caption className="crousel-details">
          <Form>
            <div className="input-wrapper">
              <Form.Control type="text" placeholder="First Input" className="slider-input" />
              <Form.Control type="text" placeholder="Second Input" className="slider-input" />
            </div>
          </Form>
          <h2 >Made With Love, Delivered With Speed</h2>
          <p>Whether it's a late-night snack or a family dinner, we're here to serve joy in every bite.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  );
}

export default Slider;
