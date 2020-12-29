import React, { Component } from 'react'

// import cat1 from '../images/cat1.jpg';
// import cat2 from '../images/cat2.jpg';

import CategoryBox from '../Components/Categories/CategoryBox'

import cat1 from '../imgs/cat1.jpg'
import cat2 from '../imgs/cat2.jpg'

import {webText} from '../models/static';
import './home.css';
import AimBox from './AimBox';
import { ContactMethod } from './ContactMethod';
import Header from '../Components/Header'


class Home extends Component{

    constructor(props){
        super(props)

        this.state = {
            activeFeature: webText.features[0]
        }
    }

    getCol = (arr)=>{
        const arrLength = arr.length;
        const colSize = 12/ arrLength;
        return colSize;
    }
    activeFeature = (e)=>{
        console.log(e.target.value)
        webText.features.map(feature =>{
            if(feature.id === e.target.value){
                this.setState({
                    activeFeature: feature
                })
            }
        })
    }

    render(){
        const {aim, contactMethods, features} = webText;
        const {heading, details, img} = this.state.activeFeature
        return(
            <div className="home">
                
               <Header/>
                <div className="section" id="aim-section">
                    <div className="container">
                        <div className="row aim-subheading">
                            <p> {aim.subHeading} </p>
                        </div>

                        <div className="row aim-mainheading">
                            <h3> {aim.heading} </h3>
                        </div>

                        <div className="row">
                            {aim.aimBoxes.map(box=> <AimBox colSize={this.getCol(aim.aimBoxes)} key={box.id} boxProps={box} />)}
                        </div>
                    </div>
                </div>
                <div className="section" id="category-section">
                <div className="container-fluid">
                    <div className="row cat-images">
                        <img src={cat1} alt="category-images" />
                        <img src={cat2} alt="category-images" />
                    </div>
                </div>
            </div>

            <div className="" id="feature-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4 feature-list">
                                <ul>
                                    {features.map(feature=> <li className={this.state.activeFeature.id === feature.id ? 'activeFeature': ''} key={feature.id} value={feature.id} onClick={this.activeFeature} > <img src={feature.icon}/> {feature.heading} </li>)}
                                </ul>
                                
                            </div>
                            <div className="col-md-8 feature-box">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h4> {heading} </h4>
                                        <p> {details.substring(0, 200)}.... </p>
                                        <button> Read More </button>

                                    </div>
                                    <div className="col-md-6">
                                        <div className="feature-img-box">
                                            <img src={img} alt={heading} />
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <CategoryBox />
            
                <div className="section" id="contact-method-section">
                    <div className="container">
                        <div className="row">
                            { contactMethods.map(method => <ContactMethod key={method.id} method={method} colSize={this.getCol(contactMethods)} />  )}
                            
                        </div>
                    </div>
                </div>

                
               
                
           
            </div>
        )
    }
}

export default Home;