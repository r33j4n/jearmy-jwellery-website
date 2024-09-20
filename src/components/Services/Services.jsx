import React from 'react';
import './Services.css';
import { services } from '../../constants/data';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa'; // Add arrow icon for button
import { Helmet } from 'react-helmet'; // For SEO meta tags

const Services = () => {
  return (
    <div className='services section-p' id="services">
      <Helmet>
        <title>Our Jewellery Designs | Chains, Rings, Necklaces & More</title>
        <meta
          name="description"
          content="Explore our stunning collection of gold jewellery designs including chains, rings, necklaces, bangles, bracelets, and more at Jearmy Jewellery."
        />
        <meta
          name="keywords"
          content="jewellery, chains, rings, necklaces, bracelets, bangles, earrings, thaali, harams, gold jewellery"
        />
      </Helmet>

      <div className='container'>
        <div className='services-content'>
          <div className='section-title'>
            <h2 className='text-brown'>
              Our <span className='text-dark'>Designs</span>
            </h2>
            <p className='text'>Elevate Your Style with Timeless Elegance</p>
          </div>

          <section className='services-list grid'>
            {services.map((service, index) => (
              <article className='services-item' key={index}>
                <div className='services-item-img'>
                  <img
                    src={service.image}
                    className='mx-auto'
                    alt={`Discover our ${service.title} collection`}
                    loading="lazy" // Lazy loading for performance
                  />
                </div>
                <div className='services-item-text'>
                  <h3 className='fs-22 fw-6 op-08'>{service.title}</h3>
                  <p className='text mx-auto'>{service.paragraph}</p>
                  {/* Redirect button */}
                  <Link
                    to={`/jwellery/${service.title.toLowerCase()}`}
                    className='services-link'
                    aria-label={`Explore our ${service.title} collection`}
                  >
                    <button className='btn-service'>
                      Explore {service.title} <FaArrowRight />
                    </button>
                  </Link>
                </div>
              </article>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Services;