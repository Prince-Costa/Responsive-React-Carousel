import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './custom.css';

// images
import imgOne from './images/imgOne.png';
import imgTwo from './images/imgTwo.png';
import imgThree from './images/imgThree.png';

export default class Responsive extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 1111,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 1,
            autoplay: true,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]
        };

        return (
            <Slider {...settings}>
                <div class="ps-md-3 ps-1 pe-md-3 pe-1 ">
                    <div className="card p-md-3 p-2" style={{backgroundColor:'#f56565'}} >
                        <div className="d-flex justify-content-between">
                            <div className="p-md-4 p-3">
                                <h3>Select a restarurant as a</h3>
                                <button className="btnStyle shadow" style={{color:'#f56565'}}>Favourite</button>
                            </div>
                            <div>
                                <img className="img-fluid" src={imgTwo} alt="Not found!"/>
                            </div>
                        </div>
                    </div>
                </div>  
                <div class=" ps-md-3 ps-1 pe-md-3 pe-1">
                    <div className="card p-md-3 p-2" style={{backgroundColor:'#ed63a6'}}>
                        <div className="d-flex justify-content-between">
                            <div className="p-md-4 p-3">
                                <h3>Find your favourite</h3>
                                <button className="btnStyle shadow" style={{color:'#ed63a6'}}>Restaurant</button>
                            </div>
                            <div>
                                <img className="img-fluid" src={imgThree} alt="Not found!"/>
                            </div>
                        </div>                     
                    </div>
                </div>
                <div class=" ps-md-3 ps-1 pe-md-3 pe-1">
                    <div className="card p-md-3 p-2" style={{backgroundColor:'#f6ad55'}}>
                        <div className="d-flex justify-content-between">
                            <div className="p-md-4 p-3">
                                <h3>Order now to track</h3>
                                <button className="btnStyle shadow" style={{color:'#f6ad55'}}>Delivery</button>
                            </div>
                            <div>
                                <img className="img-fluid" src={imgOne} alt="Not found!"/>
                            </div>
                        </div>      
                    </div>
                </div> 
                <div class=" ps-md-3 ps-1 pe-md-3 pe-1">
                    <div className="card p-md-3 p-2 " style={{backgroundColor:'#f56565'}} >
                        <div className="d-flex justify-content-between">
                            <div className="p-md-4 p-3">
                                <h3>Select a restarurant as a</h3>
                                <button className="btnStyle shadow" style={{color:'#f56565'}}>Favourite</button>
                            </div>
                            <div>
                                <img className="img-fluid" src={imgTwo} alt="Not found!"/>
                            </div>
                        </div>
                    </div>
                </div>  
                <div class=" ps-md-3 ps-1 pe-md-3 pe-1 ">
                    <div className="card p-md-3 p-2" style={{backgroundColor:'#ed63a6'}}>
                        <div className="d-flex justify-content-between">
                            <div className="p-md-4 p-3">
                                <h3>Find your favourite</h3>
                                <button className="btnStyle shadow" style={{color:'#ed63a6'}}>Restaurant</button>
                            </div>
                            <div>
                                <img className="img-fluid" src={imgThree} alt="Not found!"/>
                            </div>
                        </div>                     
                    </div>
                </div>
                <div class=" ps-md-3 ps-1 pe-md-3 pe-1">
                    <div className="card p-md-3 p-2" style={{backgroundColor:'#f6ad55'}}>
                        <div className="d-flex justify-content-between">
                            <div className="p-md-4 p-3">
                                <h3>Order now to track</h3>
                                <button className="btnStyle" style={{color:'#f6ad55'}}>Delivery</button>
                            </div>
                            <div>
                                <img className="img-fluid" src={imgOne} alt="Not found!"/>
                            </div>
                        </div>      
                    </div>
                </div>     
            </Slider>
        );
    }
}