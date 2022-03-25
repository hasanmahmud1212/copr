// import React, { Fragment } from 'react';
// import Logo from '../assets/images/logo/white-logo.png';
// import { FaBars, FaTimes } from 'react-icons/fa';


// class Navbar extends React.Component {

//     state = {
//         check: false,
//     }

//     handleClick = () => {
//         console.log('clicked hamburger');
//         this.setState(
//             (prevState) => !prevState.check)
//     }
//     render() {
//         return (
//             <Fragment>
//                 <div className="navbarArea">
//                     <div className="container-fluid px-5">
//                         <div className="row align-items-center">
//                             <div className="col-xl-2 col-lg-2 col-6">
//                                 <div className="navbar-brand">
//                                     <a href="/home"><img src={Logo} alt={Logo} /></a>
//                                 </div>
//                             </div>
//                             <div className="col-xl-7 col-lg-7 col-6 text-center">
//                                 <ul className={this.check ? 'navbar-list nav-active' : 'navbar-list'}>
//                                     <li><a href="/home">Home</a></li>
//                                     <li><a href="/home">About</a></li>
//                                     <li><a href="/home">Services</a></li>
//                                     <li><a href="/home">Portfolio</a></li>
//                                     <li><a href="/home">Testimonial</a></li>
//                                     <li><a href="/home">Contact</a></li>
//                                 </ul>
//                                 <div className="hambuger text-end" onClick={this.handleClick}>
//                                     {this.check ? (<FaTimes size={20} style={{ color: '#FF0000' }} />) : (<FaBars size={20} style={{ color: '#FF0000' }} />)}
//                                 </div>
//                             </div>
//                             <div className="col-lg-3 text-md-end d-none d-lg-block">
//                                 <button className="theme_btn"><i className="fa fa-download"></i> Download</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </Fragment>
//         )
//     }
// }

// export default Navbar


import React, { Fragment, useState } from 'react'
import Logo from '../assets/images/logo/white-logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll'



export default function Navbar() {
    const [click, setClick] = useState(false);
    const [colors, setColors] = useState(false);
    const handleClick = () => {
        setClick(!click)
    }


    const changeColor = () => {
        console.log(window.scrollY);
        if (window.scrollY >= 90) {
            setColors(true);
        } else {
            setColors(false);
        }
    };
    window.addEventListener('scroll', changeColor);


    return (
        <Fragment>
            <div className={colors ? 'navbarArea nav-bg' : 'navbarArea'}>
                <div className="container-fluid px-5">
                    <div className="row align-items-center">
                        <div className="col-xl-2 col-lg-2 col-md-6 col-6">
                            <div className="navbar-brand">
                                <Link to="hero" spy={true} smooth={true} offset={50} duration={500}><img src={Logo} alt={Logo} /></Link>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-6 col-6 text-center">
                            <ul className={click ? 'navbar-list nav-active' : 'navbar-list'}>
                                <li><Link to="hero" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
                                <li><Link to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
                                <li><Link to="services" spy={true} smooth={true} offset={50} duration={500}>Services</Link></li>
                                <li><Link to="work" spy={true} smooth={true} offset={50} duration={500}>Portfolio</Link></li>
                                <li><Link to="testimonial" spy={true} smooth={true} offset={50} duration={500}>Testimonial</Link></li>
                                <li><Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></li>
                            </ul>
                            <div className="hambuger text-end" onClick={handleClick}>
                                {click ? (<FaTimes size={20} style={{ color: '#FF0000' }} />) : (<FaBars size={20} style={{ color: '#FF0000' }} />)}
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 text-md-end d-none d-lg-block">
                            <button className="theme_btn"><i className="fa fa-download"></i> Download</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
