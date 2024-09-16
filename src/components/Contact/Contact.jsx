import React from "react";
import "./Contact.css";
import { about_stats } from '../../constants/data';

const Contact = () => {
  return (
    <div className='contact section-p'>
      <div className='contact-title'>
        <h3 className='text-gold'>
          Contact <span className='text-dark'>Us</span>
        </h3>
        <p className="contact-description">
          Get in touch with us for any queries or support. We're here to help!
        </p>
      </div>

      <div className='container'>
        <div className='work-content'>
          <div className="about-grid parent-container">
            <div className='about-content'>
              <div className="about-grid parent-container">
                {about_stats.map((about_stat, index) => (
                  <div className="about-item flex set-align grid" key={index}>
                    <div className="about-item-icon">
                      <img src={about_stat.image} alt="jearmy jewellers" />
                    </div>
                    <div className="about-item-text">
                      {about_stat.value === "+61 413 593 119" ? (
                        <a href="tel:+61413593119">
                          <h3 className="fs-24 ls-2">{about_stat.value}</h3>
                          <p className="text">{about_stat.title}</p>
                        </a>
                      ) : about_stat.value === "jearmyjwellery@gmail.com" ? (
                        <a href={`mailto:${about_stat.value}`}>
                          <h3 className="fs-24 ls-2">{about_stat.value}</h3>
                          <p className="text">{about_stat.title}</p>
                        </a>
                      ) : (
                        <>
                          <h3 className="fs-24 ls-2">{about_stat.value}</h3>
                          <p className="text">{about_stat.title}</p>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;