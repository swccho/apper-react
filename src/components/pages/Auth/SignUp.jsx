import React from 'react';
import Bg from '../../../assets/images/form-bg.png';
import Logo from '../../../assets/images/footer_logo.png'
import Google from '../../../assets/images/google.png'
import {Link} from "react-router-dom";

const SignIn = () => {
    return (
        <div className="page auth" style={{backgroundImage: `url(${Bg})`}}>
            <div className="container">
                <div className="wrapper">
                    <div className="back">
                        <Link to="/">
                            <i className="las la-arrow-left"></i> Back
                        </Link>
                    </div>
                    <div className="logo">
                        <img src={Logo} alt=""/>
                    </div>
                    <section className="content">
                        <div className="header">
                            <div className="title">
                                <span>Create</span> an account
                            </div>
                            <div className="desc">
                                Fill all fields so we can get some info about you.
                                <br/>We'll never send you spam
                            </div>
                        </div>
                        <div className="form">
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control"  placeholder="Name"/>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password" />
                                </div>
                                <button className="btn btn-theme">Sign up</button>
                            </form>
                        </div>
                        <div className="or">
                            <span>OR</span>
                        </div>
                        <div className="option">
                            <div className="title">
                                Sign In with your work email
                            </div>
                            <button className="btn sign-btn">
                                <img src={Google} alt=""/>
                                <span>Sign Up with Google</span>
                            </button>
                            <div className="switch-page">
                                Already have an account? <a href="">Sign In here</a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
