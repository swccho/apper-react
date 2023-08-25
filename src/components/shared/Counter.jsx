import React from 'react';
import Followers from "../../assets/images/followers.png";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Countries from "../../assets/images/countries.png";
import Download from "../../assets/images/download.png";
import Reviews from "../../assets/images/reviews.png";

const Counter = () => {
    return (
        <div className="row">
            <div className="col-6">
                <div className="counters">
                    <div className="counter">
                        <div className="icon">
                            <img src={Download} alt=""/>
                        </div>
                        <div className="text">
                            <div className="title">
                                <CountUp end={17} redraw={true} duration={5} delay={.5}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                                <span>M+</span>
                            </div>
                            <div className="text">Download</div>
                        </div>
                    </div>
                    <div className="counter">
                        <div className="icon">
                            <img src={Reviews} alt=""/>
                        </div>
                        <div className="text">
                            <div className="title">
                                <CountUp end={2300} redraw={true} duration={3} delay={.5}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                                <span>M+</span>
                            </div>
                            <div className="text">Download</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="counters">
                    <div className="counter">
                        <div className="icon">
                            <img src={Followers} alt=""/>
                        </div>
                        <div className="text">
                            <div className="title">
                                <CountUp end={8} redraw={true} duration={3} delay={.5}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                                <span>M+</span>
                            </div>
                            <div className="text">Download</div>
                        </div>
                    </div>
                    <div className="counter">
                        <div className="icon">
                            <img src={Countries} alt=""/>
                        </div>
                        <div className="text">
                            <div className="title">
                                <CountUp end={150} redraw={true} duration={3} delay={.5}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                                <span>M+</span>
                            </div>
                            <div className="text">Download</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;
