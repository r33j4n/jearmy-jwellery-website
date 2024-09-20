import React from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';
import { Link as ScrollLink } from 'react-scroll'; // Import react-scroll Link
import { Helmet } from 'react-helmet'; // Import Helmet for meta tags

const Header = () => {
  return (
    <header className='header flex flex-col' id="header">
      <Helmet>
        <title>Jearmy Jewellery | High-Class Craftsmanship in Sydney</title>
        <meta 
          name="description" 
          content="Explore Jearmy Jewellery's high-class craftsmanship, offering you the finest traditional and contemporary jewellery in Sydney. Discover our collections." 
        />
        <meta 
          name="keywords" 
          content="Jearmy Jewellery, Jewellery Sydney, traditional jewellery, gold jewellery, high-class craftsmanship, wedding jewellery, luxury jewellery" 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.jearmyjewellery.com" />
      </Helmet>

      <Navbar />

      <div className='container flex'>
        <section className='header-content'>
          <h2 className='text-uppercase text-white op-07 fw-6 ls-2'>Timeless Craftsmanship</h2>
          <h1 className='text-white fw-6 header-title'>
            Jearmy <span className='text-brown'>Jewellery</span> PTY <span className='text-brown'>LTD</span>
          </h1>
          <p className='text-white fw-2 header-title'>
            High-class craftsmanship which you have always deserved.
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
        </section>
      </div>
    </header>
  );
};

export default Header;