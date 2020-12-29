import React, { Component } from 'react'
import {Navbar, Nav, NavDropdown, FormControl, Form, Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import './navbar.css'
import {connect} from 'react-redux'

class Navi extends Component{

  constructor(props){
    super(props)

      this.state ={
        itemsInCart: null
      }
    
  }

  componentDidUpdate(prevProps){
    if(prevProps.cart !== this.props.cart){
      const itemsInCart = this.props.cart.length
      this.setState({
        itemsInCart: itemsInCart  
      })
    }
  }

  componentDidMount(){
    const cart = this.props.cart;
    const itemsInCart = cart.length;
    if(itemsInCart > 0 ){
      this.setState({
        itemsInCart: itemsInCart
      })
    }else{
      this.setState({
        itemsInCart: null
      })
    }
  }

    render(){
        return(
            <div className="navi">
<Navbar fixed='top' sticky='top' className="nav-bg-color"  variant="dark" expand="lg">
  <Navbar.Brand href="#home"><i className="fas fa-tshirt"></i></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className=" nav-center mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      
      <NavLink to="/cart">
        <div className="cart-box">
          <i className="fas fa-shopping-cart"></i>
          {this.state.itemsInCart !== null && <span> {this.state.itemsInCart} </span>  }
          
        </div>
      
      </NavLink>
    </Nav>
  </Navbar.Collapse>
</Navbar>
            </div>
        )
    }
}


const mapStateToProps = (state)=>{
  return { cart: state.cart }
}

export default connect(mapStateToProps)(Navi);