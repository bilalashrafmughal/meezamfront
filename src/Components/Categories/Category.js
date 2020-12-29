import React, { Component } from 'react'

import serviceCat1 from '../../imgs/serviceCat1.jpg'
import { Link } from 'react-router-dom';



class Category extends Component{

    componentDidMount(){
        console.log('category obj',this.props.category.category)
    }
    render(){
        return(
            <div className="item">
                <div className="cat-img-box">
                    <img src={this.props.category.img} alt="cat-img"/>
                </div>
                <div className="cat-btn-box">
                    <Link className="btn small-btn btn-filled " to={`/catagoryid/${this.props.category.id}/${this.props.category.category}`}> {this.props.category.heading} </Link>
                    <p> {this.props.category.slogan} </p>
                </div>
            </div>
        )
    }
}

export default Category;