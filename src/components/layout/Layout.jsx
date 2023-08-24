import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../pages/Home/Home.jsx";
import About from "../pages/About/About.jsx";
import Contact from "../pages/Contact/Contact.jsx";
import Review from "../pages/Review/Review.jsx";
import Faq from "../pages/Faq/Faq.jsx";
import SignIn from "../pages/Auth/SignIn.jsx";
import SignUp from "../pages/Auth/SignUp";

const Layout = () => {
    return (
        <div className="layout">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/review" element={<Review />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                </Routes>
            </Router>
        </div>
    );
};

export default Layout;
