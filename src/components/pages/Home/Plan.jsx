import React from 'react';
import Standard from '../../../assets/images/standard.png'
import Unlimited from '../../../assets/images/unlimited.png'
import Premium from '../../../assets/images/premium.png'


const Plan = () => {
    return (
        <section className="plan">
            <div className="container">
                <div className="header" data-aos="fade-up">
                    <div className="title">
                        Best & simple <span>pricing</span>
                    </div>
                    <div className="desc">
                        Lorem Ipsum is simply dummy text of the printing and typese tting
                        <br/>indus orem Ipsum has beenthe standard dummy.
                    </div>
                </div>
                <div className="body" data-aos="fade-up">
                    <div className="row">
                        <div className="col-4">
                            <div className="item">
                                <div className="top">
                                    <div className="icon">
                                        <img src={Standard} alt=""/>
                                    </div>
                                    <div className="title">Standard</div>
                                    <div className="slug">For the basics</div>
                                </div>
                                <div className="price">$15</div>
                                <ul className="list">
                                    <li>Up to 5 Website</li>
                                    <li>50 GB disk space</li>
                                    <li>10 Customize sub pages</li>
                                    <li>2 Domains access</li>
                                    <li>Support on request</li>
                                </ul>
                                <div className="btn btn-theme">Buy now</div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="item unlimited">
                                <div className="top">
                                    <div className="icon">
                                        <img src={Unlimited} alt=""/>
                                    </div>
                                    <div className="title">Unlimited</div>
                                    <div className="slug">For the professionals</div>
                                </div>
                                <div className="price">$99</div>
                                <ul className="list">
                                    <li>Unlimited Website</li>
                                    <li>200 GB disk space</li>
                                    <li>20 Customize sub pages</li>
                                    <li>10 Domains access</li>
                                    <li>24/7 Customer support</li>
                                </ul>
                                <div className="btn btn-theme">Buy now</div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="item">
                                <div className="top">
                                    <div className="icon">
                                        <img src={Premium} alt=""/>
                                    </div>
                                    <div className="title">Premium</div>
                                    <div className="slug">For small team</div>
                                </div>
                                <div className="price">$55</div>
                                <ul className="list">
                                    <li>Up to 5 Website</li>
                                    <li>100 GB disk space</li>
                                    <li>15 Customize sub pages</li>
                                    <li>4 Domains access</li>
                                    <li>24/7 Customer support</li>
                                </ul>
                                <div className="btn btn-theme">Buy now</div>
                            </div>
                        </div>
                    </div>
                    <div className="chose-custom" data-aos="fade-up">
                        Not sure what to choose ? <a href="">contact us</a> for custom packages
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Plan;
