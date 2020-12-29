import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

import slide1 from '../../imgs/slide1.jpg'
import slide2 from '../../imgs/slide2.jpg'
import slide3 from '../../imgs/slide3.jpg'

import './header.css'

class Header extends Component {
  render() {
    return (
      <Carousel autoplay={true} loop={true} >
        <Carousel.Item>

          <div className="slide-img-box">
            <img src={slide1} alt="slide-image" />
          </div>
          <div className="slide-text-box">
            <h1> Welcome To Meezam Impax </h1>
            <h6>Name of brands</h6>
          </div>


        </Carousel.Item>
        <Carousel.Item>

          <div className="slide-img-box">
          <img src={slide2} alt="slide-image2" />
          </div>
          <div className="slide-text-box">
            <h1> we Offer Sports Wear </h1>
            <h6> Qaulity is our passion</h6>
          </div>


        </Carousel.Item>
        <Carousel.Item>

          <div className="slide-img-box">
          <img src={slide3} alt="slide-image3" />
          </div>
          <div className="slide-text-box">
            <h1> We Offer Ladies Wear </h1>
            <h6>Brand is our name</h6>
          </div>


        </Carousel.Item>

        {/* <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__340.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 color="black" >First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item> */}
      </Carousel>
    );
  }
}

export default Header;
