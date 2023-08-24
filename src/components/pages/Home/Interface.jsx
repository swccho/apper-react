import React from 'react';
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Screen from "../../../assets/images/screen-3.png";

const Interface = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <section className="interface">
            <div className="container">
                <div className="header" data-aos="fade-up">
                    <div className="title">
                        Beautiful <span>interface</span>
                    </div>
                    <div className="desc">
                        Lorem Ipsum is simply dummy text of the printing and typese tting
                        indus orem Ipsum has beenthe standard dummy.
                    </div>
                </div>
            </div>
            <div className="body">
                <div className="screens">
                    <Slider {...settings}>
                        {
                            Array.from(Array(10).keys()).map((elem, index)=>(
                                <div className="slide" key={index}>
                                    <img src={Screen} alt=""/>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Interface;
