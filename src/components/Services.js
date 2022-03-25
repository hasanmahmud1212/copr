import React, { Component, Fragment } from 'react'
import ReactWOW from 'react-wow'
import iconOne from '../assets/images/icon/icon-1.png'
import iconTwo from '../assets/images/icon/icon-2.png'
import iconThree from '../assets/images/icon/icon-3.png'
import iconFour from '../assets/images/icon/icon-4.png'
import iconFive from '../assets/images/icon/icon-5.png'
import iconSix from '../assets/images/icon/icon-6.png'

class Services extends Component {
    render() {
        return (
            <Fragment>
                <div className="heding-bg services-area pt-75 pb-45">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-6">
                                <div className="section-title mb-5">
                                    <h2 className='line mb-3'>Services</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4">
                                <ReactWOW animation='fadeIn'>
                                    <div className="services__box mb-30">
                                        <img className='icon' src={iconOne} alt={iconOne} />
                                        <h5>Ui/Ux Design</h5>
                                        <p>Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke.</p>
                                    </div>
                                </ReactWOW>
                            </div>
                            <div className="col-xl-4">
                                <div className="services__box mb-30">
                                    <img className='icon' src={iconTwo} alt={iconOne} />
                                    <h5>Ui/Ux Design</h5>
                                    <p>Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke.</p>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="services__box mb-30">
                                    <img className='icon' src={iconThree} alt={iconOne} />
                                    <h5>Branding</h5>
                                    <p>Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke.</p>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="services__box mb-30">
                                    <img className='icon' src={iconFour} alt={iconOne} />
                                    <h5>Marketing</h5>
                                    <p>Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke.</p>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="services__box mb-30">
                                    <img className='icon' src={iconFive} alt={iconOne} />
                                    <h5>Development</h5>
                                    <p>Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke.</p>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="services__box mb-30">
                                    <img className='icon' src={iconSix} alt={iconOne} />
                                    <h5>Visual Design</h5>
                                    <p>Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default Services
