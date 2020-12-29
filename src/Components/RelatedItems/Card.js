import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import {Link} from 'react-router-dom'


class ProductCard extends Component{
  

    render(){

        return (
        <div className="col-md-4">
      <Link to={`/products/${this.props.product.id}`}>
          
          
<Card
    hoverable
    style={{ width: 300, margin: 'auto', marginBottom: '20px' }}
    cover={<img alt="example" src={this.props.product.img} />}
  >
    <div className="product-card-text">
        <h3> {this.props.product.title} </h3>
        <h5> {this.props.product.price} </h5>
        <p> Brand: {this.props.product.brand} </p>
        <p> Product: {this.props.product.productName} </p>
         <span> {this.props.product.description} </span>
    </div>
  </Card>
  </Link>
  </div>
        )
    }
}

export default ProductCard;