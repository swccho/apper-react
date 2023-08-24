import React from 'react';
import Member1 from '../../../assets/images/experts_01.png'
import Member2 from '../../../assets/images/experts_02.png'
import Member3 from '../../../assets/images/experts_03.png'
import Member4 from '../../../assets/images/experts_04.png'

const Employee = () => {
    return (
        <section className="employee">
            <div className="container">
                <div className="header">
                    <div className="title">
                        Meet our <span>experts</span>
                    </div>
                    <div className="desc">
                        Lorem Ipsum is simply dummy text of the printing and typese tting
                        <br/>indus orem Ipsum has beenthe standard dummy.
                    </div>
                </div>
                <div className="body">
                    <div className="row">
                        <div className="col-3">
                            <div className="member">
                                <div className="img">
                                    <img src={Member1} alt=""/>
                                </div>
                                <div className="name">Steav Joe</div>
                                <div className="role">CEO & Co-Founder</div>
                                <ul className="social-links">
                                    <li>
                                        <a href="">
                                            <i className="lab la-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="lab la-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="lab la-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="member">
                                <div className="img">
                                    <img src={Member2} alt=""/>
                                </div>
                                <div className="name">Steav Joe</div>
                                <div className="role">CEO & Co-Founder</div>
                                <ul className="social-links">
                                    <li>
                                        <a href="">
                                            <i className="lab la-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="lab la-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="lab la-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="member">
                                <div className="img">
                                    <img src={Member3} alt=""/>
                                </div>
                                <div className="name">Steav Joe</div>
                                <div className="role">CEO & Co-Founder</div>
                                <ul className="social-links">
                                    <li>
                                        <a href="">
                                            <i className="lab la-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="lab la-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="lab la-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="member">
                                <div className="img">
                                    <img src={Member4} alt=""/>
                                </div>
                                <div className="name">Steav Joe</div>
                                <div className="role">CEO & Co-Founder</div>
                                <ul className="social-links">
                                    <li>
                                        <a href="">
                                            <i className="lab la-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="lab la-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="lab la-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Employee;
