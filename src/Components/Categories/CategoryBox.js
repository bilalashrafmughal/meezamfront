import React, { Component } from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import './category.css'

import {servicesCategories} from '../../models/servicesCategories'
import Category from './Category'

class CategoryBox extends Component {
  render() {
    return (
      <div className="category-box">
        <div className="container">
        <div className="row aim-subheading">
                            <p> We offer our best </p>
                        </div>

                        <div className="row aim-mainheading">
                            <h3> Our services </h3>
                        </div>
          <OwlCarousel className="owl-theme" loop margin={10} items={4} autoplayHoverPause={true} autoplay={true} autoplaySpeed={500} nav>
            {servicesCategories.map(item => <Category category ={item}/>    )}
          </OwlCarousel>
        </div>
      </div>
    );
  }
}

export default CategoryBox;
