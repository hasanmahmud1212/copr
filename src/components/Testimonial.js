import React, { Component, Fragment } from 'react'
import OwlCarousel from 'react-owl-carousel';
import testOne from '../assets/images/testimonial/t1.jpg'
import testTwo from '../assets/images/testimonial/t2.jpg'
import testThree from '../assets/images/testimonial/t3.jpg'

const settings = {
    dots: false,
    nav: true,
    navText: ['<i class="fal fa-long-arrow-left"></i>', '<i class="fal fa-long-arrow-right"></i>'],
    loop: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    items: 1,
};
class Testimonial extends Component {

    render() {
        return (
            <Fragment>
                <div id="testimonial" className="heding-bg testimonial-area pt-75 pb-75">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-6">
                                <div className="section-title mb-5">
                                    <h2 className='line mb-3'>Our Clients Saying</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-xl-10 owl-slide">
                                    <OwlCarousel {...settings}>
                                        <div className="item">
                                            <div className="item-box d-md-flex align-items-center">
                                                <div className="left-content">
                                                    <img className='client-img' src={testOne} alt={testOne} />
                                                </div>
                                                <div className="right-content">
                                                    <p className='text mb-30'>Barton did feebly change man she afford square add. Want eyes by neat so just must. Past draw tall up face show rent oh mr. Required is debating extended wondered as do. </p>
                                                    <h4>Hasan Mahmud</h4>
                                                    <h5>Frontend Developer</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="item-box d-md-flex align-items-center">
                                                <div className="left-content">
                                                    <img className='client-img' src={testTwo} alt={testTwo} />
                                                </div>
                                                <div className="right-content">
                                                    <p className='text mb-30'>Barton did feebly change man she afford square add. Want eyes by neat so just must. Past draw tall up face show rent oh mr. Required is debating extended wondered as do. </p>
                                                    <h4>Hamina Hasan</h4>
                                                    <h5>UI/Ux Designer</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="item-box d-md-flex align-items-center">
                                                <div className="left-content">
                                                    <img className='client-img' src={testThree} alt={testThree} />
                                                </div>
                                                <div className="right-content">
                                                    <p className='text mb-30'>Barton did feebly change man she afford square add. Want eyes by neat so just must. Past draw tall up face show rent oh mr. Required is debating extended wondered as do. </p>
                                                    <h4>Anisa Talukder</h4>
                                                    <h5>Content Writer</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </OwlCarousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Testimonial
