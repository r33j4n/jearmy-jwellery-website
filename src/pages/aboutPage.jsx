import React from 'react';
import About from '../components/AboutInduvidual/About';
import { Parallax, Background } from "react-parallax";
import Navbar from "../components/Navbar/Navbar";
import bgImage from "../assets/images/lightBG.jpeg";
import black from "../assets/images/black.jpg";
import Footer from '../components/Footer/Footer';

const AboutUS = () => {
    return ( <React.Fragment>
    <Parallax bgImage={black}>
    <Navbar/>

    </Parallax>
    {/* <div className='navBg'>
    <Navbar/>
    </div> */}
    
    
          <Parallax bgImage={bgImage} strength={700}>

      <About/>

        {/* <div className="content">
          <div className="aboutx">
            <h1>Collections</h1>
            <p>
            Dive into a world of sophistication with our Jewel Collections, showcasing a harmonious blend of artistry and opulence.
            </p>
          </div>
        </div> */}
      </Parallax>
      <Footer/>
        {/* <About/> */}
    </React.Fragment> );
}
 
export default AboutUS;