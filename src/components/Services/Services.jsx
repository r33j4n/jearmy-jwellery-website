import React from 'react';
import './Services.css';
import { services } from '../../constants/data';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa'; // Add arrow icon for button

const Services = () => {
  return (
    <div className='services section-p' id="services">
      <div className='container'>
        <div className='services-content'>
          <div className='section-title'>
            <h3 className='text-brown'>
              Our <span className='text-dark'>Designs</span>
            </h3>
            <p className='text'>Elevate Your Style with Timeless Elegance</p>
          </div>

          <div className='services-list grid'>
            {services.map((service, index) => (
              <div className='services-item' key={index}>
                <div className='services-item-img'>
                  <img
                    src={service.image}
                    className='mx-auto'
                    alt={service.title}
                  />
                </div>
                <div className='services-item-text'>
                  <h4 className='fs-22 fw-6 op-08'>{service.title}</h4>
                  <p className='text mx-auto'>{service.paragraph}</p>
                  {/* Redirect button */}
                  <Link
                    to={`/jwellery/${service.title.toLowerCase()}`}
                    className='services-link'
                  >
                    <button className='btn-service'>
                      Explore {service.title} <FaArrowRight />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;