import React from 'react';
import "./Header.css";
import Navbar from '../Navbar/Navbar';
import { Link as ScrollLink } from 'react-scroll'; // Import react-scroll Link

const Header = () => {
  return (
    <div className='header flex flex-col' id="header">
      <Navbar />

      <div className='container flex'>
        <div className='header-content'>
          <h2 className='text-uppercase text-white op-07 fw-6 ls-2'></h2>
          <h1 className='text-white fw-6 header-title'>
            Jearmy<span className='text-brown'>Jwellery</span>
          </h1>
          <p className='text-white fw-2 header-title'>
            Highclass craftsmanship which you have always deserved
          </p>
          <div className='btn-groups flex'>
            <ScrollLink
              to="allcollection" // The name of the Element you want to scroll to
              spy={true}
              smooth={true}
              offset={-70} // Adjust based on your navbar height
              duration={500}
              className="btn-item bg-brown fw-4 ls-2"
            >
              See Collections
            </ScrollLink>
            <ScrollLink
              to="contact" // The name of the Element you want to scroll to
              spy={true}
              smooth={true}
              offset={-70} // Adjust based on your navbar height
              duration={500}
              className="btn-item bg-dark fw-4 ls-2"
            >
              Contact Us
            </ScrollLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;