import React from 'react';
import Header from "../../shared/Header.jsx";
import Breadcrumb from "../../shared/Breadcrumb.jsx";
import Message from '../../../assets/images/contact_message_icon.png'
import Mail from '../../../assets/images/mail_icon.png'
import Call from '../../../assets/images/call_icon.png'
import Location from '../../../assets/images/location_icon.png'
import Footer from "../../shared/Footer.jsx";

const Contact = () => {
    return (
        <>
            <Header/>
            <Breadcrumb/>
            <div className="page contact">
                <div className="container">
                    <section className="content">
                        <div className="row">
                            <div className="col-6">
                                <div className="contact-form">
                                    <div className="header">
                                        <div className="title">
                                            Leave a <span>message</span>
                                        </div>
                                        <div className="desc">Fill up form below, our team will get back soon</div>
                                    </div>
                                    <div className="body">
                                        <form>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Name"/>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Email"/>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Company Name"/>
                                            </div>
                                            <div className="form-group">
                                                <select name="" id="" className="form-control">
                                                    <option value="" selected={true}>Country</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Phone"/>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Website"/>
                                            </div>
                                            <div className="form-group">
                                                <textarea name="" className="form-control" cols="30" rows="10"
                                                          placeholder="Your message"></textarea>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="agree">
                                                    <input type="checkbox"/>
                                                    <span>I agree to receive emails, newsletters and promotional messages</span>
                                                </label>
                                            </div>
                                            <button className="btn btn-theme">send message</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="right">
                                    <div className="top">
                                        <div className="icon">
                                            <img src={Message} alt=""/>
                                        </div>
                                        <div className="header">
                                            <div className="title">
                                                Have any <span>question?</span>
                                            </div>
                                            <div className="desc">
                                                If you have any question about our product, service,
                                                <br/> payment or company, Visit our <a href="">FAQs page.</a>
                                            </div>
                                        </div>
                                        <button className="btn btn-theme">read faq</button>
                                    </div>
                                    <div className="bottom">
                                        <div className="details">
                                            <div className="icon">
                                                <img src={Mail} alt=""/>
                                            </div>
                                            <div className="info">
                                                <div className="label">Email Us</div>
                                                <div className="text">example@gmail.com</div>
                                            </div>
                                        </div>
                                        <div className="details">
                                            <div className="icon">
                                                <img src={Call} alt=""/>
                                            </div>
                                            <div className="info">
                                                <div className="label">Call Us</div>
                                                <div className="text">+1 (888) 553-46-11</div>
                                            </div>
                                        </div>
                                        <div className="details">
                                            <div className="icon">
                                                <img src={Location} alt=""/>
                                            </div>
                                            <div className="info">
                                                <div className="label">Visit Us</div>
                                                <div className="text">5687, Business Avenue, New York, USA 5687</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14671.150287536297!2d89.2187763!3d23.177951999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1692784004087!5m2!1sen!2sbd"
                            width="100%" height="450" allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
