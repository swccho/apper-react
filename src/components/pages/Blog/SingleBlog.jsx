import React from 'react';
import Header from "../../shared/Header.jsx";
import Breadcrumb from "../../shared/Breadcrumb.jsx";
import Thumbnail from '../../../assets/images/blog_detail_main.png'
import BlogImg1 from '../../../assets/images/blog_sub_01.png'
import BlogImg2 from '../../../assets/images/blog_sub_02.png'
import QuoteIcon from '../../../assets/images/quote_icon.png'
import Person1 from '../../../assets/images/blog_d02.png'
import Person2 from '../../../assets/images/experts_02.png'
import Person3 from '../../../assets/images/experts_03.png'
import Blog from "../../shared/Blog.jsx";
import Footer from "../../shared/Footer.jsx";

const SingleBlog = () => {
    return (
        <div className="page single-blog">
            <Header/>
            <Breadcrumb/>
            <div className="wrapper">
                <div className="container">
                    <div className="blog-content">
                        <div className="blog-top">
                            <div className="publish-time">
                                <span>Review</span> | 45 min ago
                            </div>
                            <div className="title">Top rated app of the year!</div>
                            <div className="thumbnail">
                                <img src={Thumbnail} alt=""/>
                            </div>
                            <div className="desc">
                                Lorem Ipsum is simply dummy text of the printing and typesetting in dustry lorem Ipsum
                                has
                                been the industrys standard dummy text ev er since the 1500s, when an unknown printer
                                took a
                                galley of type and scrambled it to make a type specimen book. It has survived not only
                                five
                                centuries, but also the leap into electronic Lorem Ipsum is simply dummy text of the
                                printing and typesettingindustry lorem Ipsum has been the industrys standard dummy text
                                ever
                                since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                                a
                                type specimen book. It has survived.
                                <br/>
                                <br/>
                                Printing and typesetting in dustry lorem Ipsum has been the industrys standard dummy
                                text ev
                                er since the 1500s, when an unnown printer took a galley of type and scrambled it to
                                make a
                                type specimen book. It has survived not only five centuries, but also the leap into
                                electronic Lorem Ipsum is simply dummy text of the printing and typesettingindustry
                                lorem
                                Ipsum has been the industrys centuries, but also the leap into electronic.
                            </div>
                        </div>
                        <div className="we-best">
                            <div className="top">
                                <div className="title">Why we are best</div>
                                <div className="desc">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting in dustry lorem
                                    Ipsum
                                    has been the industrys standard dummy text ev er since the 1500s, when an unknown
                                    printer took a galley of type and scrambled it to make a type specimen book. It has
                                    survived not only five centuries, but also the leap into electronic.
                                </div>
                                <ul className="list">
                                    <li>
                                        <span><i className="lar la-check-circle"></i></span>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting in
                                    </li>
                                    <li>
                                        <span><i className="lar la-check-circle"></i></span>
                                        Dustry lorem Ipsum has been the industrys standard dummy text ev er since the
                                        when
                                    </li>
                                    <li>
                                        <span><i className="lar la-check-circle"></i></span>
                                        Unknown printer took a galley of type and scrambled it to make.
                                    </li>
                                    <li>
                                        <span><i className="lar la-check-circle"></i></span>
                                        Type specimen book. It has survived not only five centuries, but also the leap
                                        into electronic.
                                    </li>
                                    <li>
                                        <span><i className="lar la-check-circle"></i></span>
                                        Lorem Ipsum is simply dummy text of the printing.
                                    </li>
                                    <li>
                                        <span><i className="lar la-check-circle"></i></span>
                                        Dustry lorem Ipsum has been the industrys standard dummy text ev er since.
                                    </li>
                                    <li>
                                        <span><i className="lar la-check-circle"></i></span>
                                        Unknown printer took a galley of type and scrambled it to make.
                                    </li>
                                    <li>
                                        <span><i className="lar la-check-circle"></i></span>
                                        Type specimen book. It has survived not only.
                                    </li>
                                </ul>
                                <div className="blog-images">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="img">
                                                <img src={BlogImg1} alt=""/>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="img">
                                                <img src={BlogImg2} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="title">Why we are best</div>
                                <div className="desc">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting in dustry lorem
                                    Ipsum has been the industrys standard dummy text ev er since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic Lorem
                                    Ipsum is simply dummy text of the printing and typesettingindustry lorem Ipsum has
                                    been the industrys standard dummy text ever since the 1500s, when an unknown printer
                                    took a galley of type and scrambled it to make a type specimen book. It has
                                    survived.
                                </div>
                                <div className="quote">
                                    <div className="icon">
                                        <img src={QuoteIcon} alt=""/>
                                    </div>
                                    <div className="text">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting in dustry lorem
                                        Ipsum has been the industrys standard dummy.
                                    </div>
                                    <div className="author">
                                        <span>Mr. John Doe,</span> Apper Inc
                                    </div>
                                </div>
                                <div className="desc">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting in dustry lorem
                                    Ipsum has been the industrys standard dummy text ev er since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic industry.
                                </div>
                            </div>
                        </div>
                        <div className="writer">
                            <div className="info">
                                <div className="img">
                                    <img src={Person1} alt=""/>
                                </div>
                                <div>
                                    <div className="name">By: John Dow</div>
                                    <div className="date">July 25, 2022</div>
                                </div>
                            </div>
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
                        <div className="tags">
                            Tags: <span>app,rating,development</span>
                        </div>
                    </div>
                    <section className="comments">
                        <div className="title">3 Comments</div>
                        <div className="comment">
                            <div className="info">
                                <div className="img">
                                    <img src={Person1} alt=""/>
                                </div>
                                <div>
                                    <div className="time">30 min ago</div>
                                    <div className="name">Dolly Shell</div>
                                </div>
                            </div>
                            <div className="text">
                                Lorem Ipsum is simply dummy text of the printing and typesetting in dustry lorem Ipsum
                                has been the in dustrys standard dummy text ev er since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen.
                            </div>
                        </div>
                        <div className="comment reply">
                            <div className="info">
                                <div className="img">
                                    <img src={Person1} alt=""/>
                                </div>
                                <div>
                                    <div className="time">15 min ago</div>
                                    <div className="name">Devil Joe</div>
                                </div>
                            </div>
                            <div className="text">
                                Lorem Ipsum is simply dummy text of the printing and typesetting in dustry lorem Ipsum
                                has been the industrys standard dummy text ev er since the when.
                            </div>
                        </div>
                        <div className="comment">
                            <div className="info">
                                <div className="img">
                                    <img src={Person1} alt=""/>
                                </div>
                                <div>
                                    <div className="time">2 days ago</div>
                                    <div className="name">Sherly Shie</div>
                                </div>
                            </div>
                            <div className="text">
                                Lorem Ipsum is simply dummy text of the printing and typesetting in dustry lorem Ipsum
                                has been the in dustrys standard dummy text ev er since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen.
                            </div>
                        </div>
                    </section>
                    <section className="write-comment">
                        <div className="header">
                            <div className="title">
                                Leave a <span>comment</span>
                            </div>
                            <div className="desc">
                                Your email address will not be published. Required fields are marked *
                            </div>
                        </div>
                        <div className="body">
                            <div className="message-form">
                                <form>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="name" placeholder="Name*"/>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <input type="email" className="form-control" name="email" placeholder="Email*"/>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="phone" placeholder="Phone"/>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="website" placeholder="Website"/>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <textarea name="comment" className="form-control" placeholder="Comments"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-12 text-center">
                                            <button className="btn btn-theme">Post comments</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Blog />
            <Footer />
        </div>
    );
};

export default SingleBlog;
