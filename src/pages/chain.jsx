import React,{useState} from "react";
import { Parallax, Background } from "react-parallax";
import ReactPaginate from "react-paginate";
import "./jwellery.css";
import Card from "../components/Card/Card";
import Black from "../assets/images/black.jpg";
import blue from "../assets/images/mra.avif";
import { jewells, thaalis,chains,necklaceAarams } from "../constants/data";
import Navbar from "../components/Navbar/Navbar";

const Chain = () => {
  const [visibleItems, setVisibleItems] = useState(4); // Number of items initially visible
  const [allItems, setAllItems] = useState(necklaceAarams);

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4); // Increase the number of visible items
  };
  return (
    <div>
      <Parallax bgImage={blue} strength={700}>
      <Navbar />
        <div className="content">
          <div className="aboutx">
            <h1>Chains</h1>
            <p>
            Explore our diverse range of meticulously crafted chains, designed to complement your style and become a timeless addition to your jewelry collection.
            </p>
           
          </div>
        </div>
      </Parallax>
      <Parallax bgImage={blue} strength={10}>
      <section className="Collection top" id="Collection">
      <br/>
      <br/>
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
    </div>
  );
};

export default Chain;
