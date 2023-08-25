import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import Home from "../pages/Home/Home.jsx";
import About from "../pages/About/About.jsx";
import Contact from "../pages/Contact/Contact.jsx";
import Review from "../pages/Review/Review.jsx";
import Faq from "../pages/Faq/Faq.jsx";
import SignIn from "../pages/Auth/SignIn.jsx";
import SignUp from "../pages/Auth/SignUp";
import SingleBlog from "../pages/Blog/SingleBlog.jsx";
import BlogList from "../pages/Blog/BlogList.jsx";
import {useEffect, useLayoutEffect, useState} from "react";
import GoTop from "../../assets/images/go_top.png";

/*scroll to top when route change*/
const Wrapper = ({children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
}
const Layout = () => {
    const [topIcon, setTopIcon] = useState(false);

    useEffect(() =>{
        window.addEventListener("scroll", (event) => {
            if (window.pageYOffset > 100) {
                setTopIcon(true)
            } else {
                setTopIcon(false)
            }
        });

        window.scrollTo(0, 0)
    }, [])

    /*scroll to top on click top button*/
    const scrollTop = ()=>{
        window.scrollTo(0, 0)
    }

    return (
        <div className="layout">
            <Router>
                <Wrapper>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/review" element={<Review />} />
                        <Route path="/faq" element={<Faq />} />
                        <Route path="/sign-in" element={<SignIn />} />
                        <Route path="/sign-up" element={<SignUp />} />
                        <Route path="/blogs/:id" element={<SingleBlog />} />
                        <Route path="/blogs" element={<BlogList />} />
                    </Routes>
                </Wrapper>
            </Router>
            <a className={`go-top ${topIcon && 'active'}`} onClick={scrollTop}>
                <img src={GoTop} alt=""/>
            </a>
        </div>
    );
};

export default Layout;
