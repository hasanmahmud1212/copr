import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './assets/css/all.min.css'
import 'animate.css/animate.css'
import "./assets/css/main.css";
import "./assets/css/spacing.css";
// import Aos from 'aos'
import 'aos/dist/aos.css';
import SliderArea from './components/SliderArea';
import AboutMe from './components/AboutMe'
import Navbar from './components/Navbar';
import Testimonial from './components/Testimonial'
import Counter from './components/Counter'
// import Services from './components/Services';
import Work from './components/Work'
import Contact from './components/Contact';
import ScrollTop from './components/ScrollToTop'


class App extends React.Component {

  render() {
    return (
      <div className="App" >
        <Navbar />
        <SliderArea />
        <AboutMe />
        <Work />
        <Testimonial />
        <Counter />
        {/* <Services /> */}
        <Contact />
        <ScrollTop />
      </div>
    );
  }
}

export default App;
