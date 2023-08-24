import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Bg from '../../assets/images/bread_crumb_bg.png'

const Breadcrumb = () => {
    const [title, setTitle] = useState('/');
    const [desc, setDesc] = useState('');
    useEffect(() =>{
        const path = window.location.pathname;
        if(path == '/about'){
            setTitle('About Us')
        }else if(path == '/contact'){
            setTitle('Contact Us')
        }else if(path == '/faq'){
            setTitle('Have questions? look here')
            setDesc('Lorem Ipsum is simply dummy text of the printing and typesetting')
        }else if(path == '/review'){
            setTitle('Review')
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
                        <span>About</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Breadcrumb;
