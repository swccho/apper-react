import React from 'react';
import BlogImage from '../../../assets/images/blod-detail.png';
import {Link} from "react-router-dom";
import Header from "../../shared/Header.jsx";
import Breadcrumb from "../../shared/Breadcrumb.jsx";
import Footer from "../../shared/Footer.jsx";
import Blog1 from "../../../assets/images/story01.png";
import Blog2 from "../../../assets/images/story02.png";
import Blog3 from "../../../assets/images/story03.png";
import Pagination from "../../shared/Pagination.jsx";

const BlogList = () => {
    return (
        <div className="page blog-list">
            <Header />
            <Breadcrumb />
            <div className="container">
                <section className="top-rated-app">
                    <div className="row">
                        <div className="col-5">
                            <div className="left" data-aos="fade-up">
                                <img src={BlogImage} alt=""/>
                                <div className="publish-time">20 min ago</div>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="right" data-aos="fade-left">
                                <div className="label">editor choice</div>
                                <div className="title">Top rated app of the year!</div>
                                <div className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting
                                    in dustry lorem Ipsum has been the industrys standard dummy text ev er since the
                                    1500s, when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book. It has survived not only five centuries, but also the leap into
                                    electronic Lorem Ipsum is simply dummy text of the printing and typesetting.
                                </div>
                                <Link to="/blogs/1">read more</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="blogs">
                    {
                        Array.from(Array(4).keys()).map((elem, index) => (
                            <div className="row mb-4" data-aos="fade-up">
                                <div className="col-4">
                                    <div className="item">
                                        <div className="thumbnail">
                                            <img src={Blog1} alt=""/>
                                            <div className="publish-time">45 min ago</div>
                                        </div>
                                        <div className="content">
                                            <div className="title">Cool features added!</div>
                                            <div className="desc">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has.
                                            </div>
                                            <a href="">Read more</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="item">
                                        <div className="thumbnail">
                                            <img src={Blog2} alt=""/>
                                            <div className="publish-time">45 min ago</div>
                                        </div>
                                        <div className="content">
                                            <div className="title">Top rated app! Yupp.</div>
                                            <div className="desc">
                                                Simply dummy text of the printing and typesetting industry lorem Ipsum has Lorem Ipsum is.
                                            </div>
                                            <a href="">Read more</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="item">
                                        <div className="thumbnail">
                                            <img src={Blog3} alt=""/>
                                            <div className="publish-time">45 min ago</div>
                                        </div>
                                        <div className="content">
                                            <div className="title">Creative ideas on app.</div>
                                            <div className="desc">
                                                Printing and typesetting industry lorem Ipsum has Lorem simply dummy text of the.
                                            </div>
                                            <a href="">Read more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <Pagination />
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default BlogList;
