import React from 'react';
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Envato from '../../assets/images/envato.png'
import Spoty from '../../assets/images/spoty.png'
import Slack from '../../assets/images/slack.png'
import Paypal from '../../assets/images/paypal.png'
import Shopboat from '../../assets/images/shopboat.png'

const logos = [
    Envato,
    Spoty,
    Slack,
    Paypal,
    Shopboat
]

const Company = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <section className="shared company">
            <div className="container">
                <div className="header" data-aos="fade-up">
                    <div className="title">Trusted by <span>150+</span> companies</div>
                    <div className="desc">
                        Lorem Ipsum is simply dummy text of the printing and typese tting
                        <br/>
                        indus orem Ipsum has beenthe standard dummy.
                    </div>
                </div>
                <div className="body">
                    <div className="logos">
                       <Slider {...settings}>
                           {
                               logos.map((elem, index) => (
                                   <div className="slide" key={index}>
                                       <img src={elem} alt=""/>
                                   </div>
                               ))
                           }

                       </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Company;
