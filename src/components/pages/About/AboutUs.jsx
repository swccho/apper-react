import React from 'react';
import About1 from '../../../assets/images/abt_01.png'
import About2 from '../../../assets/images/abt_02.png'
import About3 from '../../../assets/images/abt_03.png'
import PlayBtn from '../../../assets/images/play_black.png'

const Service = () => {
    return (
        <section className="about-us">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="left">
                            <div>
                                <div className="header">
                                    <div className="title" data-aos="fade-up">
                                        <span>Providing innovative app solution</span> to make customer life easy to grow.
                                    </div>
                                    <br/>
                                    <div className="desc">
                                        <div data-aos="fade-up">
                                            Lorem Ipsum is simply dummy text of the printing and type setting industry lorem Ipsum has been
                                            the industrys standard dummy text ever since the when an unknown printer took a galley of type
                                            and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                                            the leap into electronic typesetting, remaining to make a type speci men book. It has survived
                                            essentially unchanged.
                                        </div>
                                        <br/>
                                        <div data-aos="fade-up">
                                            Standard dummy text ever since the when an unknown printer took a galley of type and scrambled
                                            it to make a type specien book. It has survived not only five centuries, but also the leap into
                                            electronic typesetting.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="right" data-aos="fade-left">
                            <ul>
                                <li>
                                    <img src={About1} alt=""/>
                                </li>
                                <li>
                                    <img src={About2} alt=""/>
                                    <button className="btn play-btn">
                                        <img src={PlayBtn} alt=""/>
                                    </button>
                                </li>
                                <li>
                                    <img src={About3} alt=""/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;
