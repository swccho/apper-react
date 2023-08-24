import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Bg from '../../../assets/images/avtar_testimonial.png'
import User1 from '../../../assets/images/testimonial_user1.png'
import User2 from '../../../assets/images/testimonial_user2.png'
import User3 from '../../../assets/images/testimonial_user3.png'

const Testimonial = () => {
    return (
        <section className="testimonial">
           <div className="container">
               <div className="header" data-aos="fade-up">
                   <div className="title">
                       What our <span>customer say</span>
                   </div>
                   <div className="desc">
                       Lorem Ipsum is simply dummy text of the printing and typese tting
                       <br/>indus orem Ipsum has beenthe standard dummy.
                   </div>
                   <div className="body">
                       <div className="reviews" style={{backgroundImage: `url(${Bg})`}}
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="300"
                            data-aos-offset="0">
                           <div className="row justify-content-center">
                               <div className="col-6">
                                   <Swiper
                                       slidesPerView={1}
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
                                           <div className="review-item">
                                               <div className="rating">
                                               <span>
                                                   <i className="las la-star"></i>
                                               </span>
                                                       <span>
                                                   <i className="las la-star"></i>
                                               </span>
                                                       <span>
                                                   <i className="las la-star"></i>
                                               </span>
                                                       <span>
                                                   <i className="las la-star"></i>
                                               </span>
                                                       <span>
                                                   <i className="las la-star"></i>
                                               </span>
                                               </div>
                                               <div className="review-text">
                                                   “ Lorem Ipsum is simply dummy text of the printing and typese tting us orem Ipsum has been lorem
                                                   beenthe standar dummy. ”
                                               </div>
                                               <div className="avatar">
                                                   <img src={User1} alt=""/>
                                               </div>
                                               <div className="name">Shanaya John</div>
                                               <div className="company">Careative inc</div>
                                           </div>
                                       </SwiperSlide>
                                       <SwiperSlide>
                                           <div className="review-item">
                                               <div className="rating">
                                           <span>
                                               <i className="las la-star"></i>
                                           </span>
                                                   <span>
                                               <i className="las la-star"></i>
                                           </span>
                                                   <span>
                                               <i className="las la-star"></i>
                                           </span>
                                                   <span>
                                               <i className="las la-star"></i>
                                           </span>
                                                   <span>
                                               <i className="las la-star"></i>
                                           </span>
                                               </div>
                                               <div className="review-text">
                                                   “ Lorem Ipsum is simply dummy text of the printing and typese tting us orem Ipsum has been lorem
                                                   beenthe standar dummy. ”
                                               </div>
                                               <div className="avatar">
                                                   <img src={User2} alt=""/>
                                               </div>
                                               <div className="name">Willium Den</div>
                                               <div className="company">Careative inc</div>
                                           </div>
                                       </SwiperSlide>
                                       <SwiperSlide>
                                           <div className="review-item">
                                               <div className="rating">
                                           <span>
                                               <i className="las la-star"></i>
                                           </span>
                                                   <span>
                                               <i className="las la-star"></i>
                                           </span>
                                                   <span>
                                               <i className="las la-star"></i>
                                           </span>
                                                   <span>
                                               <i className="las la-star"></i>
                                           </span>
                                                   <span>
                                               <i className="las la-star"></i>
                                           </span>
                                               </div>
                                               <div className="review-text">
                                                   “ Lorem Ipsum is simply dummy text of the printing and typese tting us orem Ipsum has been lorem
                                                   beenthe standar dummy. ”
                                               </div>
                                               <div className="avatar">
                                                   <img src={User3} alt=""/>
                                               </div>
                                               <div className="name">John Doe</div>
                                               <div className="company">Careative inc</div>
                                           </div>
                                       </SwiperSlide>
                                   </Swiper>
                               </div>
                           </div>
                       </div>
                       <div className="total-review">
                           <div className="rating">
                               <span>
                                   <i className="las la-star"></i>
                               </span>
                               <span>
                                   <i className="las la-star"></i>
                               </span>
                               <span>
                                   <i className="las la-star"></i>
                               </span>
                               <span>
                                   <i className="las la-star"></i>
                               </span>
                               <span>
                                   <i className="las la-star"></i>
                               </span>
                               <span className="number">5.0 / 5.0</span>
                           </div>
                           <div className="count">2578</div>
                           <a href="">total user reviews <i className="las la-arrow-right"></i></a>
                       </div>
                   </div>
               </div>
           </div>
        </section>
    );
};

export default Testimonial;
