import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './custom.css';

// images
import imgOne from './assets/images/img-01.jpg';
import imgTwo from './assets/images/img-02.jpg';
import imgThree from './assets/images/img-03.jpg';

export default class Responsive extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: false,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
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
                <div>
                    <img className="img-fluid" src={imgOne} alt="Not found!" />
                </div>
                <div>
                    <img className="img-fluid" src={imgTwo} alt="Not found!" />
                </div>
                <div>
                    <img className="img-fluid" src={imgThree} alt="Not found!" />
                </div>
                <div>
                    <img className="img-fluid" src={imgOne} alt="Not found!" />
                </div>
                <div>
                    <img className="img-fluid" src={imgTwo} alt="Not found!" />
                </div>
                <div>
                    <img className="img-fluid" src={imgThree} alt="Not found!" />
                </div>
            </Slider>
        );
    }
}