import React,{useState} from "react";
import { Parallax, Background } from "react-parallax";
import ReactPaginate from "react-paginate";
import "./jwellery.css";
import Card from "../components/Card/Card";
import Black from "../assets/images/mra.avif";
import { jewells,rings } from "../constants/data";
import Navbar from "../components/Navbar/Navbar";


const Ring = () => {
  const [visibleItems, setVisibleItems] = useState(4); // Number of items initially visible
  const [allItems, setAllItems] = useState(rings);

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4); // Increase the number of visible items
  };

  return (
    <div>
      <Parallax bgImage={Black} strength={700}>
      <Navbar />
        <div className="content">
          <div className="aboutx">
            <h1>Rings</h1>
            <p>
            Discover timeless elegance and exquisite craftsmanship with our stunning collection of rings, designed to add a touch of brilliance to every moment.



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
    </div>
  );
};

export default Ring;
