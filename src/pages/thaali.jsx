import React, { useState } from "react";
import { Parallax } from "react-parallax";
import "./jwellery.css";
import Card from "../components/Card/Card";
import { thaalis } from "../constants/data";
import Black from "../assets/images/mra.avif";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { FaArrowDown } from "react-icons/fa"; // Import arrow icon

const Thaali = () => {
  const [visibleItems, setVisibleItems] = useState(4); // Number of items initially visible

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4); // Increase the number of visible items
  };

  return (
    <div>
      {/* Parallax Header with smooth transitions */}
      <Parallax bgImage={Black} strength={700}>
        <Navbar />
        <div className="content">
          <div className="aboutx">
            <h1 className="animated-title">Thaali</h1>
            <p className="animated-description">
              Discover the cultural significance and exquisite craftsmanship of
              our enchanting thaali collection, beautifully blending tradition
              with timeless elegance.
            </p>
            {/* Blinking down arrow to indicate scrolling */}
            <div className="down-arrow">
              <FaArrowDown size={30} />
            </div>
          </div>
        </div>
      </Parallax>

      {/* Collection Section */}
      <section className="Collection top" id="Collection">
        <div className="c0">
          <h1>Explore Our Thaali Collection</h1>
          <div className="c">
            {thaalis.slice(0, visibleItems).map((value, index) => (
              <div className="c1" key={index}>
                <Card
                  image={value.image}
                  title={value.title}
                  price={value.price}
                />
              </div>
            ))}
          </div>
          {visibleItems < thaalis.length && (
            <button className="loadMoreButton" onClick={loadMore}>
              Load More
            </button>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Thaali;