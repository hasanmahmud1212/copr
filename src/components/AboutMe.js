import React, { Component, Fragment } from 'react';
import aboutImg from '../assets/images/about/2.png'



class AboutMe extends Component {
    render() {
        return (
            <Fragment>
                <div id="about" className="heding-bg about-me-area pt-75 pb-45">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-6">
                                <div className="section-title mb-5">
                                    <h2 className='line mb-3'>About Me</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-xl-6">
                                <div className="about-img-box mb-30">
                                    <img src={aboutImg} alt="aboutImg" />
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="about__me mb-30">
                                    <h3>Rich Jastin Dean</h3>
                                    <h5>A <span className='theme-color'>Product Designer</span> based in <span className='theme-color'>Berlin</span></h5>
                                    <p>Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced frequently use unsatiable devonshire get.</p>
                                    <div className="short-desc mt-4 pt-4">
                                        <h3>Personal Information</h3>
                                        <ul>
                                            <li><span>Name :</span> Jastan Dean</li>
                                            <li><span>Age :</span> 25 Years</li>
                                            <li><span>Nationality :</span> German</li>
                                            <li><span>BOP :</span> Munich</li>
                                            <li><span>Email :</span> deanjas007@h.mail</li>
                                            <li><span>Phone :</span> +9900886</li>
                                            <li><span>Address :</span> 24-Hitech Park</li>
                                            <li><span>Language</span> Dutch, English</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default AboutMe
