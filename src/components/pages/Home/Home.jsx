import React from 'react';
import Header from "../../shared/Header.jsx";
import Feature from "./Feature.jsx";
import About from "./About.jsx";
import ModernUI from "./ModernUI";
import Work from "./Work.jsx";
import Footer from "../../shared/Footer.jsx";
import Hero from "./Hero.jsx";
import Plan from "./Plan.jsx";
import Testimonial from "./Testimonial.jsx";
import Interface from "./Interface.jsx";
import FreeApp from "../../shared/FreeApp.jsx";
import FaqItem from "../../shared/FaqItem.jsx";
import Company from "../../shared/Company.jsx";
import Blog from "../../shared/Blog.jsx";

const Home = () => {
    return (
        <>
            <Header />
            <div className="page home">
                <Hero />
                <Feature />
                <About />
                <ModernUI />
                <Work />
                <Testimonial />
                <Company />
                <Plan />
                <FaqItem />
                <Interface />
                <FreeApp />
                <Blog />
            </div>
            <Footer />
        </>
    );
};

export default Home;
