import React from 'react';
import Header from "../../shared/Header.jsx";
import FreeApp from "../../shared/FreeApp.jsx";
import ReviewItem from "./ReviewItem.jsx";
import Breadcrumb from "../../shared/Breadcrumb.jsx";
import Footer from "../../shared/Footer.jsx";

const Review = () => {
    return (
        <>
            <Header/>
            <Breadcrumb />
            <div className="page review">
                <div className="container">
                    <section className="review-items">
                        <div className="row">
                            {
                                Array.from(Array(10).keys()).map((elem, index) => <ReviewItem key={index} />)
                            }
                        </div>
                    </section>
                    <FreeApp />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Review;
