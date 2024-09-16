import React, { useRef, useState } from "react";
import "./About.css";
import images from "../../constants/images";
import { FaPlay } from "react-icons/fa";
import WorkProcess from "../WorkProcess/WorkProcess";

const About = () => {
  const vidRef = useRef(null);
  const [toggleVideo, setToggleVideo] = useState(false);
  
  const playVideo = () => {
    setToggleVideo(!toggleVideo);
    if (!toggleVideo) vidRef.current.play();
    else vidRef.current.pause();
  };

  return (
    <div className="about section-p">
      <div className="container">
        <div className="work-content">
          <div className="section-title animated-title">
            <h3 className="text-gold">
              About <span className="text-dark">Us</span>
            </h3>
          </div>
        </div>

        <div className="about-content">
          {/* First Section with Image and Text */}
          <div className="about-grid grid">
            <img
              src={images.About_Alex}
              alt="About Jearmy Jewellery"
              className="about-img mx-auto animated-image"
            />
            <div className="section-title animated-text">
              <h3 className="text-gold">
                Jearmy <span className="text-dark">Jewellery</span>
              </h3>
              <p className="text mx-auto">
                Step into a world of timeless elegance. Discover exquisite
                jewelry creations that capture hearts and inspire awe. From
                dazzling diamonds to vibrant gemstones, our curated collection
                showcases the epitome of luxury and style.
              </p>
            </div>
          </div>

          <WorkProcess />

          {/* Explore Us Section */}
          <div className="about-grid grid explore-section">
            <div className="section-title animated-title">
              <h3 className="text-gold">
                Explore <span className="text-dark">Us</span>
              </h3>
              <p className="text mx-auto">
                Explore our Dazzling Collection of Exquisite Silver and Gold
                Jewelry and Accessories. Embrace luxury and craftsmanship that
                transcends trends, and let our jewelry become a reflection of
                your unique and refined taste.
              </p>
            </div>

            {/* Video Section with Play Button */}
            <div className="about-video">
              <img
                src={images.About_Shop}
                alt="Shop View"
                className="about-img mx-auto animated-image"
              />
              <div className="vidPlayBtn" onClick={playVideo}>
                <FaPlay size={20} className="play-icon" />
              </div>
              <video
                ref={vidRef}
                muted
                className="about-video-element"
                src={images.About_Video}
                type="video/mp4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;