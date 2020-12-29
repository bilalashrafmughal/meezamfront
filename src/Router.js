import React, { Component } from "react";
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import Home from "./Home/Home";
import ProductList from './Components/ProductList'
import SingleProduct from './Components/SingleProduct'
import  Navbar  from "./Components/Navbar";
import Cart from './Components/Cart'

class Router extends Component {

    getId = ()=>{
        let { id, category } = useParams();

  return (
    <ProductList params={useParams()} id={id} category={category}   />
  );
    }

    getProductId = ()=>{
      let { id } = useParams();

return (
  <SingleProduct params={useParams()} id={id}  />
)}


  render() {
    console.log('router runn')
    return (
      <div>
        <BrowserRouter>
        <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path={`/catagoryid/:id/:category`} component={this.getId} />
            <Route exact path={`/products/:id`} component={this.getProductId} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
          
        </BrowserRouter>
      </div>
    );
  }
}


export default Router;
