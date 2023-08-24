import React from 'react';
import Review1 from '../../../assets/images/review_01.png'

const ReviewItem = () => {
    return (

        <div className="col-4">
            <div className="item">
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
                <div className="title">App working smoothly fast</div>
                <div className="desc">
                    Lorem Ipsum is simply dummy text of the printing and typesetting ndus try lorem
                    Ipsum hasbeen the trysan dard dummy text here.
                </div>
                <div className="info">
                    <div className="img">
                        <img src={Review1} alt=""/>
                    </div>
                    <div className="details">
                        <div className="name">Shayana John</div>
                        <div className="role">Careative inc</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;
