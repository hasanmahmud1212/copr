import React, { Component, Fragment } from 'react'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'


class Counter extends Component {

    render() {
        return (
            <Fragment>
                <div id="counter" className="black-grey counter-area pt-65 pb-45">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="counters text-center mb-30">
                                    <h1 className='counter mb-20'>
                                        <CountUp start={0} end={10000} duration={1}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start}>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp></h1>
                                    <div className="bottom-line mb-20"></div>
                                    <h4 className='h4'>Total clients</h4>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="counters text-center mb-30">
                                    <h1 className='counter mb-20'>
                                        <CountUp start={0} end={2020} duration={1}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start}>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp></h1>
                                    <div className="bottom-line mb-20"></div>
                                    <h4 className='h4'>Total project</h4>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="counters text-center mb-30">
                                    <h1 className='counter mb-20'>
                                        <CountUp start={0} end={100} duration={1}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start}>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                    </h1>
                                    <div className="bottom-line mb-20"></div>
                                    <h4 className='h4'>Active Project</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="section-title text-center mb-30 pt-75">
                                    <h2 className='cta-title mb-30'>Have You Any Project?</h2>
                                    <p className='pl-30 pr-30 mb-50'>They why quit gay cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position.</p>
                                    <a href="#contact" className='theme_btn'>Hire Me</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Counter
