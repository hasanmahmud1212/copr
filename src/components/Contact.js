import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <Fragment>
            <div id="contact" className="heding-bg contact-form pt-75 pb-45">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="section-title">
                                <div className="section-title mb-5">
                                    <h2 className='line mb-3'>Get In Touch</h2>
                                    <p className='pr-100'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-9">
                            <form action="#" className='form-box' onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-xl-6 mb-30">
                                        <input type="text" placeholder='Full Name' required />
                                    </div>
                                    <div className="col-xl-6 mb-30">
                                        <input type="text" placeholder='Email' required />
                                    </div>
                                    <div className="col-xl-12 mb-30">
                                        <input type="text" placeholder='Subject' required />
                                    </div>
                                    <div className="col-xl-12 mb-30">
                                        <textarea name="message" id="message" cols="30" rows="10" placeholder='Write Message. ...'></textarea>
                                    </div>
                                </div>
                                <button className='theme_btn' type='submit'>Send Message</button>
                            </form>
                        </div>
                        <div className="col-xl-3">
                            <ul className="addres-wrapper">
                                <li>
                                    <div className="contact-box">
                                        <h3>Address</h3>
                                        <p>38 Green Hill St. New York,
                                            NY 10025, USA</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="contact-box">
                                        <h3>Email</h3>
                                        <p>yourmailnamea@mail.com</p>
                                        <p>yourmailnamea@mail.com</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="contact-box">
                                        <h3>Phone</h3>
                                        <p>+001234567</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row align-items-center pt-75">
                        <div className="col-lg-6">
                            <div className="copy-right">
                                <h5>Copyright@ 2019 All Rights Reserved</h5>
                            </div>
                        </div>
                        <div className="col-lg-6 text-md-end">
                            <div className="dev__social">
                                <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                                <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}


