import React from 'react';
import Bg from '../../../assets/images/hero-image.png'
import AppleBlue from '../../../assets/images/appstore_blue.png'
import AppleWhite from '../../../assets/images/appstore_white.png'
import GoogleBlue from '../../../assets/images/googleplay_blue.png'
import GoogleWhite from '../../../assets/images/googleplay_white.png'
import User1 from '../../../assets/images/used01.png'
import User2 from '../../../assets/images/used02.png'
import User3 from '../../../assets/images/used03.png'
import User4 from '../../../assets/images/used04.png'
import Play from '../../../assets/images/play_icon.png'
import GoTop from "../../../assets/images/go_top.png";

const Hero = () => {
    return (
        <section className="hero" id="hero" style={{backgroundImage: `url(${Bg})`}}>
            <div className="container">
                <div className="content">
                    <div className="inner">
                        <div className="left">
                            <div className="title">
                                Best way to manage <br/> your customers.
                            </div>
                            <div className="desc">
                                Lorem Ipsum is simply dummy text of the printing and setting indus orem Ipsum has been the industrys.
                            </div>
                            <div className="store">
                                <a className="apple">
                                    <img src={AppleBlue} alt=""/>
                                    <img src={AppleWhite} alt=""/>
                                </a>
                                <a className="google">
                                    <img src={GoogleBlue} alt=""/>
                                    <img src={GoogleWhite} alt=""/>
                                </a>
                            </div>
                            <div className="users">
                                <ul className="images">
                                    <li>
                                        <img src={User1} alt=""/>
                                    </li>
                                    <li>
                                        <img src={User2} alt=""/>
                                    </li>
                                    <li>
                                        <img src={User3} alt=""/>
                                    </li>
                                    <li>
                                        <img src={User4} alt=""/>
                                    </li>
                                </ul>
                                <div className="text">
                                    <div>12M+</div>
                                    <div>used this app</div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <button className="btn play-btn">
                                <img src={Play} alt="play-icon"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#hero" className="go-top">
                <img src={GoTop} alt=""/>
            </a>
        </section>
    );
};

export default Hero;
