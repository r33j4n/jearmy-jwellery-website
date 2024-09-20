import React from "react";
import "./Contact.css";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaMapMarker,
  FaEnvelope,
  FaClock,
  FaTiktok
} from "react-icons/fa"; // Importing TikTok icon
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div className="contact section-p">
      <Helmet>
        <title>Contact Jearmy Jewellery | Traditional Jewellery in Sydney</title>
        <meta
          name="description"
          content="Get in touch with Jearmy Jewellery in Sydney for any queries or support. Follow us on Facebook, Instagram, TikTok, or contact us through WhatsApp, email, or phone."
        />
        <meta
          name="keywords"
          content="Contact Jearmy Jewellery, Sydney jewellery store, WhatsApp contact, call Jearmy Jewellery, follow on Instagram, Facebook, TikTok"
        />
        <link rel="canonical" href="https://www.jearmyjwellery.com/contact" />
      </Helmet>

      <div className="contact-title">
        <h3 className="text-gold">
          Contact <span className="text-dark">Us</span>
        </h3>
        <p className="contact-description">
          Get in touch with us for any queries or support. We're here to help!
        </p>
      </div>

      <div className="container">
        <div className="work-content">
          <div className="about-grid parent-container">
            <div className="about-content">
              <div className="about-grid parent-container">

                {/* Address Section */}
                <section className="about-item flex set-align grid">
                  <div className="about-item-icon">
                    <FaMapMarker size={50} color="#4267B2" alt="Map Icon" />
                  </div>
                  <div className="about-item-text">
                    <h3 className="fs-24 ls-2">106A Pendle Way, Pendle Hill, NSW 2145, Australia</h3>
                    <a
                      href="https://maps.app.goo.gl/3Z3a8CzM5DMPVkGDA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="get-directions-button"
                    >
                      Get Directions
                    </a>
                  </div>
                </section>

                {/* Phone Section */}
                <section className="about-item flex set-align grid">
                  <div className="about-item-icon">
                    <FaPhone size={50} alt="Phone Icon" />
                  </div>
                  <div className="about-item-text">
                    <div className="phone-list">
                      <div className="phone-item">
                        <p className="text-center">Shop</p>
                        <a href="tel:0297690007" className="text-gold hover:underline">
                          02 9769 0007
                        </a>
                      </div>
                      <div className="phone-item">
                        <p className="text-center">Mobile - Thaya</p>
                        <a href="tel:0413593119" className="text-gold hover:underline">
                          0413 593 119
                        </a>
                      </div>
                      <div className="phone-item">
                        <p className="text-center">Mobile - Kogitha</p>
                        <a href="tel:0433376740" className="text-gold hover:underline">
                          0433 376 740
                        </a>
                      </div>
                    </div>
                    <p className="text">Connect with Call</p>
                  </div>
                </section>

                {/* Working Hours Section */}
                <section className="about-item flex set-align grid">
                  <div className="about-item-icon">
                    <FaClock size={50} color="#4267B2" alt="Working Hours Icon" />
                  </div>
                  <div className="about-item-text">
                    <h3 className="fs-24 ls-2">10.00 AM TO 7.00 PM</h3>
                    <p className="text">Mon-Sat</p>
                  </div>
                </section>

                {/* Email Section */}
                <section className="about-item flex set-align grid">
                  <div className="about-item-icon">
                    <FaEnvelope size={50} color="#C13584" alt="Email Icon" />
                  </div>
                  <div className="about-item-text">
                    <a href="mailto:jearmyjewellery@gmail.com">
                      <h3 className="fs-24 ls-2">jearmyjewellery@gmail.com</h3>
                      <p className="text">E-mail</p>
                    </a>
                  </div>
                </section>

                {/* WhatsApp Section */}
                <section className="about-item flex set-align grid">
                  <div className="about-item-icon">
                    <FaWhatsapp size={50} color="#25D366" alt="WhatsApp Icon" />
                  </div>
                  <div className="about-item-text">
                    <a
                      href="https://wa.me/61413593119"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whatsapp-button"
                    >
                      Chat with us on WhatsApp
                    </a>
                    <p className="text">Connect through WhatsApp</p>
                  </div>
                </section>

                {/* Facebook Section */}
                <section className="about-item flex set-align grid">
                  <div className="about-item-icon">
                    <FaFacebook size={50} color="#4267B2" alt="Facebook Icon" />
                  </div>
                  <div className="about-item-text">
                    <a
                      href="https://facebook.com/profile.php?id=100063703264832"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-button whatsapp-button"
                    >
                      Like Our Page on Facebook
                    </a>
                  </div>
                </section>

                {/* Instagram Section */}
                <section className="about-item flex set-align grid">
                  <div className="about-item-icon">
                    <FaInstagram size={50} color="#C13584" alt="Instagram Icon" />
                  </div>
                  <div className="about-item-text">
                    <a
                      href="https://www.instagram.com/jearmyjewellery?igsh=YzljYTk1ODg3Zg=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-button whatsapp-button"
                    >
                      Follow Us on Instagram
                    </a>
                  </div>
                </section>

                {/* TikTok Section */}
                <section className="about-item flex set-align grid">
                  <div className="about-item-icon">
                    <FaTiktok size={50} color="#000000" alt="TikTok Icon" />
                  </div>
                  <div className="about-item-text">
                    <a
                      href="https://www.tiktok.com/@jea0509"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-button whatsapp-button"
                    >
                      Follow Us on TikTok
                    </a>
                  </div>
                </section>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;