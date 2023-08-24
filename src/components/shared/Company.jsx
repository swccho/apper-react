import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Envato from '../../assets/images/envato.png'
import Spoty from '../../assets/images/spoty.png'
import Slack from '../../assets/images/slack.png'
import Paypal from '../../assets/images/paypal.png'
import Shopboat from '../../assets/images/shopboat.png'

const Company = () => {
    return (
        <section className="company">
            <div className="container">
                <div className="header">
                    <div className="title">Trusted by <span>150+</span> companies</div>
                    <div className="desc">
                        Lorem Ipsum is simply dummy text of the printing and typese tting
                        <br/>
                        indus orem Ipsum has beenthe standard dummy.
                    </div>
                </div>
                <div className="body">
                    <div className="logos">
                        <Swiper
                            slidesPerView={5}
                            speed={1200}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Autoplay, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="logo">
                                    <img src={Envato} alt=""/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="logo">
                                    <img src={Slack} alt=""/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="logo">
                                    <img src={Spoty} alt=""/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="logo">
                                    <img src={Shopboat} alt=""/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="logo">
                                    <img src={Paypal} alt=""/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="logo">
                                    <img src={Envato} alt=""/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="logo">
                                    <img src={Slack} alt=""/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="logo">
                                    <img src={Spoty} alt=""/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="logo">
                                    <img src={Shopboat} alt=""/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="logo">
                                    <img src={Paypal} alt=""/>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Company;
