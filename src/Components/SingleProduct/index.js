import React from "react";
import { Component } from "react";
import "./singleProduct.css";
import { productsList } from "../../models/productsList";
import {addToCartAction} from '../ReducersActions/Actions'
import RelatedItem from '../RelatedItems'
import {Alert} from 'react-bootstrap'
import {
  Magnifier,
  GlassMagnifier,
  SideBySideMagnifier,
  PictureInPictureMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION,
  MagnifierContainer,
  MagnifierZoom,
  MagnifierPreview,
} from "react-image-magnifiers";
import { connect } from "react-redux";

class SingleProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productValues: {},
      qty: 1,
      cart: [],
      addedToCart: false
    };
  }


  componentDidMount() {
    window.scrollTo(0,0)

    const reduxCart = this.props.cart;
    
    reduxCart.map(product => product.id === this.props.id ? this.setState({addedToCart: true}) : this.setState({addedToCart: false}) )
    


  
    productsList.map(
      (product) =>
        product.id === parseInt(this.props.id) &&
        this.setState({ productValues: product })
    );

   
  }

  componentDidUpdate(prevProps){
    if(prevProps !== this.props)
    this.componentDidMount()
  }

  plus = ()=>{
    this.setState(prevState => {
      return {qty: prevState.qty + 1}
   }) 
  }
  minus = ()=>{
    this.setState(prevState => {
      return {qty: prevState.qty - 1}
   }) 
  }

  addToCart = ()=>{
    const product = {
      id: this.props.id,
      product: {
        qty: this.state.qty,
        product: this.state.productValues
      }
    }

    // const oldCart = this.props.cart
    // oldCart.push(product)

    // this.props.addToCart(oldCart)
    // this.setState({addedToCart: true})
    // window.localStorage.setItem('cart', JSON.stringify(oldCart))
    this.props.addToCart(product)
    this.forceUpdate()
  }

  render() {
    return (
      <>
        <div className="single-product">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="single-product-img">
                  <MagnifierContainer>
                    <GlassMagnifier
                      imageSrc={this.state.productValues.img}
                      imageAlt={this.state.productValues.title}
                      largeImageSrc={this.state.productValues.img} // Optional
                      mouseActivation={MOUSE_ACTIVATION.DOUBLE_CLICK} // Optional
                      touchActivation={TOUCH_ACTIVATION.DOUBLE_TAP} // Optional
                      magnifierSize="45%"
                    />
                  </MagnifierContainer>
                </div>
              </div>
              <div className="col-md-6 my-col">
                <div className="single-product-text">
                  <h2> {this.state.productValues.title} </h2>
                  <h4> {this.state.productValues.price} </h4>
                  <p> {this.state.productValues.description} </p>
                  <div className="single-product-about">
                    <p>
                      {" "}
                      Product:{" "}
                      <span>{this.state.productValues.productName}</span>{" "}
                    </p>
                    <p>
                      {" "}
                      Category: <span>
                        {this.state.productValues.category}
                      </span>{" "}
                    </p>
                    <p>
                      {" "}
                      Brand: <span>{this.state.productValues.brand}</span>{" "}
                    </p>
                  </div>
                  {this.state.addedToCart ? (
                    <div className="single-product-counter-panel">
                      <button
                        disabled
                        style={{ margin: 0 }}
                        className="btn btn-outlined small-btn disabled"
                      >
                        -
                      </button>
                      <span> {this.state.qty} </span>
                      <button
                        disabled
                        style={{ margin: 0 }}
                        className="btn btn-outlined small-btn disabled"
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <div className="single-product-counter-panel">
                      <button
                        style={{ margin: 0 }}
                        className="btn btn-outlined small-btn"
                        onClick={this.minus}
                      >
                        -
                      </button>
                      <span> {this.state.qty} </span>
                      <button
                        style={{ margin: 0 }}
                        className="btn btn-outlined small-btn"
                        onClick={this.plus}
                      >
                        +
                      </button>
                    </div>
                  )}

                  <div className="single-product-btn-box">
                    <button className="btn btn-outlined medium-btn">
                      {" "}
                      <i className="fas fa-heart"></i> Like{" "}
                    </button>

                    {this.state.addedToCart === true ? (
                      <button
                        className="btn btn-filled medium-btn disabled"
                        disabled
                      >
                        {" "}
                        <i className="fas fa-shopping-cart"></i> Add To Cart{" "}
                      </button>
                    ) : (
                      <button
                        className="btn btn-filled medium-btn"
                        onClick={this.addToCart}
                      >
                        {" "}
                        <i className="fas fa-shopping-cart"></i> Add To Cart{" "}
                      </button>
                    )}

                    

                    <Alert style={this.state.addedToCart ? {display: 'block'} : {display:'none'} } variant="success">
                      This item is already in the cart, visit cart.
                    </Alert>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <RelatedItem productValues={this.state.productValues} />
      </>
    );
  }
}

const mapDispatchToState = (dispatch)=>{
  return {
    addToCart: (product)=> dispatch (addToCartAction(product))
  }
}

const mapStateToProps = (state)=>{
  return {cart: state.cart}
}

export default connect(mapStateToProps, mapDispatchToState)(SingleProduct);
