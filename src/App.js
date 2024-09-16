import React, { useEffect } from 'react';
import './App.css';
import './assets/js/script';
import Header from './components/Header/Header';
import Newsletter from './components/Newsletter/Newsletter';
import Services from './components/Services/Services';
import Work from './components/Work/Work';
import About from './components/About/About';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { Element, scroller } from 'react-scroll';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a query parameter indicating where to scroll
    const query = new URLSearchParams(location.search);
    const scrollTo = query.get('scrollTo');

    if (scrollTo) {
      // Scroll to the element with the specified name
      scroller.scrollTo(scrollTo, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -90, // Adjust offset based on your navbar height
      });
    }
  }, [location]);

  return (
    <div className="App" style={{ paddingTop: '90px' }}> {/* Adjust this value based on your navbar height */}
      <Helmet>
        {/* Other meta tags */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "JewelryStore",
              "name": "Jearmy Jewellery",
              "image": "https://www.jearmyjwellery.com/wp-content/uploads/2023/06/vogue-logo-header-1.png",
              "@id": "https://www.jearmyjwellery.com",
              "url": "https://www.jearmyjwellery.com",
              "telephone": "+61413593119",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "106A Pendle Way",
                "addressLocality": "Pendle Hill",
                "addressRegion": "NSW",
                "postalCode": "2145",
                "addressCountry": "AU"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -33.8068,
                "longitude": 150.9558
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "10:00",
                "closes": "19:00"
              },
              "sameAs": [
                "https://www.facebook.com/jearmyjewellery",
                "https://www.instagram.com/jearmyjewellery"
              ]
            }
          `}
        </script>
      </Helmet>
      <Header />
      <Element name="allcollection">
        <Services />
      </Element>
      <Element name="gallery">
        <Work />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Testimonials />
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
}

export default App;