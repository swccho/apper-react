import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import Bg from '../../assets/images/bread_crumb_bg.png'
import Shape1 from '../../assets/images/banner-shape1.png'
import Shape2 from '../../assets/images/banner-shape2.png'
import Shape3 from '../../assets/images/banner-shape3.png'

const Breadcrumb = () => {
    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [desc, setDesc] = useState('');
    const path = window.location.pathname;
    useEffect(() =>{
        if(path == '/about'){
            setTitle('About Us')
            setSlug('About')
        }else if(path == '/contact'){
            setTitle('Contact Us')
            setDesc('If you have an query, please get in touch with us, we will revert back quickly.')
            setSlug('Contact')
        }else if(path == '/faq'){
            setTitle('Have questions? look here')
            setSlug('Faq')
            setDesc('Lorem Ipsum is simply dummy text of the printing and typesetting')
        }else if(path == '/review'){
            setTitle('Review')
            setSlug('Review')
        }else if(path == `/blogs/${id}`){
            setTitle('Blog details')
            setSlug('Blog single')
        }else if(path == `/blogs`){
            setTitle('Latest blog post')
            setSlug('Blog list')
        }
    },[title])
    return (
        <div className="shared bread-crumb" style={{backgroundImage: `url(${Bg})`}}>
            <div>
                <div className="title">{title}</div>
                {
                    desc && <div className="desc mb-3">{desc}</div>
                }
                <ul className="menu">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <span>
                            >>
                        </span>
                    </li>
                    <li>
                        <span>{slug}</span>
                    </li>
                </ul>
                {
                    path === '/blogs' && <div className="search">
                        <form>
                            <div className="form-group">
                                <input type="text" placeholder="Search here" className="form-control" />
                                <button className="btn" type="submit">
                                    <i className="las la-search"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                }
            </div>
            <div className="shape shape-1">
                <img src={Shape1} alt=""/>
            </div>
            <div className="shape shape-2">
                <img src={Shape2} alt=""/>
            </div>
            <div className="shape shape-3">
                <img src={Shape3} alt=""/>
            </div>
        </div>
    );
};

export default Breadcrumb;
