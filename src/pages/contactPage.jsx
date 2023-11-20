import React from 'react';
import { Parallax, Background } from "react-parallax";
import Navbar from "../components/Navbar/Navbar";
import black from "../assets/images/black.jpg";
import bglite from "../assets/images/lightBG.jpeg";
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
const ContactPage = () => {
    return ( <React.Fragment>
    <Parallax bgImage={black}>
    <Navbar/>
    </Parallax>
                
    <Parallax bgImage={bglite}>
    <Contact/>
    </Parallax>
    <Footer/>

    </React.Fragment> );
}
 
export default ContactPage;