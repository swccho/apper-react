import React from 'react';
import Download from '../../../assets/images/download.png'
import Countries from '../../../assets/images/countries.png'
import Followers from '../../../assets/images/followers.png'
import Reviews from '../../../assets/images/reviews.png'
import Frame from '../../../assets/images/about-frame.png'
import Screen from '../../../assets/images/about-screen.png'

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="box">
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
                            <div className="header">
                                <div className="title">
                                    Some awesome words <br/> <span>about app.</span>
                                </div>
                                <div className="desc">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem
                                    Ipsum has been the industrys standard dummy text ever since the when an unknown
                                    printer took a galley of type and. Lorem ipsum dolor sit amet.
                                </div>
                            </div>
                            <div className="body">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="counters">
                                            <div className="counter">
                                                <div className="icon">
                                                    <img src={Download} alt=""/>
                                                </div>
                                                <div className="text">
                                                    <div className="title">17M+</div>
                                                    <div className="text">Download</div>
                                                </div>
                                            </div>
                                            <div className="counter">
                                                <div className="icon">
                                                    <img src={Reviews} alt=""/>
                                                </div>
                                                <div className="text">
                                                    <div className="title">2300M+</div>
                                                    <div className="text">Download</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="counters">
                                            <div className="counter">
                                                <div className="icon">
                                                    <img src={Followers} alt=""/>
                                                </div>
                                                <div className="text">
                                                    <div className="title">8M+</div>
                                                    <div className="text">Download</div>
                                                </div>
                                            </div>
                                            <div className="counter">
                                                <div className="icon">
                                                    <img src={Countries} alt=""/>
                                                </div>
                                                <div className="text">
                                                    <div className="title">150M+</div>
                                                    <div className="text">Download</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
