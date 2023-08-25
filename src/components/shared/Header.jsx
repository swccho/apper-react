import React, {useState, useEffect} from 'react';
import LOGO from '../../assets/images/footer_logo.png'
import {Link} from "react-router-dom";

const Header = () => {
    const [navbarFixed, setNavbarFixed] = useState(false)
    useEffect(() =>{
        window.addEventListener("scroll", (event) => {
            if (window.pageYOffset > 200) {
                setNavbarFixed(true)
            } else {
                setNavbarFixed(false)
            }
        });
    }, [])
    return (
        <header className={`${navbarFixed && 'fixed'}`}>
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
                            <Link to="/">Features</Link>
                        </li>
                        <li>
                            <Link to="/">How it works</Link>
                        </li>
                        <li>
                            <a href="javascript:void(0)">Pages <i className="las la-angle-down"></i></a>
                            <ul>
                                <li>
                                    <Link to="/about">About Us</Link>
                                </li>
                                <li>
                                    <Link to="/review">Reviews</Link>
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
                            <Link to="/">Pricing</Link>
                        </li>
                        <li>
                            <a href="javascript:void(0)">Blog <i className="las la-angle-down"></i></a>
                            <ul>
                                <li>
                                    <Link to="/blogs">Blog List</Link>
                                </li>
                                <li>
                                    <Link to="/blogs/1">Blog Single</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
