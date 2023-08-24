import React from 'react';
import Secure from '../../../assets/images/secure_data.png'
import Functional from '../../../assets/images/functional.png'
import Chat from '../../../assets/images/live-chat.png'
import Support from '../../../assets/images/support.png'
import Frame from "../../../assets/images/features_frame.png"

const Feature = () => {
    return (
        <section className="feature">
            <div className="container">
                <div className="header">
                    <div className="title">
                        <span>Features</span> that makes app different!
                    </div>
                    <div className="desc">
                        Lorem Ipsum is simply dummy text of the printing and typese tting
                        <br/> indus orem Ipsum has beenthe standard dummy.
                    </div>
                </div>
                <div className="body">
                    <div className="row">
                        <div className="col-4">
                            <div className="left text-end">
                               <div>
                                   <div className="item one">
                                       <div className="icon">
                                           <img src={Secure} alt=""/>
                                       </div>
                                       <div className="title">Secure data</div>
                                       <div className="desc">
                                           Lorem Ipsum is simply dummy text of the printing and type setting indus ideas.
                                       </div>
                                   </div>
                                   <div className="item two">
                                       <div className="icon">
                                           <img src={Functional} alt=""/>
                                       </div>
                                       <div className="title">Fully functional</div>
                                       <div className="desc">
                                           Lorem Ipsum is simply dummy text of the printing and type setting indus ideas.
                                       </div>
                                   </div>
                               </div>
                            </div>

                        </div>
                        <div className="col-4">
                            <div className="frame">
                                <img src={Frame} alt=""/>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="right">
                                <div>
                                    <div className="item three">
                                        <div className="icon">
                                            <img src={Chat} alt=""/>
                                        </div>
                                        <div className="title">Live chat</div>
                                        <div className="desc">
                                            Lorem Ipsum is simply dummy text of the printing and type setting indus ideas.
                                        </div>
                                    </div>
                                    <div className="item four">
                                        <div className="icon">
                                            <img src={Support} alt=""/>
                                        </div>
                                        <div className="title">24-7 Support</div>
                                        <div className="desc">
                                            Lorem Ipsum is simply dummy text of the printing and type setting indus ideas.
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

export default Feature;
