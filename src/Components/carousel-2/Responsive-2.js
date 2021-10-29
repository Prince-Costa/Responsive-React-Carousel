import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './custom-2.css';

// images
import imgOne from './images/image-1.jpg';
import imgTwo from './images/image-2.jpg';
import imgThree from './images/image-3.jpg';
import imgFour from './images/image-4.jpg';
import imgFive from './images/image-5.jpg';
import imgSix from './images/image-6.jpg';
import imgSeven from './images/image-7.jpg';
import imgEight from './images/image-8.png';
import imgNine from './images/image-9.jpg';
import imgTen from './images/image-10.jpg';
import imgEleven from './images/image-11.jpg';
import imgTwelve from './images/image-12.jpg';
import imgThirteen from './images/image-13.jpg';
import imgFourteen from './images/image-14.jpg';
import imgFifteen from './images/image-15.jpg';

export default class Responsive extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        autoplay: true,
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <Slider {...settings}>
                <div class="ps-md-3 ps-1 pe-md-3 pe-1 ">
                    <div className="card-2 shadow-sm bg-body" style={{ backgroundColor: 'white', }} >
                        <div className="">
                            <div> 
                            <img className="imgStyle" src={imgEight} alt="Not found" />
                            </div>
                            <div>
                            <h5 className="text-center p-1" style={{color:'black'}}>Sea Food</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ps-md-3 ps-1 pe-md-3 pe-1 ">
                    <div className="card-2 shadow-sm bg-body" style={{ backgroundColor: 'white' }} >
                        <div className="">
                            <div> 
                            <img className="imgStyle " src={imgEight} alt="Not found"  />
                            </div>
                            <div>
                            <h5 className="text-center p-1" style={{color:'black'}}>Sea Food</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ps-md-3 ps-1 pe-md-3 pe-1 ">
                    <div className="card-2 shadow-sm bg-body" style={{ backgroundColor: 'white' }} >
                        <div className="">
                            <div> 
                            <img className="imgStyle " src={imgEight} alt="Not found"  />
                            </div>
                            <div>
                            <h5 className="text-center p-1" style={{color:'black'}}>Sea Food</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ps-md-3 ps-1 pe-md-3 pe-1 ">
                    <div className="card-2 shadow-sm bg-body" style={{ backgroundColor: 'white' }} >
                        <div className="">
                            <div> 
                            <img className="imgStyle " src={imgEight} alt="Not found"  />
                            </div>
                            <div>
                            <h5 className="text-center p-1" style={{color:'black'}}>Sea Food</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ps-md-3 ps-1 pe-md-3 pe-1 ">
                    <div className="card-2 shadow-sm bg-body" style={{ backgroundColor: 'white' }} >
                        <div className="">
                            <div> 
                            <img className="imgStyle " src={imgEight} alt="Not found"  />
                            </div>
                            <div>
                            <h5 className="text-center p-1" style={{color:'black'}}>Sea Food</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        );
    }
}
{/* <div className="p-md-4 p-3">
                                <h5>Select a restarurant as a</h5>
                                <button className="btnStyle shadow" style={{color:'#f56565'}}>Favourite</button>
                            </div>
                            <div>
                                <img className="img-fluid" src={imgEight} alt="Not found!"/>
                            </div> */}
