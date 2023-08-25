import React from 'react';
import AboutMain from "../../../assets/images/about_main.png";
import Counter from "../../shared/Counter.jsx";

const CompanyStatus = () => {
    return (
        <section className="company-status">

            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <div className="left">
                            <img src={AboutMain} alt=""/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="right">
                            <div className="header">
                                <div className="title" data-aos="fade-up">
                                    <span>We focus on quality,</span> never <br/> focus on quantity
                                </div>
                                <div className="desc" data-aos="fade-up">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem
                                    Ipsum has been the industrys standard dummy text ever since the when an unknown
                                    printer took a galley of type and. Lorem ipsum dolor sit amet.
                                </div>
                            </div>
                            <div className="body">
                                <Counter />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyStatus;
