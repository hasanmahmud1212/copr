import React, { Component, Fragment } from 'react';
import imgOne from '../assets/images/icon/icon-1.png'
import imgTwo from '../assets/images/icon/icon-2.png'
import imgThree from '../assets/images/icon/icon-3.png'
import imgFour from '../assets/images/icon/icon-4.png'
import imgFive from '../assets/images/icon/icon-5.png'
import imgSix from '../assets/images/icon/icon-6.png'


export default function Work() {

    return (
        <Fragment>
            <div id="work" className="heding-bg works-area pt-75 pb-45">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6">
                            <div className="section-title mb-5">
                                <h2 className='line mb-3'>My Works</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row grid"
                        data-isotope='{ "itemSelector": ".grid-item", "masonry": { "columnWidth": 200 } }'>
                        <div className="col-lg-4 grid-item">
                            <img src={imgOne} alt={imgOne} />
                            <p>It's difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s, although McClintock says he remembers coming across the lorem ipsum passage in a book of old metal type samples. So far he hasn't relocated where he once saw the passage, but the popularity of Cicero in the 15th century supports the theory that the filler text has been used for centuries.</p>
                        </div>
                        <div className="col-lg-4 grid-item">
                            <img src={imgTwo} alt={imgTwo} />
                            <p>It's difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s, although McClintock says he remembers coming across the lorem ipsum passage in a book of old metal type samples. So far he hasn't relocated where he once saw the passage, but the popularity of Cicero in the 15th century supports the theory that the filler text has been used for centuries.</p>
                        </div>
                        <div className="col-lg-4 grid-item">
                            <img src={imgThree} alt={imgThree} />
                            <p>It's difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s, although McClintock says he remembers coming across the lorem ipsum passage in a book of old metal type samples. So far he hasn't relocated where he once saw the passage, but the popularity of Cicero in the 15th century supports the theory that the filler text has been used for centuries.</p>
                        </div>
                        <div className="col-lg-4 grid-item">
                            <img src={imgFour} alt={imgFour} />
                            <p>It's difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s, although McClintock says he remembers coming across the lorem ipsum passage in a book of old metal type samples. So far he hasn't relocated where he once saw the passage, but the popularity of Cicero in the 15th century supports the theory that the filler text has been used for centuries.</p>
                        </div>
                        <div className="col-lg-4 grid-item">
                            <img src={imgFour} alt={imgFive} />
                            <p>It's difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s, although McClintock says he remembers coming across the lorem ipsum passage in a book of old metal type samples. So far he hasn't relocated where he once saw the passage, but the popularity of Cicero in the 15th century supports the theory that the filler text has been used for centuries.</p>
                        </div>
                        <div className="col-lg-4 grid-item">
                            <img src={imgFour} alt={imgSix} />
                            <p>It's difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s, although McClintock says he remembers coming across the lorem ipsum passage in a book of old metal type samples. So far he hasn't relocated where he once saw the passage, but the popularity of Cicero in the 15th century supports the theory that the filler text has been used for centuries.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}


