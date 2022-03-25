
import React, { Component, Fragment } from 'react';
import Typed from './Typed'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'

class SliderArea extends Component {
    render() {
        return (
            <Fragment>
                <div id="hero" className="slider-area slider-one">
                    <div className="slider-img"></div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-6">
                                <div className="slider__content">
                                    <h3 className='sub-title mb-5'>Hello,</h3>
                                    <h1 className='main-title mb-4'>I am <span className='highlight-text'>Jastin Dean.</span></h1>
                                    <h4 className='mb-2'>A <Typed /></h4>
                                    <div className="border-line my-4"></div>
                                    <p className='text-white mb-4'>Uneasy barton seeing remark happen his has. Am possible offering at contempt mr dis tance stronger an. Attachment excellence announcing or reasonable am on if indulgence. Exeter talked he unable do.</p>
                                </div>
                                <div className="dev__social mt-2">
                                    <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                                    <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                                    <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                                    <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default SliderArea
