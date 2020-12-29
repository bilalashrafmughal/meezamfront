import React, { Component } from "react";
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import Home from "./Home/Home";
import CategoryDetails from './Components/CategoryDetails'

class Router extends Component {

    getId = ()=>{
        let { id, category } = useParams();

  return (
    <CategoryDetails params={useParams()} id={id} category={category}   />
  );
    }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path={`/catagoryid/:id/:category`} component={this.getId} />
          </Switch>
          
        </BrowserRouter>
      </div>
    );
  }
}

export default Router;
