import React from 'react';
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaBehance,FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer bg-dark section-p' id = "footer">
        <div className='container'>
            <div className='section-title'>
                <h3 className='text-brown'>Jearmy <span className='text-white'>Jwellery</span> PTY <span className='text-white'>LTD</span></h3>
            </div>
            <div className='footer-content'>
                <ul className='footer-social-links flex flex-c'>
                    <li>
                        <a href = "https://facebook.com/profile.php?id=100063703264832" className='text-white' target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                    </li>
                    <li>
                        <a href = "https://www.instagram.com/jearmyjewellery?igsh=YzljYTk1ODg3Zg==" className='text-white' target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                    </li>
                   
                    <li>
                        <a href = "/" className='text-white'>
                            <FaBehance />
                        </a>
                    </li>
                    <li>
                        <a href = "https://wa.me/61413593119" className='text-white' target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp />
                        </a>
                    </li>
                </ul>
                <p className='text-center fs-14 text-white op-07 fw-3 ls-1 reserved-text'>All Rights Reserved &copy; 2023</p>
                <p className='text-center fs-14 text-white op-07 fw-3 ls-1 reserved-text'>
                <a href = "https://facebook.com/Thareejan20/" className='text-white'>

                Site Developed By &copy; Thareejan Pakkiyarajah
                </a>
                </p>

            </div>
        </div>
    </div>
  )
}

export default Footer