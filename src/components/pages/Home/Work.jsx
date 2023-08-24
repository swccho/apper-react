import React from 'react';
import Step1 from '../../../assets/images/step1.png'
import Step2 from '../../../assets/images/functional.png'
import Step3 from '../../../assets/images/live-chat.png'

const Work = () => {
    return (
        <section className="work">
            <div className="container">
                <div className="content">
                    <div className="header" data-aos="fade-up">
                        <div className="title">How it works - 3 easy steps</div>
                        <div className="desc">
                            Lorem Ipsum is simply dummy text of the printing and typese tting
                            <br/> indus orem Ipsum has beenthe standard dummy.
                        </div>
                    </div>
                    <div className="body">
                        <div className="row">
                            <div className="col-4">
                               <div className="step">
                                   <div className="icon one" data-aos="fade-left">
                                       <img src={Step1} alt=""/>
                                   </div>
                                   <div data-aos="fade-right">
                                       <div className="title">Download app</div>
                                       <ul className="social-links">
                                           <li>
                                               <a href="">
                                                   <i className="lab la-android"></i>
                                               </a>
                                           </li>
                                           <li>
                                               <a href="">
                                                   <i className="lab la-apple"></i>
                                               </a>
                                           </li>
                                           <li>
                                               <a href="">
                                                   <i className="lab la-windows"></i>
                                               </a>
                                           </li>
                                       </ul>
                                       <div className="desc">Download App either for Windows, Mac or Android </div>
                                   </div>
                               </div>
                            </div>
                            <div className="col-4">
                               <div className="step">
                                   <div className="icon two" data-aos="fade-left">
                                       <img src={Step2} alt=""/>
                                   </div>
                                   <div data-aos="fade-right">
                                       <div className="title">Create account</div>
                                       <div className="slug">14 days free trial</div>
                                       <div className="desc">Download App either for Windows, Mac or Android </div>
                                   </div>
                               </div>
                            </div>
                            <div className="col-4">
                               <div className="step">
                                   <div className="icon three" data-aos="fade-left">
                                       <img src={Step3} alt=""/>
                                   </div>
                                   <div data-aos="fade-right">
                                       <div className="title">It’s done, enjoy the app</div>
                                       <div className="slug">Have any questions check our FAQs</div>
                                       <div className="desc">Download App either for Windows, Mac or Android </div>
                                   </div>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;
