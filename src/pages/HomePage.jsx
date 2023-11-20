import React from 'react';
import Header from '../components/Header/Header';
import Services from '../components/Services/Services';
import Work from '../components/Work/Work';
import About from '../components/About/About';
import Testimonials from '../components/Testimonials/Testimonials';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
const HomePage = () => {
    return ( <React.Fragment>
    <Header />
    <Services/>
    <Work/>
    <About/>
    <Testimonials/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </React.Fragment> );
}
 
export default HomePage;