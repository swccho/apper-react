import React from 'react';

const FaqItem = () => {
    return (
        <section className="shared faq">
            <div className="container">
                <div className="header">
                    <div className="title">
                        <span>FAQ</span> - Frequently Asked Questions
                    </div>
                    <div className="desc">
                        Lorem Ipsum is simply dummy text of the printing and typese tting
                        <br/>indus orem Ipsum has beenthe standard dummy.
                    </div>
                </div>
                <div className="body">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    How can i pay?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show"
                                 aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem
                                    Ipsum has. been the industrys standard dummy text ever since the when an unknown
                                    printer took a galley of type and scrambled it to make a type specimen book. It has
                                    survived not only five cen turies but also the leap into electronic typesetting,
                                    remaining essentially unchanged.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    How to setup account?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                 data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem
                                    Ipsum has. been the industrys standard dummy text ever since the when an unknown
                                    printer took a galley of type and scrambled it to make a type specimen book. It has
                                    survived not only five cen turies but also the leap into electronic typesetting,
                                    remaining essentially unchanged.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                    What is process to get refund?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse"
                                 aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem
                                    Ipsum has. been the industrys standard dummy text ever since the when an unknown
                                    printer took a galley of type and scrambled it to make a type specimen book. It has
                                    survived not only five cen turies but also the leap into electronic typesetting,
                                    remaining essentially unchanged.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqItem;
