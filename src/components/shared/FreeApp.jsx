import React from 'react';
import AppleBlue from "../../assets/images/appstore_blue.png";
import GoogleBlue from "../../assets/images/googleplay_blue.png";
import Screen1 from '../../assets/images/download-screen01.png'
import Screen2 from '../../assets/images/download-screen02.png'

const FreeApp = () => {
    return (
        <section className="shared free-app">
            <div className="container">
                <div className="body">
                    <div className="content">
                        <div className="row">
                            <div className="col-6">
                                <div className="left">
                                    <div>
                                        <div className="title">
                                            Let’s download free from <br/> apple and play store
                                        </div>
                                        <div className="desc">
                                            Instant free download from apple and play store orem Ipsum is simply dummy text
                                            of the printing. and typese tting indus orem Ipsum has beenthe standard
                                        </div>
                                        <div className="store">
                                            <a className="apple">
                                                <img src={AppleBlue} alt=""/>
                                            </a>
                                            <a className="google">
                                                <img src={GoogleBlue} alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="right">
                                    <div className="img">
                                        <img src={Screen1} alt=""/>
                                    </div>
                                    <div className="img">
                                        <img src={Screen2} alt=""/>
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

export default FreeApp;
