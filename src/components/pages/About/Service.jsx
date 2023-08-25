import React from 'react';
import Secure from '../../../assets/images/secure_data.png'
import Functional from '../../../assets/images/functional.png'
import Chat from '../../../assets/images/live-chat.png'
import Support from '../../../assets/images/support.png'

const Service = () => {
    return (
        <section className="service">
            <div className="container">
                <div className="content">
                    <div className="header" data-aos="fade-up">
                        <div className="title">
                            <span>Why we are different</span> from others!
                        </div>
                        <div className="desc">
                            Lorem Ipsum is simply dummy text of the printing and typese tting
                            <br/>indus orem Ipsum has beenthe standard dummy.
                        </div>
                    </div>
                    <div className="body" data-aos="fade-up">
                        <div className="row">
                            <div className="col-3">
                                <div className="item">
                                    <div className="icon">
                                        <img src={Secure} alt=""/>
                                    </div>
                                    <div className="title">Secure code</div>
                                    <div className="desc">
                                        Lorem Ipsum is simply dummy text of the printing and type setting indus ideas.
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="item">
                                    <div className="icon">
                                        <img src={Functional} alt=""/>
                                    </div>
                                    <div className="title">Fully functional</div>
                                    <div className="desc">
                                        Simply dummy text of the printing and typesetting indus lorem Ipsum is dummy.
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="item">
                                    <div className="icon">
                                        <img src={Chat} alt=""/>
                                    </div>
                                    <div className="title">Best communication</div>
                                    <div className="desc">
                                        Lorem Ipsum is simply dummy text of the printing and type setting indus ideas.
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="item">
                                    <div className="icon">
                                        <img src={Support} alt=""/>
                                    </div>
                                    <div className="title">24-7 Support</div>
                                    <div className="desc">
                                        Simply dummy text of the printing and typesetting indus lorem Ipsum is dummy.
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

export default Service;
