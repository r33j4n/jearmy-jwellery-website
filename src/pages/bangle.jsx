import React, { useState } from "react";
import { Parallax } from "react-parallax";
import "./jwellery.css";
import Card from "../components/Card/Card";
import Black from "../assets/images/black.jpg";
import { bangles } from "../constants/data";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Bangle = () => {
  const [visibleItems, setVisibleItems] = useState(4); // Number of items initially visible
  const [allItems] = useState(bangles);

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4); // Increase the number of visible items
  };

  return (
    <div>
      {/* Parallax Header */}
      <Parallax bgImage={Black} strength={700}>
        <Navbar />
        <div className="content">
          <div className="aboutx">
            <h1>Bangles</h1>
            <p>
              Adorn your wrists with our exquisite bangle selection, where traditional artistry meets contemporary elegance.
            </p>
          </div>
        </div>
      </Parallax>

      {/* Collection Section */}
      <Parallax bgImage={Black} strength={700}>
        <section className="Collection top" id="Collection">
          <div className="c0">
            <div className="c">
              {allItems.slice(0, visibleItems).map((value, index) => (
                <div className="c1" key={index}>
                  <Card
                    key={index}
                    image={value.image}
                    title={value.title}
                    price={value.price}
                  />
                </div>
              ))}
              <br />
              {visibleItems < allItems.length && (
                <button className="loadMoreButton" onClick={loadMore}>
                  Load More
                </button>
              )}
            </div>
            <br />
          </div>
        </section>
      </Parallax>

      <Footer />
    </div>
  );
};

export default Bangle;