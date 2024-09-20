import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";
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
      <Helmet>
        <title>About Us | Jearmy Jewellery</title>
        <meta
          name="description"
          content="Step into a world of timeless elegance at Jearmy Jewellery. Discover our exquisite collection of gold, silver, and diamond jewellery."
        />
        <meta
          name="keywords"
          content="Jewellery, gold jewellery, silver jewellery, diamond rings, necklaces, earrings, luxury jewellery, Jearmy Jewellery"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.jearmyjewellery.com/about" />
      </Helmet>

      <div className="container">
        <div className="work-content">
          <header className="section-title animated-title">
            <h3 className="text-gold">
              About <span className="text-dark">Us</span>
            </h3>
          </header>
        </div>

        <div className="about-content">
          {/* First Section with Image and Text */}
          <section className="about-grid grid">
            <img
              src={images.About_Alex}
              alt="Luxury Jewellery Collection by Jearmy"
              className="about-img mx-auto animated-image"
              loading="lazy" // Lazy loading for SEO performance
            />
            <article className="section-title animated-text">
              <h3 className="text-gold">
                Jearmy <span className="text-dark">Jewellery</span>
              </h3>
              <p className="text mx-auto">
                Step into a world of timeless elegance. Discover exquisite
                jewelry creations that capture hearts and inspire awe. From
                dazzling diamonds to vibrant gemstones, our curated collection
                showcases the epitome of luxury and style.
              </p>
            </article>
          </section>

          <WorkProcess />

          {/* Explore Us Section */}
          <section className="about-grid grid explore-section">
            <article className="section-title animated-title1">
              <h3 className="text-gold">
                Explore <span className="text-dark">Us</span>
              </h3>
              <p className="text1 mx-auto">
                Explore our Dazzling Collection of Exquisite Silver and Gold
                Jewelry and Accessories. Embrace luxury and craftsmanship that
                transcends trends, and let our jewelry become a reflection of
                your unique and refined taste.
              </p>
            </article>

            {/* Video Section with Play Button */}
            <div className="about-video">
              <img
                src={images.About_Shop}
                alt="Jearmy Jewellery Shop View"
                className="about-img mx-auto animated-image"
                loading="lazy" // Lazy loading for images
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
                controls // Accessible video controls
                preload="none" // Prevents unnecessary loading
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;