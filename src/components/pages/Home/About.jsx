import React from 'react';
import Frame from '../../../assets/images/about-frame.png'
import Screen from '../../../assets/images/about-screen.png'
import Counter from "../../shared/Counter.jsx";

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="box" data-aos="fade-zoom-in">
                            <div className="frame">
                                <img src={Frame} alt=""/>
                            </div>
                            <div className="screen">
                                <img src={Screen} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="content">
                            <div className="header" data-aos="fade-up">
                                <div className="title">
                                    Some awesome words <br/> <span>about app.</span>
                                </div>
                                <div className="desc">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem
                                    Ipsum has been the industrys standard dummy text ever since the when an unknown
                                    printer took a galley of type and. Lorem ipsum dolor sit amet.
                                </div>
                            </div>
                            <div className="body"
                                 data-aos="fade-zoom-in"
                                 data-aos-easing="ease-in-back"
                                 data-aos-delay="300"
                                 data-aos-offset="0">
                                <Counter />
                                <button className="btn btn-theme">start free trial</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
