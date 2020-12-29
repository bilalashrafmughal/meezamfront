import React, { Component } from 'react'
import {Container, Row} from 'react-bootstrap'
import CartItem from './CartItem'
import {connect} from 'react-redux'

class Cart extends Component{
    constructor(props){
        super(props)

        this.state ={
            cart: []
        }
    }

    componentDidMount(){
        this.setState({
            cart: this.props.cart
        })
    }

    componentDidUpdate(prevProps){
        if(prevProps !== this.props){
            this.setState({
                cart: this.props.cart
            })
        }
    }
    
    render(){
        return(
            <div className="cart">
                <div className="container">
                        <div className="row aim-subheading">
                            <p> your cart is ready </p>
                        </div>

                        <div className="row aim-mainheading">
                            <h3> cart </h3>
                        </div>

                    </div>
                {this.state.cart.map((item, i)=> <CartItem key={i} index={i} item={item} /> )}

                
            </div>

        )
    }

}

const mapStateToProps = (state)=>{
    return {cart: state.cart}
}
export default connect(mapStateToProps)(Cart);