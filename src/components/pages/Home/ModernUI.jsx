import React from 'react';
import Icon from '../../../assets/images/right_icon.png'
import Modern1 from '../../../assets/images/modern01.png'
import Modern2 from '../../../assets/images/modern02.png'
import Modern3 from '../../../assets/images/modern03.png'
import Secure from '../../../assets/images/secure_data.png'

const ModernUi = () => {
    return (
        <section className="modern-ui">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header">
                            <div className="title">
                                Beautiful design with <br/> <span>modern UI</span>
                            </div>
                            <div className="desc">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum
                                has been the industrys standard dummy text ever since the when an unknown printer took a
                                galley of type and.
                            </div>
                        </div>
                        <div className="body">
                            <div className="list-item">
                                <div className="icon">
                                    <img src={Icon} alt=""/>
                                </div>
                                <div className="text">
                                    <div className="title">Carefully designed</div>
                                    <div className="desc">Lorem Ipsum is simply dummy text of the printing and type
                                        esetting industry lorem Ipsum has.
                                    </div>
                                </div>
                            </div>
                            <div className="list-item">
                                <div className="icon">
                                    <img src={Icon} alt=""/>
                                </div>
                                <div className="text">
                                    <div className="title">Seamless Sync</div>
                                    <div className="desc">Simply dummy text of the printing and typesetting inustry
                                        lorem Ipsum has Lorem dollar summit.
                                    </div>
                                </div>
                            </div>
                            <div className="list-item">
                                <div className="icon">
                                    <img src={Icon} alt=""/>
                                </div>
                                <div className="text">
                                    <div className="title">Access Drive</div>
                                    <div className="desc">Printing and typesetting industry lorem Ipsum has been the
                                        industrys standard dummy text of type setting.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="box">
                            <div className="left">
                                <img src={Modern1} alt=""/>
                            </div>
                            <div className="right">
                                <div className="img-1">
                                    <img src={Secure} alt=""/>
                                </div>
                                <div className="img-2">
                                    <img src={Modern2} alt=""/>
                                </div>
                                <div className="img-3">
                                    <img src={Modern3} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ModernUi;
