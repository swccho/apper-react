import React from 'react';
import Shape1 from "../../../assets/images/banner-shape1.png";
import Shape2 from "../../../assets/images/banner-shape2.png";
import Shape3 from "../../../assets/images/banner-shape3.png";

const Contact = () => {
    return (
        <section className="contact">
            <div className="container">
                <div className="content"
                     data-aos="fade-zoom-in"
                     data-aos-easing="ease-in-back"
                     data-aos-delay="300"
                     data-aos-offset="0">
                    <div className="header">
                        <div className="title">Have any query about ?</div>
                        <div className="desc">
                            Lorem Ipsum is simply dummy text of the printing and typese tting
                            <br/>indus orem Ipsum has beenthe standard dummy.
                        </div>
                    </div>
                    <button className="btn btn-theme">contact us now</button>
                    <div className="shape shape-1">
                        <img src={Shape1} alt=""/>
                    </div>
                    <div className="shape shape-2">
                        <img src={Shape2} alt=""/>
                    </div>
                    <div className="shape shape-3">
                        <img src={Shape3} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
