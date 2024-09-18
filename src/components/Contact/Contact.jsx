import React from "react";
import "./Contact.css";
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaMapMarker, FaEnvelope, FaClock, FaTiktok } from "react-icons/fa"; // Importing TikTok icon

const Contact = () => {
  return (
    <div className="contact section-p">
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
                <div className="about-item flex set-align grid">
                  <div className="about-item-icon">
                    <FaMapMarker size={50} color="#4267B2" />
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
                </div>

                {/* Phone Section */}
                <div className="about-item flex set-align grid">
                  <div className="about-item-icon">
                    <FaPhone size={50}/>
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
                </div>

                {/* Working Hours Section */}
                <div className="about-item flex set-align grid">
                  <div className="about-item-icon">
                    <FaClock size={50} color="#4267B2" />
                  </div>
                  <div className="about-item-text">
                    <h3 className="fs-24 ls-2">10.00 AM TO 7.00 PM</h3>
                    <p className="text">Mon-Sat</p>
                  </div>
                </div>

                {/* Email Section */}
                <div className="about-item flex set-align grid">
                  <div className="about-item-icon">
                    <FaEnvelope size={50} color="#C13584" />
                  </div>
                  <div className="about-item-text">
                    <a href="mailto:jearmyjewellery@gmail.com">
                      <h3 className="fs-24 ls-2">jearmyjewellery@gmail.com</h3>
                      <p className="text">E-mail</p>
                    </a>
                  </div>
                </div>

                {/* WhatsApp Section */}
                <div className="about-item flex set-align grid">
                  <div className="about-item-icon">
                    <FaWhatsapp size={50} color="#25D366" />
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
                </div>

                {/* Facebook Section */}
                <div className="about-item flex set-align grid">
                  <div className="about-item-icon">
                    <FaFacebook size={50} color="#4267B2" />
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
                </div>

                {/* Instagram Section */}
                <div className="about-item flex set-align grid">
                  <div className="about-item-icon">
                    <FaInstagram size={50} color="#C13584" />
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
                </div>

                {/* TikTok Section */}
                <div className="about-item flex set-align grid">
                  <div className="about-item-icon">
                    <FaTiktok size={50} color="#000000" />
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
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;