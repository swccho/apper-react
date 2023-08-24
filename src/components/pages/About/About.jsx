import React from 'react';
import Breadcrumb from "../../shared/Breadcrumb.jsx";
import Header from "../../shared/Header.jsx";
import Service from "./Service.jsx";
import AboutUs from "./AboutUs";
import CompanyStatus from "./CompanyStatus.jsx";
import Employee from "./Employee.jsx";
import Contact from "./Contact.jsx";
import Footer from "../../shared/Footer.jsx";
import Company from "../../shared/Company.jsx";

const About = () => {
    return (
        <>
            <Header />
            <Breadcrumb />
            <div className="page about">
                <AboutUs />
                <Service />
                <CompanyStatus />
                <Employee />
                <Contact />
                <Company />
            </div>
            <Footer />
        </>
    );
};

export default About;
