import React from 'react';
import LOGO from '../../assets/images/footer_logo.png'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="container d-flex align-items-center justify-content-between">
                <div className="logo">
                    <Link to="/">
                        <img src={LOGO} alt="logo"/>
                    </Link>
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <a href="">Features</a>
                        </li>
                        <li>
                            <a href="">How it works</a>
                        </li>
                        <li>
                            <a href="">Pages <i className="las la-angle-down"></i></a>
                            <ul>
                                <li>
                                    <Link to="/about">About Us</Link>
                                </li>
                                <li>
                                    <Link to="/review">Review</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact Us</Link>
                                </li>
                                <li>
                                    <Link to="/faq">Faq</Link>
                                </li>
                                <li>
                                    <Link to="/sign-in">Sign In</Link>
                                </li>
                                <li>
                                    <Link to="/sign-up">Sign Up</Link>
                                </li>
                                <li>
                                    <Link to="/blogs">Blog List</Link>
                                </li>
                                <li>
                                    <Link to="/blogs/1">Blog Single</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="">Pricing</a>
                        </li>
                        <li>
                            <a href="">Blog</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
