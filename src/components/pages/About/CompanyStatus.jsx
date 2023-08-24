import React from 'react';
import Download from "../../../assets/images/download.png";
import Reviews from "../../../assets/images/reviews.png";
import Followers from "../../../assets/images/followers.png";
import Countries from "../../../assets/images/countries.png";
import AboutMain from "../../../assets/images/about_main.png";

const CompanyStatus = () => {
    return (
        <section className="company-status">

            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <div className="left">
                            <img src={AboutMain} alt=""/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="right">
                            <div className="header">
                                <div className="title">
                                    <span>We focus on quality,</span> never <br/> focus on quantity
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyStatus;
