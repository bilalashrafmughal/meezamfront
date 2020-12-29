import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './relateditems.css';
import ProductCard from './Card'
import {productsList} from '../../models/productsList'
import {servicesCategories} from '../../models/servicesCategories'


class RelatedProducts  extends Component{

  render(){
    return(

      <div className="products-list">

        <div className="container">
            <div className="message-heading">
                <h5> Related Items </h5>
            </div>
                 
          <div className="row product-list-box">
            { productsList.map( product => product.category === this.props.productValues.category || product.productName === this.props.productValues.productName && <ProductCard product={product} /> ) }
          </div>
        </div>

      </div>

    )
  }
}


export default RelatedProducts;