import React from 'react';
import Blog1 from '../../../assets/images/story01.png'
import Blog2 from '../../../assets/images/story02.png'
import Blog3 from '../../../assets/images/story03.png'

const Blog = () => {
    return (
        <section className="blog">
            <div className="container">
                <div className="header">
                    <div className="title">
                        Read latest <span>story</span>
                    </div>
                    <div className="desc">
                        Lorem Ipsum is simply dummy text of the printing and typese tting
                        <br/>indus orem Ipsum has beenthe standard dummy.
                    </div>
                </div>
                <div className="body">
                    <div className="row">
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
                </div>
            </div>
        </section>
    );
};

export default Blog;
