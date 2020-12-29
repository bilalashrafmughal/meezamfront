import React, {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './cart.css';

class CartItem extends Component{
    constructor(props){
        super(props)

        this.state = {
            item: {},
            index: null
        }
    }

    componentDidMount(){
        this.setState({item: this.props.item, index: this.props.index})
    }
    componentDidUpdate(prevProps){
        if(prevProps !== this.props){
            this.setState({
                item: this.props.item
            })
        }
    }

    render(){
        const {item, index} = this.props;
        

        

        return(
            <div className="cart-item">
                <Container>
                    <Row className="cart-item-row">
                        <Col md={1}>
                            <p style={{color: 'var(--main-redish)'}}> {index} </p>
                        </Col>
                        <Col md={1}> <img src={item.product.product.img} alt="item img" /> </Col>
                        <Col md={4}> <span>{item.product.product.title} </span> </Col>
                        <Col md={1}>  <p> {item.product.product.id} </p> </Col>
                        <Col md={2}> <p> + {item.product.qty} - </p>  </Col>
                        <Col md={2}>  <p> {item.product.product.price} </p> </Col>
                        <Col md={1}> <i className="fas fa-trash"></i> </Col>
                    </Row>

                </Container>
                

            </div>

        )
    }
}

export default CartItem;