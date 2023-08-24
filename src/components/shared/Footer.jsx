import React from 'react';
import Bg from '../../assets/images/footer_bg.png'
import Logo from '../../assets/images/footer_logo.png'
import Apple from '../../assets/images/appstore_blue.png'
import Google from '../../assets/images/googleplay_blue.png'

const Footer = () => {
    const background = {
        backgroundImage: `url(${Bg})`,
    }
    return (
        <footer>
            <div className="footer-top" style={background}>
                <div className="container">
                    <div className="newsletter"
                         data-aos="fade-zoom-in"
                         data-aos-easing="ease-in-back"
                         data-aos-delay="100"
                         data-aos-offset="0">
                        <div className="text">
                            <div className="title">Subscribe newsletter</div>
                            <div className="slug">Be the first to recieve all latest post in your inbox</div>
                        </div>
                        <div className="subscribe">
                            <form>
                                <div className="d-flex align-items-center">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Enter your email"/>
                                    </div>
                                    <div className="btn submit-btn">Submit</div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <div className="item">
                                <div className="logo">
                                    <img src={Logo} alt=""/>
                                </div>
                                <div className="email">support@example.com</div>
                                <div className="phone">+1-900-123 4567</div>
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
                                    <li>
                                        <a href="">
                                            <i className="lab la-pinterest-p"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="item">
                                <div className="title">Useful Links</div>
                                <ul className="menu">
                                    <li>
                                        <a href="">Home</a>
                                    </li>
                                    <li>
                                        <a href="">About us</a>
                                    </li>
                                    <li>
                                        <a href="">Services</a>
                                    </li>
                                    <li>
                                        <a href="">Blog</a>
                                    </li>
                                    <li>
                                        <a href="">Contact us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="item">
                                <div className="title">Help & Support</div>
                                <ul className="menu">
                                    <li>
                                        <a href="">FAQs</a>
                                    </li>
                                    <li>
                                        <a href="">Support</a>
                                    </li>
                                    <li>
                                        <a href="">How it works</a>
                                    </li>
                                    <li>
                                        <a href="">Terms & conditions</a>
                                    </li>
                                    <li>
                                        <a href="">Privacy policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="item">
                                <div className="title">Let’s Try Out</div>
                                <div className="store">
                                    <a className="apple">
                                        <img src={Apple} alt=""/>
                                    </a>
                                    <a className="google">
                                        <img src={Google} alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container d-flex align-items-center justify-content-between">
                    <div className="left">&copy; Copyrights 2022. All rights reserved.</div>
                    <div className="right">Design & developed by <a href="">Redishketch</a></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
