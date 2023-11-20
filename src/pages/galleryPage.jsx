import React from 'react';
import Work from '../components/Gallery/Work';
import { Parallax, Background } from "react-parallax";
import Navbar from "../components/Navbar/Navbar";
import black from "../assets/images/black.jpg";

const Gallery = () => {
    return ( <React.Fragment>
    <Parallax bgImage={black}>
    <Navbar/>
    </Parallax>
        <Work/>
    </React.Fragment> );
}
 
export default Gallery;