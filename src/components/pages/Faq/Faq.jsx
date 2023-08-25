import React from 'react';
import Header from "../../shared/Header.jsx";
import Breadcrumb from "../../shared/Breadcrumb.jsx";
import FaqItem from "../../shared/FaqItem.jsx";
import FreeApp from "../../shared/FreeApp.jsx";
import Footer from "../../shared/Footer.jsx";

const Faq = () => {
    return (
        <>
            <Header />
            <Breadcrumb />
            <FaqItem />
            <FreeApp />
            <Footer />
        </>
    );
};

export default Faq;
