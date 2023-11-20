import React, { useState } from "react";
import { Parallax } from "react-parallax";
import "./jwellery.css";
import Card from "../components/Card/Card";
import { jewells, thaalis } from "../constants/data";
import lightbg from "../assets/images/lightBG.jpeg";
import Black from "../assets/images/mra.avif";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Thaali = () => {
  const [visibleItems, setVisibleItems] = useState(4); // Number of items initially visible
  const [allItems, setAllItems] = useState(thaalis);

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4); // Increase the number of visible items
  };

  return (
    <div>
      <Parallax bgImage={Black} strength={700}>
      <Navbar />
        <div className="content">
          <div className="aboutx">
            <h1>Thaali</h1>
            <p>
              Discover the cultural significance and exquisite craftsmanship of
              our enchanting thaali collection, beautifully blending tradition
              with timeless elegance.
            </p>
          </div>
        </div>
      </Parallax>
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
      <Footer/>
    </div>
  );
};

export default Thaali;
